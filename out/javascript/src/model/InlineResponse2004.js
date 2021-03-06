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

import ApiClient from '../ApiClient';

/**
 * The InlineResponse2004 model module.
 * @module model/InlineResponse2004
 * @version 2.0.0
 */
class InlineResponse2004 {
    /**
     * Constructs a new <code>InlineResponse2004</code>.
     * @alias module:model/InlineResponse2004
     */
    constructor() { 
        
        InlineResponse2004.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004} The populated <code>InlineResponse2004</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004();

            if (data.hasOwnProperty('account')) {
                obj['account'] = ApiClient.convertToType(data['account'], 'String');
            }
            if (data.hasOwnProperty('1.8.0')) {
                obj['1.8.0'] = ApiClient.convertToType(data['1.8.0'], 'Number');
            }
            if (data.hasOwnProperty('1.8.1')) {
                obj['1.8.1'] = ApiClient.convertToType(data['1.8.1'], 'Number');
            }
            if (data.hasOwnProperty('1.8.2')) {
                obj['1.8.2'] = ApiClient.convertToType(data['1.8.2'], 'Number');
            }
            if (data.hasOwnProperty('timeStamp')) {
                obj['timeStamp'] = ApiClient.convertToType(data['timeStamp'], 'Number');
            }
            if (data.hasOwnProperty('_processingTime')) {
                obj['_processingTime'] = ApiClient.convertToType(data['_processingTime'], 'Number');
            }
            if (data.hasOwnProperty('co2_g_standard')) {
                obj['co2_g_standard'] = ApiClient.convertToType(data['co2_g_standard'], 'Number');
            }
            if (data.hasOwnProperty('co2_g_oekostrom')) {
                obj['co2_g_oekostrom'] = ApiClient.convertToType(data['co2_g_oekostrom'], 'Number');
            }
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'Number');
            }
            if (data.hasOwnProperty('credits')) {
                obj['credits'] = ApiClient.convertToType(data['credits'], Object);
            }
        }
        return obj;
    }


}

/**
 * Stromkonto/Metering address allocated (this is not the MELOID!)
 * @member {String} account
 */
InlineResponse2004.prototype['account'] = undefined;

/**
 * Reading as provided as input in Wh
 * @member {Number} 1.8.0
 */
InlineResponse2004.prototype['1.8.0'] = undefined;

/**
 * Green energy calculated using Green Power Index (GrünstromIndex) in Wh
 * @member {Number} 1.8.1
 */
InlineResponse2004.prototype['1.8.1'] = undefined;

/**
 * Grey energy calculated using Green Power Index (GrünstromIndex) in Wh
 * @member {Number} 1.8.2
 */
InlineResponse2004.prototype['1.8.2'] = undefined;

/**
 * API Consensus time this reading was fully received
 * @member {Number} timeStamp
 */
InlineResponse2004.prototype['timeStamp'] = undefined;

/**
 * Time this reading got imported into consensus (e.q. signed timestamp).
 * @member {Number} _processingTime
 */
InlineResponse2004.prototype['_processingTime'] = undefined;

/**
 * CO2 Emission of metered energy in a standard mix
 * @member {Number} co2_g_standard
 */
InlineResponse2004.prototype['co2_g_standard'] = undefined;

/**
 * CO2 Emission of metered energy in a green energy mix (e.q. Ökostromtarif)
 * @member {Number} co2_g_oekostrom
 */
InlineResponse2004.prototype['co2_g_oekostrom'] = undefined;

/**
 * Time to Live for this reader. If no update is provided it gets decommissioned.
 * @member {Number} ttl
 */
InlineResponse2004.prototype['ttl'] = undefined;

/**
 * Update credits this meter has. Gets refilled automtically to prevent too frequent updates
 * @member {Object} credits
 */
InlineResponse2004.prototype['credits'] = undefined;






export default InlineResponse2004;

