/*
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


package org.openapitools.client.api;

import org.openapitools.client.ApiCallback;
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.ApiResponse;
import org.openapitools.client.Configuration;
import org.openapitools.client.Pair;
import org.openapitools.client.ProgressRequestBody;
import org.openapitools.client.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import org.openapitools.client.model.InlineResponse2001;
import org.openapitools.client.model.InlineResponse2002;
import org.openapitools.client.model.InlineResponse2003;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class GreenPowerIndexGrnstromIndexApi {
    private ApiClient localVarApiClient;

    public GreenPowerIndexGrnstromIndexApi() {
        this(Configuration.getDefaultApiClient());
    }

    public GreenPowerIndexGrnstromIndexApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    /**
     * Build call for gsiBesthour
     * @param zip Zipcode (Postleitzahl) of a city in Germany. (optional)
     * @param key Any valid Stromkonto account (address). (optional)
     * @param timeframe Number of hours to check (default 24 hours from now). (optional)
     * @param hours How many hours in row do you need the device turned on? (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Success </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call gsiBesthourCall(String zip, String key, Integer timeframe, Integer hours, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/gsi/bestHour";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        if (zip != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("zip", zip));
        }

        if (key != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("key", key));
        }

        if (timeframe != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("timeframe", timeframe));
        }

        if (hours != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("hours", hours));
        }

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call gsiBesthourValidateBeforeCall(String zip, String key, Integer timeframe, Integer hours, final ApiCallback _callback) throws ApiException {
        

        okhttp3.Call localVarCall = gsiBesthourCall(zip, key, timeframe, hours, _callback);
        return localVarCall;

    }

    /**
     * Get best hour (with most regional green energy) in a given timeframe.
     * Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state). 
     * @param zip Zipcode (Postleitzahl) of a city in Germany. (optional)
     * @param key Any valid Stromkonto account (address). (optional)
     * @param timeframe Number of hours to check (default 24 hours from now). (optional)
     * @param hours How many hours in row do you need the device turned on? (optional)
     * @return Boolean
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Success </td><td>  -  </td></tr>
     </table>
     */
    public Boolean gsiBesthour(String zip, String key, Integer timeframe, Integer hours) throws ApiException {
        ApiResponse<Boolean> localVarResp = gsiBesthourWithHttpInfo(zip, key, timeframe, hours);
        return localVarResp.getData();
    }

    /**
     * Get best hour (with most regional green energy) in a given timeframe.
     * Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state). 
     * @param zip Zipcode (Postleitzahl) of a city in Germany. (optional)
     * @param key Any valid Stromkonto account (address). (optional)
     * @param timeframe Number of hours to check (default 24 hours from now). (optional)
     * @param hours How many hours in row do you need the device turned on? (optional)
     * @return ApiResponse&lt;Boolean&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Success </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<Boolean> gsiBesthourWithHttpInfo(String zip, String key, Integer timeframe, Integer hours) throws ApiException {
        okhttp3.Call localVarCall = gsiBesthourValidateBeforeCall(zip, key, timeframe, hours, null);
        Type localVarReturnType = new TypeToken<Boolean>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Get best hour (with most regional green energy) in a given timeframe. (asynchronously)
     * Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state). 
     * @param zip Zipcode (Postleitzahl) of a city in Germany. (optional)
     * @param key Any valid Stromkonto account (address). (optional)
     * @param timeframe Number of hours to check (default 24 hours from now). (optional)
     * @param hours How many hours in row do you need the device turned on? (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Success </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call gsiBesthourAsync(String zip, String key, Integer timeframe, Integer hours, final ApiCallback<Boolean> _callback) throws ApiException {

        okhttp3.Call localVarCall = gsiBesthourValidateBeforeCall(zip, key, timeframe, hours, _callback);
        Type localVarReturnType = new TypeToken<Boolean>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for gsiDispatch
     * @param zip Zipcode (Postleitzahl) of a city in Germany. (optional)
     * @param key Any valid Stromkonto account (address). (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Success </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call gsiDispatchCall(String zip, String key, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/gsi/dispatch";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        if (zip != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("zip", zip));
        }

        if (key != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("key", key));
        }

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call gsiDispatchValidateBeforeCall(String zip, String key, final ApiCallback _callback) throws ApiException {
        

        okhttp3.Call localVarCall = gsiDispatchCall(zip, key, _callback);
        return localVarCall;

    }

    /**
     * Dispatch (Green Energy Distribution Schedule)
     * Dispatch of green energy has two aspects to consider:   - Availability of gerneration facility (depends on weather and installed capacity)   - Demand of energy Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic). 
     * @param zip Zipcode (Postleitzahl) of a city in Germany. (optional)
     * @param key Any valid Stromkonto account (address). (optional)
     * @return InlineResponse2002
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Success </td><td>  -  </td></tr>
     </table>
     */
    public InlineResponse2002 gsiDispatch(String zip, String key) throws ApiException {
        ApiResponse<InlineResponse2002> localVarResp = gsiDispatchWithHttpInfo(zip, key);
        return localVarResp.getData();
    }

    /**
     * Dispatch (Green Energy Distribution Schedule)
     * Dispatch of green energy has two aspects to consider:   - Availability of gerneration facility (depends on weather and installed capacity)   - Demand of energy Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic). 
     * @param zip Zipcode (Postleitzahl) of a city in Germany. (optional)
     * @param key Any valid Stromkonto account (address). (optional)
     * @return ApiResponse&lt;InlineResponse2002&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Success </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<InlineResponse2002> gsiDispatchWithHttpInfo(String zip, String key) throws ApiException {
        okhttp3.Call localVarCall = gsiDispatchValidateBeforeCall(zip, key, null);
        Type localVarReturnType = new TypeToken<InlineResponse2002>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Dispatch (Green Energy Distribution Schedule) (asynchronously)
     * Dispatch of green energy has two aspects to consider:   - Availability of gerneration facility (depends on weather and installed capacity)   - Demand of energy Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic). 
     * @param zip Zipcode (Postleitzahl) of a city in Germany. (optional)
     * @param key Any valid Stromkonto account (address). (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Success </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call gsiDispatchAsync(String zip, String key, final ApiCallback<InlineResponse2002> _callback) throws ApiException {

        okhttp3.Call localVarCall = gsiDispatchValidateBeforeCall(zip, key, _callback);
        Type localVarReturnType = new TypeToken<InlineResponse2002>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for gsiMarketdata
     * @param zip Zipcode (Postleitzahl) of a city in Germany. (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Success </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call gsiMarketdataCall(String zip, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/gsi/marketdata";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        if (zip != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("zip", zip));
        }

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call gsiMarketdataValidateBeforeCall(String zip, final ApiCallback _callback) throws ApiException {
        

        okhttp3.Call localVarCall = gsiMarketdataCall(zip, _callback);
        return localVarCall;

    }

    /**
     * Marketdata
     * Compatible to awattar (https://api.awattar.de/v1/marketdata) API interface but data comes from GreenPowerIndex instead of EPEXSpot. 
     * @param zip Zipcode (Postleitzahl) of a city in Germany. (optional)
     * @return InlineResponse2003
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Success </td><td>  -  </td></tr>
     </table>
     */
    public InlineResponse2003 gsiMarketdata(String zip) throws ApiException {
        ApiResponse<InlineResponse2003> localVarResp = gsiMarketdataWithHttpInfo(zip);
        return localVarResp.getData();
    }

    /**
     * Marketdata
     * Compatible to awattar (https://api.awattar.de/v1/marketdata) API interface but data comes from GreenPowerIndex instead of EPEXSpot. 
     * @param zip Zipcode (Postleitzahl) of a city in Germany. (optional)
     * @return ApiResponse&lt;InlineResponse2003&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Success </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<InlineResponse2003> gsiMarketdataWithHttpInfo(String zip) throws ApiException {
        okhttp3.Call localVarCall = gsiMarketdataValidateBeforeCall(zip, null);
        Type localVarReturnType = new TypeToken<InlineResponse2003>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Marketdata (asynchronously)
     * Compatible to awattar (https://api.awattar.de/v1/marketdata) API interface but data comes from GreenPowerIndex instead of EPEXSpot. 
     * @param zip Zipcode (Postleitzahl) of a city in Germany. (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Success </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call gsiMarketdataAsync(String zip, final ApiCallback<InlineResponse2003> _callback) throws ApiException {

        okhttp3.Call localVarCall = gsiMarketdataValidateBeforeCall(zip, _callback);
        Type localVarReturnType = new TypeToken<InlineResponse2003>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for gsiPrediction
     * @param zip Zipcode (Postleitzahl) of a city in Germany. (optional)
     * @param key Any valid Stromkonto account (address). (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Success </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call gsiPredictionCall(String zip, String key, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/gsi/prediction";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        if (zip != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("zip", zip));
        }

        if (key != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("key", key));
        }

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call gsiPredictionValidateBeforeCall(String zip, String key, final ApiCallback _callback) throws ApiException {
        

        okhttp3.Call localVarCall = gsiPredictionCall(zip, key, _callback);
        return localVarCall;

    }

    /**
     * Prediction
     * Retrieval the GreenPowerIndex (GrünstromIndex) for a given city (by zipcode) in Germany. 
     * @param zip Zipcode (Postleitzahl) of a city in Germany. (optional)
     * @param key Any valid Stromkonto account (address). (optional)
     * @return InlineResponse2001
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Success </td><td>  -  </td></tr>
     </table>
     */
    public InlineResponse2001 gsiPrediction(String zip, String key) throws ApiException {
        ApiResponse<InlineResponse2001> localVarResp = gsiPredictionWithHttpInfo(zip, key);
        return localVarResp.getData();
    }

    /**
     * Prediction
     * Retrieval the GreenPowerIndex (GrünstromIndex) for a given city (by zipcode) in Germany. 
     * @param zip Zipcode (Postleitzahl) of a city in Germany. (optional)
     * @param key Any valid Stromkonto account (address). (optional)
     * @return ApiResponse&lt;InlineResponse2001&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Success </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<InlineResponse2001> gsiPredictionWithHttpInfo(String zip, String key) throws ApiException {
        okhttp3.Call localVarCall = gsiPredictionValidateBeforeCall(zip, key, null);
        Type localVarReturnType = new TypeToken<InlineResponse2001>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Prediction (asynchronously)
     * Retrieval the GreenPowerIndex (GrünstromIndex) for a given city (by zipcode) in Germany. 
     * @param zip Zipcode (Postleitzahl) of a city in Germany. (optional)
     * @param key Any valid Stromkonto account (address). (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Success </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call gsiPredictionAsync(String zip, String key, final ApiCallback<InlineResponse2001> _callback) throws ApiException {

        okhttp3.Call localVarCall = gsiPredictionValidateBeforeCall(zip, key, _callback);
        Type localVarReturnType = new TypeToken<InlineResponse2001>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
