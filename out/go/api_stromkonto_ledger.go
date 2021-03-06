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

// StromkontoLedgerApiService StromkontoLedgerApi service
type StromkontoLedgerApiService service

type ApiPrepareTransactionRequest struct {
	ctx _context.Context
	ApiService *StromkontoLedgerApiService
	inlineObject2 *InlineObject2
}

func (r ApiPrepareTransactionRequest) InlineObject2(inlineObject2 InlineObject2) ApiPrepareTransactionRequest {
	r.inlineObject2 = &inlineObject2
	return r
}

func (r ApiPrepareTransactionRequest) Execute() (*_nethttp.Response, error) {
	return r.ApiService.PrepareTransactionExecute(r)
}

/*
 * PrepareTransaction Prepare Transaction
 * Prepares and inques a transaction (transfer) between two accounts (Stromkonten). This might be used to send any balanced entity. Using this endpoint will only prepare the transaction and enques it for signing and countersigning. This is done from within the user UI using validation process. Note: This API method does not validate any transations. In other words authentication, authorization, validation and actual transfer of value is done using a smart contract during processing in the energy blockchain.

 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @return ApiPrepareTransactionRequest
 */
func (a *StromkontoLedgerApiService) PrepareTransaction(ctx _context.Context) ApiPrepareTransactionRequest {
	return ApiPrepareTransactionRequest{
		ApiService: a,
		ctx: ctx,
	}
}

/*
 * Execute executes the request
 */
func (a *StromkontoLedgerApiService) PrepareTransactionExecute(r ApiPrepareTransactionRequest) (*_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodPost
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "StromkontoLedgerApiService.PrepareTransaction")
	if err != nil {
		return nil, GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/stromkonto/prepareTransaction"

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}
	if r.inlineObject2 == nil {
		return nil, reportError("inlineObject2 is required and must be specified")
	}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{"application/json"}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	// body params
	localVarPostBody = r.inlineObject2
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, localVarFormFileName, localVarFileName, localVarFileBytes)
	if err != nil {
		return nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarHTTPResponse, err
	}

	localVarBody, err := _ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = _ioutil.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		return localVarHTTPResponse, newErr
	}

	return localVarHTTPResponse, nil
}

type ApiStromkontoBalancesRequest struct {
	ctx _context.Context
	ApiService *StromkontoLedgerApiService
	account *string
}

func (r ApiStromkontoBalancesRequest) Account(account string) ApiStromkontoBalancesRequest {
	r.account = &account
	return r
}

func (r ApiStromkontoBalancesRequest) Execute() ([]Balance, *_nethttp.Response, error) {
	return r.ApiService.StromkontoBalancesExecute(r)
}

/*
 * StromkontoBalances Balances
 * Stromkonto represents a core component of the Corrently Ecosystem. It is a ledger for green energy related transactions and gets heavily used by the public Web-UI on www.stromkonto.net . Beside of some decoration and reformating operations all data is backed by the [Energychain blockchain](https://github.com/energychain/) to provide consensus of balances and transactions. Use this API Endppoint if you prefere not to work with low level Distributed Ledger Technology (Blockchain).

 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @return ApiStromkontoBalancesRequest
 */
func (a *StromkontoLedgerApiService) StromkontoBalances(ctx _context.Context) ApiStromkontoBalancesRequest {
	return ApiStromkontoBalancesRequest{
		ApiService: a,
		ctx: ctx,
	}
}

/*
 * Execute executes the request
 * @return []Balance
 */
