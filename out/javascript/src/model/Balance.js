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
import Transactions from './Transactions';

/**
 * The Balance model module.
 * @module model/Balance
 * @version 2.0.0
 */
class Balance {
    /**
     * Constructs a new <code>Balance</code>.
     * @alias module:model/Balance
     */
    constructor() { 
        
        Balance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Balance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Balance} obj Optional instance to populate.
     * @return {module:model/Balance} The populated <code>Balance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Balance();

            if (data.hasOwnProperty('soll')) {
                obj['soll'] = ApiClient.convertToType(data['soll'], 'Number');
            }
            if (data.hasOwnProperty('haben')) {
                obj['haben'] = ApiClient.convertToType(data['haben'], 'Number');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
            }
            if (data.hasOwnProperty('txs')) {
                obj['txs'] = ApiClient.convertToType(data['txs'], [Transactions]);
            }
            if (data.hasOwnProperty('variation')) {
                obj['variation'] = ApiClient.convertToType(data['variation'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Sum due by account
 * @member {Number} soll
 */
Balance.prototype['soll'] = undefined;

/**
 * Sum owned by account
 * @member {Number} haben
 */
Balance.prototype['haben'] = undefined;

/**
 * Sum owned - sum due by account
 * @member {Number} balance
 */
Balance.prototype['balance'] = undefined;

/**
 * @member {Array.<module:model/Transactions>} txs
 */
Balance.prototype['txs'] = undefined;

/**
 * Type of subbalance (sub account)
 * @member {module:model/Balance.VariationEnum} variation
 */
Balance.prototype['variation'] = undefined;





/**
 * Allowed values for the <code>variation</code> property.
 * @enum {String}
 * @readonly
 */
Balance['VariationEnum'] = {

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



export default Balance;

