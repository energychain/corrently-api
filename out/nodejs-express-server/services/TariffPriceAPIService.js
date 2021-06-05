/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Energy Tariff information
* Provides pricing data for private households with standard load profiles (Standardlastprofil H0). 
*
* zipcode String Zipcode (Postzleitzahl) of a city in Germany. (optional)
* returns List
* */
const tariffSLPH0 = ({ zipcode }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        zipcode,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Energy Tariff price components
* Provides insides into the different cost components of energy for a private household. Sample Request: https://api.corrently.io/v2.0/tariff/components?email=demo%40corrently.io&zip=69168&kwha=3300 
*
* zipcode String Zipcode (Postzleitzahl) of a city in Germany. (optional)
* email String Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time (optional)
* kwha Integer Total amount of energy in kilo-watt-hours per year. (sample 2100) (optional)
* milliseconds Integer If provided all results will be scaled to this timeframe (optional)
* wh Integer If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created. (optional)
* returns componentsh0
* */
const tariffcomponents = ({ zipcode, email, kwha, milliseconds, wh }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        zipcode,
        email,
        kwha,
        milliseconds,
        wh,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  tariffSLPH0,
  tariffcomponents,
};