func (a *StromkontoLedgerApiService) StromkontoBalancesExecute(r ApiStromkontoBalancesRequest) ([]Balance, *_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodGet
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
		localVarReturnValue  []Balance
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "StromkontoLedgerApiService.StromkontoBalances")
	if err != nil {
		return localVarReturnValue, nil, GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/stromkonto/balances"

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}

	if r.account != nil {
		localVarQueryParams.Add("account", parameterToString(*r.account, ""))
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

type ApiStromkontoChoicesRequest struct {
	ctx _context.Context
	ApiService *StromkontoLedgerApiService
	account *string
}

func (r ApiStromkontoChoicesRequest) Account(account string) ApiStromkontoChoicesRequest {
	r.account = &account
	return r
}

func (r ApiStromkontoChoicesRequest) Execute() ([]Balance, *_nethttp.Response, error) {
	return r.ApiService.StromkontoChoicesExecute(r)
}

/*
 * StromkontoChoices Selectable Choices for customer
 * Signable choices (contract changes) for customer.

 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @return ApiStromkontoChoicesRequest
 */
func (a *StromkontoLedgerApiService) StromkontoChoices(ctx _context.Context) ApiStromkontoChoicesRequest {
	return ApiStromkontoChoicesRequest{
		ApiService: a,
		ctx: ctx,
	}
}

/*
 * Execute executes the request
 * @return []Balance
 */
func (a *StromkontoLedgerApiService) StromkontoChoicesExecute(r ApiStromkontoChoicesRequest) ([]Balance, *_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodGet
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
		localVarReturnValue  []Balance
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "StromkontoLedgerApiService.StromkontoChoices")
	if err != nil {
		return localVarReturnValue, nil, GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/stromkonto/choices"

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}

	if r.account != nil {
		localVarQueryParams.Add("account", parameterToString(*r.account, ""))
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

type ApiStromkontoLoginRequest struct {
	ctx _context.Context
	ApiService *StromkontoLedgerApiService
	inlineObject1 *InlineObject1
}

func (r ApiStromkontoLoginRequest) InlineObject1(inlineObject1 InlineObject1) ApiStromkontoLoginRequest {
	r.inlineObject1 = &inlineObject1
	return r
}

func (r ApiStromkontoLoginRequest) Execute() (InlineResponse200, *_nethttp.Response, error) {
	return r.ApiService.StromkontoLoginExecute(r)
}

/*
 * StromkontoLogin Login (via Mail)
 * Sends a mail to a given email address to login this user. This function makes life a bit easier in order to not having to deal with private key protection on the user side as a shared key is used to sign transactions onbehalf of a particular account.  However viewing consensus information (balances) are public and *might move* from account to account without prior notification. Best practice for third party uses is to always start a session with the login RESP call and only create a user in case the response indicates an `unregistered` status.

 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @return ApiStromkontoLoginRequest
 */
func (a *StromkontoLedgerApiService) StromkontoLogin(ctx _context.Context) ApiStromkontoLoginRequest {
	return ApiStromkontoLoginRequest{
		ApiService: a,
		ctx: ctx,
	}
}

/*
 * Execute executes the request
 * @return InlineResponse200
 */
func (a *StromkontoLedgerApiService) StromkontoLoginExecute(r ApiStromkontoLoginRequest) (InlineResponse200, *_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodPost
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
		localVarReturnValue  InlineResponse200
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "StromkontoLedgerApiService.StromkontoLogin")
	if err != nil {
		return localVarReturnValue, nil, GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/stromkonto/login"

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}
	if r.inlineObject1 == nil {
		return localVarReturnValue, nil, reportError("inlineObject1 is required and must be specified")
	}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{"application/json"}

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
	// body params
	localVarPostBody = r.inlineObject1
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

type ApiStromkontoRegisterRequest struct {
	ctx _context.Context
	ApiService *StromkontoLedgerApiService
	inlineObject *InlineObject
}

func (r ApiStromkontoRegisterRequest) InlineObject(inlineObject InlineObject) ApiStromkontoRegisterRequest {
	r.inlineObject = &inlineObject
	return r
}

func (r ApiStromkontoRegisterRequest) Execute() (*_nethttp.Response, error) {
	return r.ApiService.StromkontoRegisterExecute(r)
}

/*
 * StromkontoRegister Register (new Stromkonto)
 * Calling this method with an unregistered (new) email will create a new account (Stromkonto) with all balances having a value of `0` and no transaction history. In addition some basic properties like region and zipcode are set to allow further operation of account.

 * @param ctx _context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 * @return ApiStromkontoRegisterRequest
 */
func (a *StromkontoLedgerApiService) StromkontoRegister(ctx _context.Context) ApiStromkontoRegisterRequest {
	return ApiStromkontoRegisterRequest{
		ApiService: a,
		ctx: ctx,
	}
}

/*
 * Execute executes the request
 */
func (a *StromkontoLedgerApiService) StromkontoRegisterExecute(r ApiStromkontoRegisterRequest) (*_nethttp.Response, error) {
	var (
		localVarHTTPMethod   = _nethttp.MethodPost
		localVarPostBody     interface{}
		localVarFormFileName string
		localVarFileName     string
		localVarFileBytes    []byte
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "StromkontoLedgerApiService.StromkontoRegister")
	if err != nil {
		return nil, GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/stromkonto/register"

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := _neturl.Values{}
	localVarFormParams := _neturl.Values{}
	if r.inlineObject == nil {
		return nil, reportError("inlineObject is required and must be specified")
	}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{"application/json"}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	// body params
	localVarPostBody = r.inlineObject
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, localVarFormFileName, localVarFileName, localVarFileBytes)
	if err != nil {
		return nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarHTTPResponse, err
	}

	localVarBody, err := _ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = _ioutil.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		return localVarHTTPResponse, newErr
	}

	return localVarHTTPResponse, nil
}
