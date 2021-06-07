/*
 * Corrently.io
 *
 * *Corrently - from italian corrente, which is energy* # Introduction The Corrently ecosystem gets maintained by [STROMDAO GmbH](https://www.stromdao.de/) to support green energy services for prosumers, grid operators, regulators, integrators or any other party with an emerging need of consensus driven management. As the [energy product Corrently](https://www.corrently.de/) got first launched in Germany parts of this documentation provide simple translations for better understanding. [Released SKDs for Download](https://github.com/energychain/corrently-api/releases) 
 *
 * API version: 2.0.0
 * Contact: dev@stromdao.com
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"bytes"
	_context "context"
	_ioutil "io/ioutil"
	_nethttp "net/http"
	_neturl "net/url"
)

// Linger please
var (
	_ _context.Context
)

// GreenPowerIndexGrnstromIndexApiService GreenPowerIndexGrnstromIndexApi service
type GreenPowerIndexGrnstromIndexApiService service

type ApiGsiBesthourRequest struct {
	ctx _context.Context
	ApiService *GreenPowerIndexGrnstromIndexApiService
	zip *string
	key *string
	timeframe *int32
	hours *int32
}

func (r ApiGsiBesthourRequest) Zip(zip string) ApiGsiBesthourRequest {
	r.zip = &zip
	return r
}
func (r ApiGsiBesthourRequest) Key(key string) ApiGsiBesthourRequest {
	r.key = &key
	return r
}
func (r ApiGsiBesthourRequest) Timeframe(timeframe int32) ApiGsiBesthourRequest {
	r.timeframe = &timeframe
	return r
}
func (r ApiGsiBesthourRequest) Hours(hours int32) ApiGsiBesthourRequest {
	r.hours = &hours
	return r
}

func (r ApiGsiBesthourRequest) Execute() (bool, *_nethttp.Response, error) {
	return r.ApiService.GsiBesthourExecute(r)
}

/*
 * GsiBesthour Get best hour (with most regional green energy) in a given timeframe.
 * Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state).

 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @return ApiGsiBesthourRequest
 */
func (a *GreenPowerIndexGrnstromIndexApiService) GsiBesthour(ctx _context.Context) ApiGsiBesthourRequest {
	return ApiGsiBesthourRequest{
		ApiService: a,
		ctx: ctx,
	}
}

/*
 * Execute executes the request
 * @return bool
 */
func (a *GreenPowerIndexGrnstromIndexApiService) GsiBesthourExecute(r ApiGsiBesthourRequest) (bool, *_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodGet
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
		localVarReturnValue  bool
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "GreenPowerIndexGrnstromIndexApiService.GsiBesthour")
	if err != nil {
		return localVarReturnValue, nil, GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/gsi/bestHour"

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}

	if r.zip != nil {
		localVarQueryParams.Add("zip", parameterToString(*r.zip, ""))
	}
	if r.key != nil {
		localVarQueryParams.Add("key", parameterToString(*r.key, ""))
	}
	if r.timeframe != nil {
		localVarQueryParams.Add("timeframe", parameterToString(*r.timeframe, ""))
	}
	if r.hours != nil {
		localVarQueryParams.Add("hours", parameterToString(*r.hours, ""))
	}
	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, localVarFormFileName, localVarFileName, localVarFileBytes)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := _ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = _ioutil.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}

type ApiGsiDispatchRequest struct {
	ctx _context.Context
	ApiService *GreenPowerIndexGrnstromIndexApiService
	zip *string
	key *string
}

func (r ApiGsiDispatchRequest) Zip(zip string) ApiGsiDispatchRequest {
	r.zip = &zip
	return r
}
func (r ApiGsiDispatchRequest) Key(key string) ApiGsiDispatchRequest {
	r.key = &key
	return r
}

func (r ApiGsiDispatchRequest) Execute() (InlineResponse2002, *_nethttp.Response, error) {
	return r.ApiService.GsiDispatchExecute(r)
}

/*
 * GsiDispatch Dispatch (Green Energy Distribution Schedule)
 * Dispatch of green energy has two aspects to consider:
  - Availability of gerneration facility (depends on weather and installed capacity)
  - Demand of energy
Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic).

 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @return ApiGsiDispatchRequest
 */
func (a *GreenPowerIndexGrnstromIndexApiService) GsiDispatch(ctx _context.Context) ApiGsiDispatchRequest {
	return ApiGsiDispatchRequest{
		ApiService: a,
		ctx: ctx,
	}
}

