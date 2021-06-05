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

export class InlineObject2 {
    /**
    * Stromkonto account address of sender
    */
    'account'?: string;
    /**
    * Stromkonto account address of reciever
    */
    'to'?: string;
    /**
    * Amount to transfer (in Watthours for electricity, or pcs for trees)
    */
    'value'?: number;
    'variation'?: InlineObject2VariationEnum;
    /**
    * Signature per Stromkonto setting (might be simple email confirmation link)
    */
    'signature'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string",
            "format": ""
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": ""
        },
        {
            "name": "variation",
            "baseName": "variation",
            "type": "InlineObject2VariationEnum",
            "format": ""
        },
        {
            "name": "signature",
            "baseName": "signature",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineObject2.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type InlineObject2VariationEnum = "gsb" | "erzeugung" | "eigenstrom" | "co2" | "baeume" ;

