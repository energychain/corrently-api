const jwt = require('jsonwebtoken');
const axios = require('axios');
const appid = "0x21d4246b502A31DA473CB991b094ee6A74715de6";


/**
 * The CorrentlyClient class is a client for interacting with the Corrently API. It handles token management, API requests, and provides access to various API endpoints through its subclasses.
 *
 * Class Methods
 * - constructor(config): Initializes the client with a configuration object, sets up the API endpoint, and creates instances of API subclasses.
 * - getValidToken(): Returns a valid token, renewing it if necessary.
 * - isTokenExpiring(): Checks if the current token is expiring or has expired.
 * -renewToken(): Renews the token by making a request to the API.
 * - getTokenPayload(): Returns the decoded token payload.
 */
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
    this.dispatch = new DispatchAPI(this);
    this.marketdata = new MarketdataAPI(this);
    this.co2advisor = new CO2AdvisorAPI(this);
    this.schedule = new EnergyScheduleAPI(this);    
    this.strommix = new StrommixAPI(this);
    this.mol = new MeritOrderListAPI(this);
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
        appid:this.config.appid
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

class DispatchAPI {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get renewable energy dispatch information for a specific location
   * @param {string} zip - Postal Code of a city/location in Germany
   * @returns {Promise<object>} Detailed dispatch information
   */
  async getDispatch(zip) {
    if (!zip) {
      throw new Error('Zip code is required');
    }

    return await this.client.api.get('/v2.0/gsi/dispatch', {
      params: { zip }
    });
  }

  /**
   * Helper method to analyze the energy mix for a location
   * @param {string} zip - Postal Code of the location
   * @returns {Promise<object>} Analyzed energy mix with percentages and comparisons
   */
  async analyzeEnergyMix(zip) {
    const dispatch = await this.getDispatch(zip);
    
    // Calculate total percentages for each energy source
    const totalMix = {};
    for (const source in dispatch.postmix) {
      totalMix[source] = {
        current: dispatch.postmix[source] * 100,
        previous: dispatch.premix[source] * 100,
        change: ((dispatch.postmix[source] - dispatch.premix[source]) * 100).toFixed(2)
      };
    }

    // Analyze dispatch patterns
    const mainSources = dispatch.dispatch_from
      .sort((a, b) => b.energy - a.energy)
      .slice(0, 3)
      .map(source => ({
        location: source.location.prettyLabel,
        percentage: (source.energy * 100).toFixed(2)
      }));

    const mainDestinations = dispatch.dispatch_to
      .sort((a, b) => b.energy - a.energy)
      .slice(0, 3)
      .map(dest => ({
        location: dest.location.prettyLabel,
        percentage: (dest.energy * 100).toFixed(2)
      }));

    return {
      location: {
        city: dispatch.center.city,
        zip: dispatch.center.zip,
        coordinates: dispatch.center.coordinates
      },
      energyMix: totalMix,
      distribution: {
        mainSources,
        mainDestinations,
        averageDistance: dispatch.avg_distance_km
      },
      timeframe: {
        start: new Date(dispatch.timeframe.start),
        end: new Date(dispatch.timeframe.end)
      }
    };
  }
}

class CO2AdvisorAPI {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get CO2 forecast and consumption advice for a location
   * @param {string} zip - Postal code of the location in Germany
   * @returns {Promise<object>} CO2 forecast and consumption advice
   */
  async getAdvice(zip) {
    if (!zip) {
      throw new Error('Zip code is required');
    }

    return await this.client.api.get('/v2.0/gsi/advisor', {
      params: { q: zip }
    });
  }