/*
 * Execute executes the request
 * @return InlineResponse2002
 */
func (a *GreenPowerIndexGrnstromIndexApiService) GsiDispatchExecute(r ApiGsiDispatchRequest) (InlineResponse2002, *_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodGet
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
		localVarReturnValue  InlineResponse2002
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "GreenPowerIndexGrnstromIndexApiService.GsiDispatch")
	if err != nil {
		return localVarReturnValue, nil, GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/gsi/dispatch"

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}

	if r.zip != nil {
		localVarQueryParams.Add("zip", parameterToString(*r.zip, ""))
	}
	if r.key != nil {
		localVarQueryParams.Add("key", parameterToString(*r.key, ""))
	}
	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, localVarFormFileName, localVarFileName, localVarFileBytes)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := _ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = _ioutil.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}

type ApiGsiMarketdataRequest struct {
	ctx _context.Context
	ApiService *GreenPowerIndexGrnstromIndexApiService
	zip *string
}

func (r ApiGsiMarketdataRequest) Zip(zip string) ApiGsiMarketdataRequest {
	r.zip = &zip
	return r
}

func (r ApiGsiMarketdataRequest) Execute() (InlineResponse2003, *_nethttp.Response, error) {
	return r.ApiService.GsiMarketdataExecute(r)
}

/*
 * GsiMarketdata Marketdata
 * Compatible to awattar (https://api.awattar.de/v1/marketdata) API interface but data comes from GreenPowerIndex instead of EPEXSpot.

 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @return ApiGsiMarketdataRequest
 */
func (a *GreenPowerIndexGrnstromIndexApiService) GsiMarketdata(ctx _context.Context) ApiGsiMarketdataRequest {
	return ApiGsiMarketdataRequest{
		ApiService: a,
		ctx: ctx,
	}
}

/*
 * Execute executes the request
 * @return InlineResponse2003
 */
func (a *GreenPowerIndexGrnstromIndexApiService) GsiMarketdataExecute(r ApiGsiMarketdataRequest) (InlineResponse2003, *_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodGet
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
		localVarReturnValue  InlineResponse2003
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "GreenPowerIndexGrnstromIndexApiService.GsiMarketdata")
	if err != nil {
		return localVarReturnValue, nil, GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/gsi/marketdata"

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}

	if r.zip != nil {
		localVarQueryParams.Add("zip", parameterToString(*r.zip, ""))
	}
	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, localVarFormFileName, localVarFileName, localVarFileBytes)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := _ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = _ioutil.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}

type ApiGsiPredictionRequest struct {
	ctx _context.Context
	ApiService *GreenPowerIndexGrnstromIndexApiService
	zip *string
	key *string
}

func (r ApiGsiPredictionRequest) Zip(zip string) ApiGsiPredictionRequest {
	r.zip = &zip
	return r
}
func (r ApiGsiPredictionRequest) Key(key string) ApiGsiPredictionRequest {
	r.key = &key
	return r
}

func (r ApiGsiPredictionRequest) Execute() (InlineResponse2001, *_nethttp.Response, error) {
	return r.ApiService.GsiPredictionExecute(r)
}

/*
 * GsiPrediction Prediction
 * Retrieval the GreenPowerIndex (GrünstromIndex) for a given city (by zipcode) in Germany.

 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @return ApiGsiPredictionRequest
 */
func (a *GreenPowerIndexGrnstromIndexApiService) GsiPrediction(ctx _context.Context) ApiGsiPredictionRequest {
	return ApiGsiPredictionRequest{
		ApiService: a,
		ctx: ctx,
	}
}

/*
 * Execute executes the request
 * @return InlineResponse2001
 */
func (a *GreenPowerIndexGrnstromIndexApiService) GsiPredictionExecute(r ApiGsiPredictionRequest) (InlineResponse2001, *_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodGet
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
		localVarReturnValue  InlineResponse2001
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "GreenPowerIndexGrnstromIndexApiService.GsiPrediction")
	if err != nil {
		return localVarReturnValue, nil, GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/gsi/prediction"

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}

	if r.zip != nil {
		localVarQueryParams.Add("zip", parameterToString(*r.zip, ""))
	}
	if r.key != nil {
		localVarQueryParams.Add("key", parameterToString(*r.key, ""))
	}
	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, localVarFormFileName, localVarFileName, localVarFileBytes)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := _ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = _ioutil.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}
