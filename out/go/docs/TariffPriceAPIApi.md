# \TariffPriceAPIApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TariffSLPH0**](TariffPriceAPIApi.md#TariffSLPH0) | **Get** /tariff/slph0 | Energy Tariff information
[**Tariffcomponents**](TariffPriceAPIApi.md#Tariffcomponents) | **Get** /tariff/components | Energy Tariff price components



## TariffSLPH0

> []Tariffh0 TariffSLPH0(ctx).Zipcode(zipcode).Execute()

Energy Tariff information



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
    zipcode := "zipcode_example" // string | Zipcode (Postzleitzahl) of a city in Germany. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.TariffPriceAPIApi.TariffSLPH0(context.Background()).Zipcode(zipcode).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TariffPriceAPIApi.TariffSLPH0``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TariffSLPH0`: []Tariffh0
    fmt.Fprintf(os.Stdout, "Response from `TariffPriceAPIApi.TariffSLPH0`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTariffSLPH0Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zipcode** | **string** | Zipcode (Postzleitzahl) of a city in Germany. | 

### Return type

[**[]Tariffh0**](Tariffh0.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Tariffcomponents

> Componentsh0 Tariffcomponents(ctx).Zipcode(zipcode).Email(email).Kwha(kwha).Milliseconds(milliseconds).Wh(wh).Execute()

Energy Tariff price components



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
    zipcode := "zipcode_example" // string | Zipcode (Postzleitzahl) of a city in Germany. (optional)
    email := "email_example" // string | Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time (optional)
    kwha := int32(56) // int32 | Total amount of energy in kilo-watt-hours per year. (sample 2100) (optional)
    milliseconds := int32(56) // int32 | If provided all results will be scaled to this timeframe (optional)
    wh := int32(56) // int32 | If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.TariffPriceAPIApi.Tariffcomponents(context.Background()).Zipcode(zipcode).Email(email).Kwha(kwha).Milliseconds(milliseconds).Wh(wh).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `TariffPriceAPIApi.Tariffcomponents``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `Tariffcomponents`: Componentsh0
    fmt.Fprintf(os.Stdout, "Response from `TariffPriceAPIApi.Tariffcomponents`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTariffcomponentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zipcode** | **string** | Zipcode (Postzleitzahl) of a city in Germany. | 
 **email** | **string** | Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time | 
 **kwha** | **int32** | Total amount of energy in kilo-watt-hours per year. (sample 2100) | 
 **milliseconds** | **int32** | If provided all results will be scaled to this timeframe | 
 **wh** | **int32** | If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created. | 

### Return type

[**Componentsh0**](Componentsh0.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

