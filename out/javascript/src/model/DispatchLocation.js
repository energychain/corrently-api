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
 * The DispatchLocation model module.
 * @module model/DispatchLocation
 * @version 2.0.0
 */
class DispatchLocation {
    /**
     * Constructs a new <code>DispatchLocation</code>.
     * @alias module:model/DispatchLocation
     */
    constructor() { 
        
        DispatchLocation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DispatchLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DispatchLocation} obj Optional instance to populate.
     * @return {module:model/DispatchLocation} The populated <code>DispatchLocation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DispatchLocation();

            if (data.hasOwnProperty('energy')) {
                obj['energy'] = ApiClient.convertToType(data['energy'], 'Number');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], Object);
            }
        }
        return obj;
    }


}

/**
 * Percentage of energy
 * @member {Number} energy
 */
DispatchLocation.prototype['energy'] = undefined;

/**
 * GeoJSON encoded location of target or source of green energy.
 * @member {Object} location
 */
DispatchLocation.prototype['location'] = undefined;






export default DispatchLocation;

