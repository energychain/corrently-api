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

export class Transactions {
    /**
    * Cross signed timestamp of transaction
    */
    'timeStamp'?: number;
    /**
    * Unique hash of this transaction as provided by counter signing party
    */
    'txid'?: string;
    /**
    * Pretty print of counter signing party
    */
    'cashier'?: string;
    /**
    * Type of transaction per cashier implementation and schema
    */
    'txtype'?: string;
    /**
    * Amount covered by transaction
    */
    'value'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "timeStamp",
            "baseName": "timeStamp",
            "type": "number",
            "format": ""
        },
        {
            "name": "txid",
            "baseName": "txid",
            "type": "string",
            "format": ""
        },
        {
            "name": "cashier",
            "baseName": "cashier",
            "type": "string",
            "format": ""
        },
        {
            "name": "txtype",
            "baseName": "txtype",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Transactions.attributeTypeMap;
    }
    
    public constructor() {
    }
}
