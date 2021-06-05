// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { Componentsh0 } from '../models/Componentsh0';
import { Tariffh0 } from '../models/Tariffh0';

/**
 * no description
 */
export class TariffPriceAPIApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Provides pricing data for private households with standard load profiles (Standardlastprofil H0). 
     * Energy Tariff information
     * @param zipcode Zipcode (Postzleitzahl) of a city in Germany.
     */
    public async tariffSLPH0(zipcode?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/tariff/slph0';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (zipcode !== undefined) {
            requestContext.setQueryParam("zipcode", ObjectSerializer.serialize(zipcode, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * Provides insides into the different cost components of energy for a private household. Sample Request: https://api.corrently.io/v2.0/tariff/components?email=demo%40corrently.io&zip=69168&kwha=3300 
     * Energy Tariff price components
     * @param zipcode Zipcode (Postzleitzahl) of a city in Germany.
     * @param email Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time
     * @param kwha Total amount of energy in kilo-watt-hours per year. (sample 2100)
     * @param milliseconds If provided all results will be scaled to this timeframe
     * @param wh If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created.
     */
    public async tariffcomponents(zipcode?: string, email?: string, kwha?: number, milliseconds?: number, wh?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/tariff/components';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (zipcode !== undefined) {
            requestContext.setQueryParam("zipcode", ObjectSerializer.serialize(zipcode, "string", ""));
        }
        if (email !== undefined) {
            requestContext.setQueryParam("email", ObjectSerializer.serialize(email, "string", ""));
        }
        if (kwha !== undefined) {
            requestContext.setQueryParam("kwha", ObjectSerializer.serialize(kwha, "number", ""));
        }
        if (milliseconds !== undefined) {
            requestContext.setQueryParam("milliseconds", ObjectSerializer.serialize(milliseconds, "number", ""));
        }
        if (wh !== undefined) {
            requestContext.setQueryParam("wh", ObjectSerializer.serialize(wh, "number", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

}

export class TariffPriceAPIApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to tariffSLPH0
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async tariffSLPH0(response: ResponseContext): Promise<Array<Tariffh0> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Tariffh0> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Tariffh0>", ""
            ) as Array<Tariffh0>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Tariffh0> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Tariffh0>", ""
            ) as Array<Tariffh0>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to tariffcomponents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async tariffcomponents(response: ResponseContext): Promise<Componentsh0 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Componentsh0 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Componentsh0", ""
            ) as Componentsh0;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Componentsh0 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Componentsh0", ""
            ) as Componentsh0;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
