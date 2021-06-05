/*
 * Corrently.io
 *
 * *Corrently - from italian corrente, which is energy* # Introduction The Corrently ecosystem gets maintained by [STROMDAO GmbH](https://www.stromdao.de/) to support green energy services for prosumers, grid operators, regulators, integrators or any other party with an emerging need of consensus driven management. As the [energy product Corrently](https://www.corrently.de/) got first launched in Germany parts of this documentation provide simple translations for better understanding. 
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

// TariffPriceAPIApiService TariffPriceAPIApi service
type TariffPriceAPIApiService service

type ApiTariffSLPH0Request struct {
	ctx _context.Context
	ApiService *TariffPriceAPIApiService
	zipcode *string
}

func (r ApiTariffSLPH0Request) Zipcode(zipcode string) ApiTariffSLPH0Request {
	r.zipcode = &zipcode
	return r
}

func (r ApiTariffSLPH0Request) Execute() ([]Tariffh0, *_nethttp.Response, error) {
	return r.ApiService.TariffSLPH0Execute(r)
}

/*
 * TariffSLPH0 Energy Tariff information
 * Provides pricing data for private households with standard load profiles (Standardlastprofil H0).

 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @return ApiTariffSLPH0Request
 */
func (a *TariffPriceAPIApiService) TariffSLPH0(ctx _context.Context) ApiTariffSLPH0Request {
	return ApiTariffSLPH0Request{
		ApiService: a,
		ctx: ctx,
	}
}

/*
 * Execute executes the request
 * @return []Tariffh0
 */
func (a *TariffPriceAPIApiService) TariffSLPH0Execute(r ApiTariffSLPH0Request) ([]Tariffh0, *_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodGet
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
		localVarReturnValue  []Tariffh0
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "TariffPriceAPIApiService.TariffSLPH0")
	if err != nil {
		return localVarReturnValue, nil, GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/tariff/slph0"

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}

	if r.zipcode != nil {
		localVarQueryParams.Add("zipcode", parameterToString(*r.zipcode, ""))
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

type ApiTariffcomponentsRequest struct {
	ctx _context.Context
	ApiService *TariffPriceAPIApiService
	zipcode *string
	email *string
	kwha *int32
	milliseconds *int32
	wh *int32
}

func (r ApiTariffcomponentsRequest) Zipcode(zipcode string) ApiTariffcomponentsRequest {
	r.zipcode = &zipcode
	return r
}
func (r ApiTariffcomponentsRequest) Email(email string) ApiTariffcomponentsRequest {
	r.email = &email
	return r
}
func (r ApiTariffcomponentsRequest) Kwha(kwha int32) ApiTariffcomponentsRequest {
	r.kwha = &kwha
	return r
}
func (r ApiTariffcomponentsRequest) Milliseconds(milliseconds int32) ApiTariffcomponentsRequest {
	r.milliseconds = &milliseconds
	return r
}
func (r ApiTariffcomponentsRequest) Wh(wh int32) ApiTariffcomponentsRequest {
	r.wh = &wh
	return r
}

func (r ApiTariffcomponentsRequest) Execute() (Componentsh0, *_nethttp.Response, error) {
	return r.ApiService.TariffcomponentsExecute(r)
}

/*
 * Tariffcomponents Energy Tariff price components
 * Provides insides into the different cost components of energy for a private household.
Sample Request: https://api.corrently.io/v2.0/tariff/components?email=demo%40corrently.io&zip=69168&kwha=3300

 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @return ApiTariffcomponentsRequest
 */
func (a *TariffPriceAPIApiService) Tariffcomponents(ctx _context.Context) ApiTariffcomponentsRequest {
	return ApiTariffcomponentsRequest{
		ApiService: a,
		ctx: ctx,
	}
}

/*
 * Execute executes the request
 * @return Componentsh0
 */
func (a *TariffPriceAPIApiService) TariffcomponentsExecute(r ApiTariffcomponentsRequest) (Componentsh0, *_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodGet
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
		localVarReturnValue  Componentsh0
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "TariffPriceAPIApiService.Tariffcomponents")
	if err != nil {
		return localVarReturnValue, nil, GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/tariff/components"

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}

	if r.zipcode != nil {
		localVarQueryParams.Add("zipcode", parameterToString(*r.zipcode, ""))
	}
	if r.email != nil {
		localVarQueryParams.Add("email", parameterToString(*r.email, ""))
	}
	if r.kwha != nil {
		localVarQueryParams.Add("kwha", parameterToString(*r.kwha, ""))
	}
	if r.milliseconds != nil {
		localVarQueryParams.Add("milliseconds", parameterToString(*r.milliseconds, ""))
	}
	if r.wh != nil {
		localVarQueryParams.Add("wh", parameterToString(*r.wh, ""))
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
