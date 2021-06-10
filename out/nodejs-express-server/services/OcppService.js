/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Returns lastSession info of OCCP Cloud service for clearing in corrently ecosystem. Might be tested via [OCPP cloud simulator](https://ocpp.corrently.cloud).
* Last session Info of managed EV charging stations connected to the correnty ecosystem.    
*
* returns List
* */
const ocppSessions = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
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
  ocppSessions,
};