  /**
   * Helper method to analyze CO2 data and find optimal consumption periods
   * @param {string} zip - Postal code of the location
   * @returns {Promise<object>} Analyzed CO2 data with recommendations
   */
  async analyzeConsumptionPeriods(zip) {
    const advisory = await this.getAdvice(zip);
    
    // Group periods by advice level
    const periodsByAdvice = {
      green: [],
      yellow: [],
      red: []
    };

    advisory.data.forEach(period => {
      periodsByAdvice[period.advice].push({
        time: new Date(period.time),
        co2: period.co2
      });
    });

    // Find best consecutive periods for consumption
    const findBestConsecutivePeriods = (periods, minLength = 2) => {
      if (periods.length < minLength) return [];
      
      let bestStart = 0;
      let currentStart = 0;
      let maxLength = 0;
      let currentLength = 1;

      for (let i = 1; i < periods.length; i++) {
        const timeDiff = periods[i].time - periods[i-1].time;
        if (timeDiff <= 3600000) { // 1 hour in milliseconds
          currentLength++;
          if (currentLength > maxLength) {
            maxLength = currentLength;
            bestStart = currentStart;
          }
        } else {
          currentLength = 1;
          currentStart = i;
        }
      }

      if (maxLength >= minLength) {
        return periods.slice(bestStart, bestStart + maxLength);
      }
      return [];
    };

    const bestGreenPeriods = findBestConsecutivePeriods(periodsByAdvice.green);

    return {
      location: {
        city: advisory.location.city,
        zip: advisory.location.zip
      },
      thresholds: advisory.tresholds,
      recommendations: {
        ...advisory.info,
        bestConsumptionWindow: bestGreenPeriods.length > 0 ? {
          start: bestGreenPeriods[0].time,
          end: bestGreenPeriods[bestGreenPeriods.length - 1].time,
          averageCO2: bestGreenPeriods.reduce((sum, p) => sum + p.co2, 0) / bestGreenPeriods.length
        } : null
      },
      statistics: {
        greenPeriods: periodsByAdvice.green.length,
        yellowPeriods: periodsByAdvice.yellow.length,
        redPeriods: periodsByAdvice.red.length,
        averageCO2: advisory.data.reduce((sum, p) => sum + p.co2, 0) / advisory.data.length,
        lowestCO2: Math.min(...advisory.data.map(p => p.co2)),
        highestCO2: Math.max(...advisory.data.map(p => p.co2))
      },
      periodsByHour: advisory.data.map(period => ({
        time: new Date(period.time),
        co2: period.co2,
        advice: period.advice,
        relativeLevel: ((period.co2 - advisory.tresholds.green.low) / 
                       (advisory.tresholds.red.high - advisory.tresholds.green.low) * 100).toFixed(1)
      }))
    };
  }
}

class MarketdataAPI {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get energy price information for a specific location
   * @param {string} zip - Zipcode (Postleitzahl) of a city in Germany
   * @returns {Promise<object>} Energy price information
   */
  async getPrices(zip) {
    if (!zip) {
      throw new Error('Zip code is required');
    }

    return await this.client.api.get('/v2.0/marketdata', {
      params: { zip }
    });
  }

