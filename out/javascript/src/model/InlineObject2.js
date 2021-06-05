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

import ApiClient from '../ApiClient';

/**
 * The InlineObject2 model module.
 * @module model/InlineObject2
 * @version 2.0.0
 */
class InlineObject2 {
    /**
     * Constructs a new <code>InlineObject2</code>.
     * @alias module:model/InlineObject2
     */
    constructor() { 
        
        InlineObject2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject2} obj Optional instance to populate.
     * @return {module:model/InlineObject2} The populated <code>InlineObject2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject2();

            if (data.hasOwnProperty('account')) {
                obj['account'] = ApiClient.convertToType(data['account'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('variation')) {
                obj['variation'] = ApiClient.convertToType(data['variation'], 'String');
            }
            if (data.hasOwnProperty('signature')) {
                obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Stromkonto account address of sender
 * @member {String} account
 */
InlineObject2.prototype['account'] = undefined;

/**
 * Stromkonto account address of reciever
 * @member {String} to
 */
InlineObject2.prototype['to'] = undefined;

/**
 * Amount to transfer (in Watthours for electricity, or pcs for trees)
 * @member {Number} value
 */
InlineObject2.prototype['value'] = undefined;

/**
 * @member {module:model/InlineObject2.VariationEnum} variation
 */
InlineObject2.prototype['variation'] = undefined;

/**
 * Signature per Stromkonto setting (might be simple email confirmation link)
 * @member {String} signature
 */
InlineObject2.prototype['signature'] = undefined;





/**
 * Allowed values for the <code>variation</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject2['VariationEnum'] = {

    /**
     * value: "gsb"
     * @const
     */
    "gsb": "gsb",

    /**
     * value: "erzeugung"
     * @const
     */
    "erzeugung": "erzeugung",

    /**
     * value: "eigenstrom"
     * @const
     */
    "eigenstrom": "eigenstrom",

    /**
     * value: "co2"
     * @const
     */
    "co2": "co2",

    /**
     * value: "baeume"
     * @const
     */
    "baeume": "baeume"
};



export default InlineObject2;

