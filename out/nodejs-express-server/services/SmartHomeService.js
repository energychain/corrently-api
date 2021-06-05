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

module.exports = {
  gsiBesthour,
};