  /**
   * Helper method to analyze price data and find optimal pricing periods
   * @param {string} zip - Zipcode of the location
   * @returns {Promise<object>} Analyzed price data with insights
   */
  async analyzePrices(zip) {
    const priceData = await this.getPrices(zip);
    
    // Sort periods by price
    const sortedPeriods = [...priceData.data].sort((a, b) => a.localprice - b.localprice);

    // Find best and worst periods
    const bestPeriods = sortedPeriods.slice(0, 3);
    const worstPeriods = sortedPeriods.slice(-3).reverse();

    // Calculate average prices
    const avgMarketPrice = priceData.data.reduce((sum, period) => sum + period.marketprice, 0) / priceData.data.length;
    const avgLocalPrice = priceData.data.reduce((sum, period) => sum + period.localprice, 0) / priceData.data.length;

    // Find periods with negative prices (potential energy surplus)
    const negativePricePeriods = priceData.data.filter(period => period.localprice < 0);

    // Calculate price spread between market and local prices
    const priceSpreadAnalysis = priceData.data.map(period => ({
      timestamp: new Date(period.start_timestamp),
      spread: period.localprice - period.marketprice,
      marketPrice: period.marketprice,
      localPrice: period.localprice
    }));

    return {
      location: priceData.data[0]?.localcell,
      summary: {
        averagePrices: {
          market: avgMarketPrice.toFixed(2),
          local: avgLocalPrice.toFixed(2),
          difference: (avgLocalPrice - avgMarketPrice).toFixed(2)
        },
        bestPeriods: bestPeriods.map(period => ({
          time: new Date(period.start_timestamp),
          price: period.localprice,
          savings: (avgLocalPrice - period.localprice).toFixed(2)
        })),
        worstPeriods: worstPeriods.map(period => ({
          time: new Date(period.start_timestamp),
          price: period.localprice,
          excess: (period.localprice - avgLocalPrice).toFixed(2)
        }))
      },
      negativePrices: {
        count: negativePricePeriods.length,
        periods: negativePricePeriods.map(period => ({
          time: new Date(period.start_timestamp),
          price: period.localprice
        }))
      },
      priceSpread: {
        analysis: priceSpreadAnalysis,
        maxSpread: Math.max(...priceSpreadAnalysis.map(p => Math.abs(p.spread))).toFixed(2)
      },
      metadata: {
        timezone: priceData.timezone,
        documentation: priceData.documentation,
        support: priceData.support
      }
    };
  }
}

class EnergyScheduleAPI {
  constructor(client) {
    this.client = client;
  }

  /**
   * Create a new energy schedule
   * @param {object} params - Schedule creation parameters
   * @param {string} params.zip - 5-digit postal code
   * @param {object} params.requirements - Schedule requirements
   * @param {string} params.requirements.law - Optimization law (comfort|price|solar|emission)
   * @param {number} [params.requirements.activeHours] - Number of active hours required
   * @param {boolean} [params.requirements.consecutiveHours] - Whether hours must be consecutive
   * @param {number} [params.requirements.energyDemand] - Total energy demand
   * @param {number} [params.requirements.maxLoad] - Maximum power load
   * @param {number} [params.requirements.avgLoad] - Average power load
   * @param {string} [params.date] - Schedule date (YYYY-MM-DD)
   * @param {number} [params.coverageHours] - Hours to cover (1-36)
   * @returns {Promise<object>} Created schedule
   */
  async createSchedule(params) {
    if (!params.zip || !params.requirements || !params.requirements.law) {
      throw new Error('Zip code and optimization law are required');
    }

    return await this.client.api.put('/v2.0/gsi/schedule', params);
  }

  /**
   * Retrieve an existing schedule
   * @param {string} scheduleId - Unique identifier of the schedule
   * @returns {Promise<object>} Schedule details
   */
  async getSchedule(scheduleId) {
    if (!scheduleId) {
      throw new Error('Schedule ID is required');
    }

    return await this.client.api.get('/v2.0/gsi/schedule', {
      params: { scheduleId }
    });
  }

  /**
   * Update consumption for a schedule
   * @param {string} scheduleId - Schedule identifier
   * @param {object} consumption - Consumption data
   * @returns {Promise<object>} Updated schedule
   */
  async updateConsumption(scheduleId, consumption) {
    if (!scheduleId || !consumption) {
      throw new Error('Schedule ID and consumption data are required');
    }

    return await this.client.api.post('/v2.0/gsi/schedule', {
      scheduleId,
      type: 'status_update',
      consumption
    });
  }

  /**
   * Update requirements for a schedule
   * @param {string} scheduleId - Schedule identifier
   * @param {object} requirements - New requirements
   * @returns {Promise<object>} Updated schedule
   */
  async updateRequirements(scheduleId, requirements) {
    if (!scheduleId || !requirements) {
      throw new Error('Schedule ID and requirements are required');
    }

    return await this.client.api.post('/v2.0/gsi/schedule', {
      scheduleId,
      type: 'requirement_update',
      requirements
    });
  }

