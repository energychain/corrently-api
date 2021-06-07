/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Returns lastSession info for all easee wallboxes (chargers) given user has access to.
* Refer to easee.cloud API for details. 
*
* username String Username as used on easy.cloud (optional)
* password String Password as used on easy.cloud (optional)
* returns List
* */
const easeeSessions = ({ username, password }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        username,
        password,
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
  easeeSessions,
};
