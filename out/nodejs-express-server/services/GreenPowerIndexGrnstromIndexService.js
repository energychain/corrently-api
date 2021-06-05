/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get best hour (with most regional green energy) in a given timeframe.
* Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state). 
*
* zip String Zipcode (Postleitzahl) of a city in Germany. (optional)
* key String Any valid Stromkonto account (address). (optional)
* timeframe Integer Number of hours to check (default 24 hours from now). (optional)
* hours Integer How many hours in row do you need the device turned on? (optional)
* returns Boolean
* */
const gsiBesthour = ({ zip, key, timeframe, hours }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        zip,
        key,
        timeframe,
        hours,
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
* Dispatch (Green Energy Distribution Schedule)
* Dispatch of green energy has two aspects to consider:   - Availability of gerneration facility (depends on weather and installed capacity)   - Demand of energy Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic). 
*
* zip String Zipcode (Postleitzahl) of a city in Germany. (optional)
* key String Any valid Stromkonto account (address). (optional)
* returns inline_response_200_2
* */
const gsiDispatch = ({ zip, key }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        zip,
        key,
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
* Marketdata
* Compatible to awattar (https://api.awattar.de/v1/marketdata) API interface but data comes from GreenPowerIndex instead of EPEXSpot. 
*
* zip String Zipcode (Postleitzahl) of a city in Germany. (optional)
* returns inline_response_200_3
* */
const gsiMarketdata = ({ zip }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        zip,
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
* Prediction
* Retrieval the GreenPowerIndex (GrünstromIndex) for a given city (by zipcode) in Germany. 
*
* zip String Zipcode (Postleitzahl) of a city in Germany. (optional)
* key String Any valid Stromkonto account (address). (optional)
* returns inline_response_200_1
* */
const gsiPrediction = ({ zip, key }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        zip,
        key,
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
  gsiBesthour,
  gsiDispatch,
  gsiMarketdata,
  gsiPrediction,
};
