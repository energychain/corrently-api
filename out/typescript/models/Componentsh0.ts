/**
 * Corrently.io
 * *Corrently - from italian corrente, which is energy* # Introduction The Corrently ecosystem gets maintained by [STROMDAO GmbH](https://www.stromdao.de/) to support green energy services for prosumers, grid operators, regulators, integrators or any other party with an emerging need of consensus driven management. As the [energy product Corrently](https://www.corrently.de/) got first launched in Germany parts of this documentation provide simple translations for better understanding. 
 *
 * OpenAPI spec version: 2.0.0
 * Contact: dev@stromdao.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class Componentsh0 {
    /**
    * Total sum in Euro for this price component.
    */
    'sum'?: number;
    /**
    * What is this price component about
    */
    'describtion'?: string;
    /**
    * Frequency/dependency of component
    */
    'mutlityplier'?: string;
    /**
    * Single unit price multiyplier is based on
    */
    'per'?: number;
    /**
    * Sub components of this price
    */
    'components'?: Array<Componentsh0>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "sum",
            "baseName": "sum",
            "type": "number",
            "format": ""
        },
        {
            "name": "describtion",
            "baseName": "describtion",
            "type": "string",
            "format": ""
        },
        {
            "name": "mutlityplier",
            "baseName": "mutlityplier",
            "type": "string",
            "format": ""
        },
        {
            "name": "per",
            "baseName": "per",
            "type": "number",
            "format": ""
        },
        {
            "name": "components",
            "baseName": "components",
            "type": "Array<Componentsh0>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Componentsh0.attributeTypeMap;
    }
    
    public constructor() {
    }
}
