/* eslint-disable no-unused-vars */
const Service = require('./Service');

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

module.exports = {
  gsiDispatch,
};
