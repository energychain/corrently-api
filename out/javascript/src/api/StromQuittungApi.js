/**
 * Corrently.io
 * *Corrently - from italian corrente, which is energy* # Introduction The Corrently ecosystem gets maintained by [STROMDAO GmbH](https://www.stromdao.de/) to support green energy services for prosumers, grid operators, regulators, integrators or any other party with an emerging need of consensus driven management. As the [energy product Corrently](https://www.corrently.de/) got first launched in Germany parts of this documentation provide simple translations for better understanding. [Released SKDs for Download](https://github.com/energychain/corrently-api/releases) 
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
import InlineObject4 from '../model/InlineObject4';

/**
* StromQuittung service.
* @module api/StromQuittungApi
* @version 2.0.0
*/
export default class StromQuittungApi {

    /**
    * Constructs a new StromQuittungApi. 
    * @alias module:api/StromQuittungApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the quittungCreate operation.
     * @callback module:api/StromQuittungApi~quittungCreateCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a receipt for an energy delivery (only valid in Germany).
     * Creates a full featured receipt (Quittung) for an energy delivery as it appears on a charging session or similar events. Allows to embed receipt generation directly into external services. 
     * @param {module:model/InlineObject4} inlineObject4 
     * @param {module:api/StromQuittungApi~quittungCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    quittungCreate(inlineObject4, callback) {
      let postBody = inlineObject4;
      // verify the required parameter 'inlineObject4' is set
      if (inlineObject4 === undefined || inlineObject4 === null) {
        throw new Error("Missing the required parameter 'inlineObject4' when calling quittungCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/quittung/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}