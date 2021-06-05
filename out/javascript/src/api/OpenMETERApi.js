/**
 * Corrently.io
 * *Corrently - from italian corrente, which is energy* # Introduction The Corrently ecosystem gets maintained by [STROMDAO GmbH](https://www.stromdao.de/) to support green energy services for prosumers, grid operators, regulators, integrators or any other party with an emerging need of consensus driven management. As the [energy product Corrently](https://www.corrently.de/) got first launched in Germany parts of this documentation provide simple translations for better understanding. 
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: dev@stromdao.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Ommeters from '../model/Ommeters';

/**
* OpenMETER service.
* @module api/OpenMETERApi
* @version 2.0.0
*/
export default class OpenMETERApi {

    /**
    * Constructs a new OpenMETERApi. 
    * @alias module:api/OpenMETERApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the omActivities operation.
     * @callback module:api/OpenMETERApi~omActivitiesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Ommeters>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Public shared smart meters installed in Germany and available for subservices and exploration.
     * Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery. 
     * @param {module:api/OpenMETERApi~omActivitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Ommeters>}
     */
    omActivities(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Ommeters];
      return this.apiClient.callApi(
        '/alternative/openmeter/activities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the omMeters operation.
     * @callback module:api/OpenMETERApi~omMetersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Ommeters>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Public shared smart meters installed in Germany and available for subservices and exploration.
     * Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery. 
     * @param {module:api/OpenMETERApi~omMetersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Ommeters>}
     */
    omMeters(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Ommeters];
      return this.apiClient.callApi(
        '/alternative/openmeter/meters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the omReadings operation.
     * @callback module:api/OpenMETERApi~omReadingsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Ommeters>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Public shared smart meters installed in Germany and available for subservices and exploration.
     * Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery. 
     * @param {module:api/OpenMETERApi~omReadingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Ommeters>}
     */
    omReadings(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Ommeters];
      return this.apiClient.callApi(
        '/alternative/openmeter/readings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}