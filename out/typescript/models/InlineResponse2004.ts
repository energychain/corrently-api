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

import { AnyType } from './AnyType';
import { HttpFile } from '../http/http';

export class InlineResponse2004 {
    /**
    * Stromkonto/Metering address allocated (this is not the MELOID!)
    */
    'account'?: string;
    /**
    * Reading as provided as input in Wh
    */
    '_180'?: number;
    /**
    * Green energy calculated using Green Power Index (GrünstromIndex) in Wh
    */
    '_181'?: number;
    /**
    * Grey energy calculated using Green Power Index (GrünstromIndex) in Wh
    */
    '_182'?: number;
    /**
    * API Consensus time this reading was fully received
    */
    'timeStamp'?: number;
    /**
    * Time this reading got imported into consensus (e.q. signed timestamp).
    */
    'processingTime'?: number;
    /**
    * CO2 Emission of metered energy in a standard mix
    */
    'co2GStandard'?: number;
    /**
    * CO2 Emission of metered energy in a green energy mix (e.q. Ökostromtarif)
    */
    'co2GOekostrom'?: number;
    /**
    * Time to Live for this reader. If no update is provided it gets decommissioned.
    */
    'ttl'?: number;
    /**
    * Update credits this meter has. Gets refilled automtically to prevent too frequent updates
    */
    'credits'?: AnyType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string",
            "format": ""
        },
        {
            "name": "_180",
            "baseName": "1.8.0",
            "type": "number",
            "format": ""
        },
        {
            "name": "_181",
            "baseName": "1.8.1",
            "type": "number",
            "format": ""
        },
        {
            "name": "_182",
            "baseName": "1.8.2",
            "type": "number",
            "format": ""
        },
        {
            "name": "timeStamp",
            "baseName": "timeStamp",
            "type": "number",
            "format": ""
        },
        {
            "name": "processingTime",
            "baseName": "_processingTime",
            "type": "number",
            "format": ""
        },
        {
            "name": "co2GStandard",
            "baseName": "co2_g_standard",
            "type": "number",
            "format": ""
        },
        {
            "name": "co2GOekostrom",
            "baseName": "co2_g_oekostrom",
            "type": "number",
            "format": ""
        },
        {
            "name": "ttl",
            "baseName": "ttl",
            "type": "number",
            "format": ""
        },
        {
            "name": "credits",
            "baseName": "credits",
            "type": "AnyType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2004.attributeTypeMap;
    }
    
    public constructor() {
    }
}