  /**
   * Helper method to analyze schedule optimization
   * @param {object} schedule - Schedule object
   * @returns {object} Schedule analysis
   */
  analyzeSchedule(schedule) {
    const activeSlots = schedule.schedule.timeSlots.filter(slot => slot.state === 'on');
    const totalSlots = schedule.schedule.timeSlots.length;
    
    // Calculate average metrics for active periods
    const averageMetrics = activeSlots.reduce((acc, slot) => {
      Object.entries(slot.metrics).forEach(([key, value]) => {
        acc[key] = (acc[key] || 0) + value;
      });
      return acc;
    }, {});

    Object.keys(averageMetrics).forEach(key => {
      averageMetrics[key] = averageMetrics[key] / activeSlots.length;
    });

    // Find optimal and worst periods based on the optimization law
    const law = schedule.schedule.requirements.law;
    const metricKey = {
      price: 'price',
      emission: 'co2_g_standard',
      solar: 'esolar',
      comfort: 'gsi'
    }[law];

    const sortedSlots = [...activeSlots].sort((a, b) => {
      if (law === 'solar') {
        return b.metrics[metricKey] - a.metrics[metricKey];
      }
      return a.metrics[metricKey] - b.metrics[metricKey];
    });

    return {
      overview: {
        status: schedule.status,
        optimizationLaw: law,
        activeSlots: activeSlots.length,
        totalSlots,
        utilization: ((activeSlots.length / totalSlots) * 100).toFixed(1) + '%'
      },
      progress: schedule.progress || {
        completedSlots: 0,
        totalSlots: activeSlots.length,
        completionPercentage: "0%"
      },
      optimization: {
        averageMetrics,
        bestPeriod: sortedSlots[0],
        worstPeriod: sortedSlots[sortedSlots.length - 1]
      },
      currentRecommendation: schedule.schedule.currentRecommendation || null,
      expectedEnergy: activeSlots.reduce((sum, slot) => sum + (slot.expectedEnergy || 0), 0)
    };
  }
}

class StrommixAPI {
  constructor(client) {
    this.client = client;
    
    // Energy type mapping
    this.energyTypes = {
      B01: 'Biomass',
      B02: 'Fossil Brown coal/Lignite',
      B03: 'Fossil Coal-derived gas',
      B04: 'Fossil Gas',
      B05: 'Fossil Hard coal',
      B06: 'Fossil Oil',
      B07: 'Fossil Oil shale',
      B08: 'Fossil Peat',
      B09: 'Geothermal',
      B10: 'Hydro Pumped Storage',
      B11: 'Hydro Run-of-river and poundage',
      B12: 'Hydro Water Reservoir',
      B13: 'Marine',
      B14: 'Nuclear',
      B15: 'Other renewable',
      B16: 'Solar',
      B17: 'Waste',
      B18: 'Wind Offshore',
      B19: 'Wind Onshore',
      B20: 'Other'
    };
  }

  /**
   * Get energy production mix data
   * @param {object} [params] - Query parameters
   * @param {string} [params.period] - Predefined time period (e.g., 'lastmonth', 'last30days')
   * @param {string} [params.from] - Start date (ISO 8601 format or timestamp)
   * @param {string} [params.to] - End date (ISO 8601 format or timestamp)
   * @returns {Promise<object>} Energy mix data
   */
  async getEnergyMix(params = {}) {
    return await this.client.api.get('v2.0/gsi/strommix', {
      params: {
        period: params.period,
        from: params.from,
        to: params.to
      }
    });
  }

