/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create a receipt for an energy delivery (only valid in Germany).
* Creates a full featured receipt (Quittung) for an energy delivery as it appears on a charging session or similar events. Allows to embed receipt generation directly into external services. 
*
* inlineObject4 InlineObject4 
* returns inline_response_200_6
* */
const quittungCreate = ({ inlineObject4 }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        inlineObject4,
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
  quittungCreate,
};
