// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';


/**
 * no description
 */
export class SmartHomeApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state). 
     * Get best hour (with most regional green energy) in a given timeframe.
     * @param zip Zipcode (Postleitzahl) of a city in Germany.
     * @param key Any valid Stromkonto account (address).
     * @param timeframe Number of hours to check (default 24 hours from now).
     * @param hours How many hours in row do you need the device turned on?
     */
    public async gsiBesthour(zip?: string, key?: string, timeframe?: number, hours?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/gsi/bestHour';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (zip !== undefined) {
            requestContext.setQueryParam("zip", ObjectSerializer.serialize(zip, "string", ""));
        }
        if (key !== undefined) {
            requestContext.setQueryParam("key", ObjectSerializer.serialize(key, "string", ""));
        }
        if (timeframe !== undefined) {
            requestContext.setQueryParam("timeframe", ObjectSerializer.serialize(timeframe, "number", ""));
        }
        if (hours !== undefined) {
            requestContext.setQueryParam("hours", ObjectSerializer.serialize(hours, "number", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

}

export class SmartHomeApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to gsiBesthour
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async gsiBesthour(response: ResponseContext): Promise<boolean > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: boolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "boolean", ""
            ) as boolean;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: boolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "boolean", ""
            ) as boolean;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
