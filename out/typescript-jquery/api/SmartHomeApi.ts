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
 */


import * as $ from 'jquery';
import * as models from '../model/models';
import { COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


export class SmartHomeApi {
    protected basePath = 'https://api.corrently.io/v2.0';
    public defaultHeaders: Array<string> = [];
    public defaultExtraJQueryAjaxSettings?: JQueryAjaxSettings = undefined;
    public configuration: Configuration = new Configuration();

    constructor(basePath?: string, configuration?: Configuration, defaultExtraJQueryAjaxSettings?: JQueryAjaxSettings) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
        if (defaultExtraJQueryAjaxSettings) {
            this.defaultExtraJQueryAjaxSettings = defaultExtraJQueryAjaxSettings;
        }
    }

    private extendObj<T1 extends object, T2 extends T1>(objA: T2, objB: T2): T1|T2 {
        for (let key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    }

    /**
     * Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state). 
     * @summary Get best hour (with most regional green energy) in a given timeframe.
     * @param zip Zipcode (Postleitzahl) of a city in Germany.
     * @param key Any valid Stromkonto account (address).
     * @param timeframe Number of hours to check (default 24 hours from now).
     * @param hours How many hours in row do you need the device turned on?
     */
    public gsiBesthour(zip?: string, key?: string, timeframe?: number, hours?: number, extraJQueryAjaxSettings?: JQueryAjaxSettings): JQuery.Promise<
    { response: JQueryXHR; body: boolean;  },
    { response: JQueryXHR; errorThrown: string }
    > {
        let localVarPath = this.basePath + '/gsi/bestHour';

        let queryParameters: any = {};
        let headerParams: any = {};
        if (zip !== null && zip !== undefined) {
            queryParameters['zip'] = <string><any>zip;
        }
        if (key !== null && key !== undefined) {
            queryParameters['key'] = <string><any>key;
        }
        if (timeframe !== null && timeframe !== undefined) {
            queryParameters['timeframe'] = <string><any>timeframe;
        }
        if (hours !== null && hours !== undefined) {
            queryParameters['hours'] = <string><any>hours;
        }

        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];


        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'GET',
            headers: headerParams,
            processData: false
        };

        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        if (extraJQueryAjaxSettings) {
            requestOptions = (<any>Object).assign(requestOptions, extraJQueryAjaxSettings);
        }

        if (this.defaultExtraJQueryAjaxSettings) {
            requestOptions = (<any>Object).assign(requestOptions, this.defaultExtraJQueryAjaxSettings);
        }

        let dfd = $.Deferred<
            { response: JQueryXHR; body: boolean;  },
            { response: JQueryXHR; errorThrown: string }
        >();
        $.ajax(requestOptions).then(
            (data: boolean, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve({response: jqXHR, body: data}),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) =>
                dfd.reject({response: xhr, errorThrown: errorThrown})
        );
        return dfd.promise();
    }

}
