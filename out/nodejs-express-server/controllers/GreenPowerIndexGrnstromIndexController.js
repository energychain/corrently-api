/**
 * The GreenPowerIndexGrnstromIndexController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/GreenPowerIndexGrnstromIndexService');
const gsiBesthour = async (request, response) => {
  await Controller.handleRequest(request, response, service.gsiBesthour);
};

const gsiDispatch = async (request, response) => {
  await Controller.handleRequest(request, response, service.gsiDispatch);
};

const gsiMarketdata = async (request, response) => {
  await Controller.handleRequest(request, response, service.gsiMarketdata);
};

const gsiPrediction = async (request, response) => {
  await Controller.handleRequest(request, response, service.gsiPrediction);
};


module.exports = {
  gsiBesthour,
  gsiDispatch,
  gsiMarketdata,
  gsiPrediction,
};
