/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* WiM Proess Informtion
* Access to status information of an existing metering change and allocation process. 
*
* vid String VID key of the process. (optional)
* returns inline_response_200_6
* */
const wimstatus = ({ vid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        vid,
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
  wimstatus,
};
