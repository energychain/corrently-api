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
 * The InlineResponse200 model module.
 * @module model/InlineResponse200
 * @version 2.0.0
 */
class InlineResponse200 {
    /**
     * Constructs a new <code>InlineResponse200</code>.
     * @alias module:model/InlineResponse200
     */
    constructor() { 
        
        InlineResponse200.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200} obj Optional instance to populate.
     * @return {module:model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Registration status of a user. In case unregistered gets returned use the `register` endpoint to (re-)register.
 * @member {module:model/InlineResponse200.StatusEnum} status
 */
InlineResponse200.prototype['status'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse200['StatusEnum'] = {

    /**
     * value: "registered"
     * @const
     */
    "registered": "registered",

    /**
     * value: "unregistered"
     * @const
     */
    "unregistered": "unregistered"
};



export default InlineResponse200;