  /**
   * Helper method to analyze energy mix data
   * @param {object} mixData - Energy mix data from API
   * @returns {object} Analyzed energy mix data
   */
  analyzeEnergyMix(mixData) {
    // Group energy sources
    const groupedSources = {
      renewable: ['B01', 'B09', 'B11', 'B12', 'B13', 'B15', 'B16', 'B18', 'B19'],
      fossil: ['B02', 'B03', 'B04', 'B05', 'B06', 'B07', 'B08'],
      nuclear: ['B14'],
      other: ['B10', 'B17', 'B20']
    };

    // Calculate totals for each group
    const groupTotals = Object.entries(groupedSources).reduce((acc, [group, types]) => {
      const groupData = mixData.mix.filter(item => types.includes(item.type));
      acc[group] = {
        total: groupData.reduce((sum, item) => sum + item.value, 0),
        percentage: groupData.reduce((sum, item) => sum + item.percentage, 0),
        sources: groupData.map(item => ({
          name: item.name,
          value: item.value,
          percentage: item.percentage
        }))
      };
      return acc;
    }, {});

    // Find dominant sources
    const dominantSources = [...mixData.mix]
      .sort((a, b) => b.value - a.value)
      .slice(0, 3)
      .map(source => ({
        name: source.name,
        percentage: source.percentage,
        value: source.value
      }));

    return {
      period: {
        start: new Date(mixData.period.from),
        end: new Date(mixData.period.to),
        type: mixData.period.requested
      },
      summary: {
        totalProduction: mixData.total,
        timestamp: new Date(mixData.timestamp),
        dominantSources
      },
      distribution: {
        renewable: groupTotals.renewable,
        fossil: groupTotals.fossil,
        nuclear: groupTotals.nuclear,
        other: groupTotals.other
      },
      sustainability: {
        renewablePercentage: groupTotals.renewable.percentage,
        fossilPercentage: groupTotals.fossil.percentage,
        carbonIntensity: this.calculateCarbonIntensity(mixData.mix)
      }
    };
  }

  /**
   * Helper method to calculate approximate carbon intensity
   * @private
   * @param {Array} mix - Energy mix data
   * @returns {number} Approximate carbon intensity in gCO2/kWh
   */
  calculateCarbonIntensity(mix) {
    // Approximate CO2 emissions per kWh for different sources
    const carbonFactors = {
      B01: 230,  // Biomass
      B02: 1000, // Lignite
      B03: 350,  // Coal-derived gas
      B04: 490,  // Natural gas
      B05: 820,  // Hard coal
      B06: 740,  // Oil
      B16: 41,   // Solar
      B18: 12,   // Wind Offshore
      B19: 11    // Wind Onshore
    };

    let totalEmissions = 0;
    let totalPercentage = 0;

    mix.forEach(source => {
      if (carbonFactors[source.type]) {
        totalEmissions += carbonFactors[source.type] * (source.percentage / 100);
        totalPercentage += source.percentage / 100;
      }
    });

    return totalEmissions / (totalPercentage || 1);
  }
}

class MeritOrderListAPI {
  constructor(client) {
    this.client = client;
    
    // Energy type mapping
    this.energyTypes = {
      B01: 'Biomass',
      B02: 'Fossil Brown coal/Lignite',
      B03: 'Fossil Coal-derived gas',
      B04: 'Fossil Gas',
      B05: 'Fossil Hard coal',
      B06: 'Fossil Oil',
      B07: 'Fossil Oil shale',
      B08: 'Fossil Peat',
      B09: 'Geothermal',
      B10: 'Hydro Pumped Storage',
      B11: 'Hydro Run-of-river and poundage',
      B12: 'Hydro Water Reservoir',
      B13: 'Marine',
      B14: 'Nuclear',
      B15: 'Other renewable',
      B16: 'Solar',
      B17: 'Waste',
      B18: 'Wind Offshore',
      B19: 'Wind Onshore',
      B20: 'Other'
    };
  }

  /**
   * Get Merit Order List (MOL) data for Germany
   * @returns {Promise<object>} Energy mix data
   */
  async analysis(params = {}) {
    return await this.client.api.get('v2.0/mol/analysis', {
      params: {       
      }
    });
  }

}

module.exports = CorrentlyClient;