const jwt = require('jsonwebtoken');
const axios = require('axios');
const appid = "0x21d4246b502A31DA473CB991b094ee6A74715de6";

class CorrentlyClient {
  constructor(config) {
    this.config = {
      baseUrl: config.baseUrl || 'https://api.corrently.io',
      initialToken: config.token || null,
      appid: config.appid || appid,
      timeout: config.timeout || 30000,
      ...config
    };
    
    this.token = config.token;
    this.tokenExpiryBuffer = 60 * 1000; // 1 minute buffer before actual expiry

    // Create axios instance with default config
    this.api = axios.create({
      baseURL: this.config.baseUrl,
      timeout: this.config.timeout,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Add request interceptor for token management
    this.api.interceptors.request.use(
      async (config) => {
        const token = await this.getValidToken();
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Add response interceptor for token renewal on 401
    this.api.interceptors.response.use(
      (response) => response.data,
      async (error) => {
        const originalRequest = error.config;

        // If error is 401 and we haven't retried yet
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            await this.renewToken();
            originalRequest.headers.Authorization = `Bearer ${this.token}`;
            return this.api(originalRequest);
          } catch (renewError) {
            return Promise.reject(renewError);
          }
        }

        // Transform axios error to more readable format
        const errorMessage = error.response?.data?.message || error.message;
        const enhancedError = new Error(errorMessage);
        enhancedError.status = error.response?.status;
        enhancedError.data = error.response?.data;
        return Promise.reject(enhancedError);
      }
    );

    // Initialize API subclasses
    this.co2meter = new CO2MeterAPI(this);
    this.phevChargeOrFuel = new PHEVChargeOrFuelAPI(this);
    this.gsi = new GruenstromIndexAPI(this);
    //
  }

  async getValidToken() {
    if (!this.token || this.isTokenExpiring()) {
      await this.renewToken();
    }
    return this.token;
  }

  isTokenExpiring() {
    try {
      const decoded = jwt.decode(this.token);
      if (!decoded || !decoded.exp) {
        return true;
      }
      const expiryTime = decoded.exp * 1000; // Convert to milliseconds
      return Date.now() + this.tokenExpiryBuffer >= expiryTime;
    } catch (error) {
      console.warn('Error decoding token:', error);
      return true;
    }
  }

  async renewToken() {
    try {
      const response = await axios.post(`${this.config.baseUrl}/v2.0/auth/requestToken`, {
        appid:appid
      });
      this.token = response.data.token;
    } catch (error) {
      throw new Error(`Token renewal failed: ${error.message}`);
    }
  }

  getTokenPayload() {
    try {
      return jwt.decode(this.token);
    } catch (error) {
      console.warn('Error decoding token:', error);
      return null;
    }
  }
}

class CO2MeterAPI {
  constructor(client) {
    this.client = client;
  }

  /**
   * Retrieve last Reading of given co2meter
   * @param {string} meterId - Unique Identifier as given from creation response
   * @returns {Promise<object>} CO2 meter response
   */
  async getReading(meterId) {
    return await this.client.api.get('/v2.0/co2meter', {
      params: { meterId }
    });
  }

  /**
   * Creates a new CO2 meter or updates an existing one
   * @param {object} params - Meter parameters
   * @param {string} [params.meterId] - Existing meter ID for updates
   * @param {number} params.reading - Reading value in watt-hours (Wh)
   * @param {string} [params.zip] - Postal code (required for new meters)
   * @returns {Promise<object>} CO2 meter response
   */
  async createOrUpdate(params) {
    if (!params.reading) {
      throw new Error('Reading is required');
    }
    
    if (!params.meterId && !params.zip) {
      throw new Error('Either meterId or zip must be provided');
    }

    return await this.client.api.post('/v2.0/co2meter', params);
  }
}

class PHEVChargeOrFuelAPI {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get advice on whether to charge or fuel a PHEV
   * @param {object} params - Parameters for the advice request
   * @param {string} params.zip - Zip code (Postleitzahl) of a city in Germany
   * @param {number} params.electricConsumption - Electric consumption in kWh per 100 km
   * @param {number} params.fuelConsumption - Fuel consumption in liters per 100 km
   * @returns {Promise<object>} Advice response with cost and emissions comparison
   */
  async getAdvice({ zip, electricConsumption, fuelConsumption }) {
    if (!zip) {
      throw new Error('Zip code is required');
    }
    if (!electricConsumption) {
      throw new Error('Electric consumption is required');
    }
    if (!fuelConsumption) {
      throw new Error('Fuel consumption is required');
    }

    return await this.client.api.get('/v2.0/phev/chargeorfuel', {
      params: {
        zip,
        electricConsumption,
        fuelConsumption
      }
    });
  }
}

class GruenstromIndexAPI {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get GrünstromIndex prediction for a location
   * @param {object} params - Parameters for the prediction request
   * @param {string} params.zip - Zipcode (Postleitzahl) of a city/village in Germany
   * @returns {Promise<object>} Detailed forecast with renewable energy availability
   */
  async getPrediction(zip) {
    if (!zip) {
      throw new Error('Zip code is required');
    }

    return await this.client.api.get('/v2.0/gsi/prediction', {
      params: { zip }
    });
  }

  /**
   * Helper method to find the best time to consume energy in the next 24 hours
   * @param {string} zip - Zipcode for the location
   * @returns {Promise<object>} Best time period with highest renewable energy percentage
   */
  async findBestGreenPeriod(zip) {
    const prediction = await this.getPrediction(zip);
    
    // Get next 24 hours of forecasts
    const next24Hours = prediction.forecast
      .filter(f => f.timeStamp >= Date.now() && f.timeStamp <= Date.now() + 24 * 60 * 60 * 1000)
      .sort((a, b) => b.gsi - a.gsi);

    const bestPeriod = next24Hours[0];
    if (!bestPeriod) {
      return null;
    }

    return {
      period: {
        start: new Date(bestPeriod.timeframe.start),
        end: new Date(bestPeriod.timeframe.end)
      },
      gsi: bestPeriod.gsi,
      renewableEnergy: {
        total: bestPeriod.eevalue,
        wind: bestPeriod.ewind,
        solar: bestPeriod.esolar
      },
      co2: {
        standard: bestPeriod.co2_g_standard,
        green: bestPeriod.co2_g_oekostrom
      },
      energyPrice: parseFloat(bestPeriod.energyprice)
    };
  }
}

module.exports = CorrentlyClient;