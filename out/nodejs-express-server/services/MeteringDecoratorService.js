/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Meter Reading
* Retrieves a metered reading using account (Stromkonto). 
*
* account String Account/Address (Stromkonto) to retrieve reading for. (optional)
* returns inline_response_200_4
* */
const meteringGet = ({ account }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        account,
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
* Meter Reading
* Post meter reading and get it decorated. Best practice is to first create a new Stromkonto with the register method and choose a nice secret to protect updates. Now regularly send updates to get readings (consumption) split into green power (1.8.1) and grey power (1.8.2). 
*
* inlineObject3 InlineObject3 
* returns inline_response_200_5
* */
const meteringPost = ({ inlineObject3 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject3,
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
  meteringGet,
  meteringPost,
};
