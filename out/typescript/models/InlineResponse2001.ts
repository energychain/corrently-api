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

import { ForecastItem } from './ForecastItem';
import { InlineResponse2001Location } from './InlineResponse2001Location';
import { InlineResponse2001Matrix } from './InlineResponse2001Matrix';
import { HttpFile } from '../http/http';

export class InlineResponse2001 {
    /**
    * Prediction for the upcomming hours
    */
    'forecast'?: Array<ForecastItem>;
    'location'?: InlineResponse2001Location;
    'matrix'?: InlineResponse2001Matrix;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "forecast",
            "baseName": "forecast",
            "type": "Array<ForecastItem>",
            "format": ""
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "InlineResponse2001Location",
            "format": ""
        },
        {
            "name": "matrix",
            "baseName": "matrix",
            "type": "InlineResponse2001Matrix",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2001.attributeTypeMap;
    }
    
    public constructor() {
    }
}

