# \GreenPowerIndexGrnstromIndexApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GsiBesthour**](GreenPowerIndexGrnstromIndexApi.md#GsiBesthour) | **Get** /gsi/bestHour | Get best hour (with most regional green energy) in a given timeframe.
[**GsiDispatch**](GreenPowerIndexGrnstromIndexApi.md#GsiDispatch) | **Get** /gsi/dispatch | Dispatch (Green Energy Distribution Schedule)
[**GsiMarketdata**](GreenPowerIndexGrnstromIndexApi.md#GsiMarketdata) | **Get** /gsi/marketdata | Marketdata
[**GsiPrediction**](GreenPowerIndexGrnstromIndexApi.md#GsiPrediction) | **Get** /gsi/prediction | Prediction



## GsiBesthour

> bool GsiBesthour(ctx).Zip(zip).Key(key).Timeframe(timeframe).Hours(hours).Execute()

Get best hour (with most regional green energy) in a given timeframe.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    zip := "zip_example" // string | Zipcode (Postleitzahl) of a city in Germany. (optional)
    key := "key_example" // string | Any valid Stromkonto account (address). (optional)
    timeframe := int32(56) // int32 | Number of hours to check (default 24 hours from now). (optional)
    hours := int32(56) // int32 | How many hours in row do you need the device turned on? (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.GreenPowerIndexGrnstromIndexApi.GsiBesthour(context.Background()).Zip(zip).Key(key).Timeframe(timeframe).Hours(hours).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `GreenPowerIndexGrnstromIndexApi.GsiBesthour``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GsiBesthour`: bool
    fmt.Fprintf(os.Stdout, "Response from `GreenPowerIndexGrnstromIndexApi.GsiBesthour`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGsiBesthourRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zip** | **string** | Zipcode (Postleitzahl) of a city in Germany. | 
 **key** | **string** | Any valid Stromkonto account (address). | 
 **timeframe** | **int32** | Number of hours to check (default 24 hours from now). | 
 **hours** | **int32** | How many hours in row do you need the device turned on? | 

### Return type

**bool**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GsiDispatch

> InlineResponse2002 GsiDispatch(ctx).Zip(zip).Key(key).Execute()

Dispatch (Green Energy Distribution Schedule)



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    zip := "zip_example" // string | Zipcode (Postleitzahl) of a city in Germany. (optional)
    key := "key_example" // string | Any valid Stromkonto account (address). (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.GreenPowerIndexGrnstromIndexApi.GsiDispatch(context.Background()).Zip(zip).Key(key).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `GreenPowerIndexGrnstromIndexApi.GsiDispatch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GsiDispatch`: InlineResponse2002
    fmt.Fprintf(os.Stdout, "Response from `GreenPowerIndexGrnstromIndexApi.GsiDispatch`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGsiDispatchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zip** | **string** | Zipcode (Postleitzahl) of a city in Germany. | 
 **key** | **string** | Any valid Stromkonto account (address). | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GsiMarketdata

> InlineResponse2003 GsiMarketdata(ctx).Zip(zip).Execute()

Marketdata



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    zip := "zip_example" // string | Zipcode (Postleitzahl) of a city in Germany. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.GreenPowerIndexGrnstromIndexApi.GsiMarketdata(context.Background()).Zip(zip).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `GreenPowerIndexGrnstromIndexApi.GsiMarketdata``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GsiMarketdata`: InlineResponse2003
    fmt.Fprintf(os.Stdout, "Response from `GreenPowerIndexGrnstromIndexApi.GsiMarketdata`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGsiMarketdataRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zip** | **string** | Zipcode (Postleitzahl) of a city in Germany. | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GsiPrediction

> InlineResponse2001 GsiPrediction(ctx).Zip(zip).Key(key).Execute()

Prediction



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    zip := "zip_example" // string | Zipcode (Postleitzahl) of a city in Germany. (optional)
    key := "key_example" // string | Any valid Stromkonto account (address). (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.GreenPowerIndexGrnstromIndexApi.GsiPrediction(context.Background()).Zip(zip).Key(key).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `GreenPowerIndexGrnstromIndexApi.GsiPrediction``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GsiPrediction`: InlineResponse2001
    fmt.Fprintf(os.Stdout, "Response from `GreenPowerIndexGrnstromIndexApi.GsiPrediction`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGsiPredictionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zip** | **string** | Zipcode (Postleitzahl) of a city in Germany. | 
 **key** | **string** | Any valid Stromkonto account (address). | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

