# \DispatchGreenEnergyDistributionAPIApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GsiDispatch**](DispatchGreenEnergyDistributionAPIApi.md#GsiDispatch) | **Get** /gsi/dispatch | Dispatch (Green Energy Distribution Schedule)



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
    resp, r, err := api_client.DispatchGreenEnergyDistributionAPIApi.GsiDispatch(context.Background()).Zip(zip).Key(key).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DispatchGreenEnergyDistributionAPIApi.GsiDispatch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GsiDispatch`: InlineResponse2002
    fmt.Fprintf(os.Stdout, "Response from `DispatchGreenEnergyDistributionAPIApi.GsiDispatch`: %v\n", resp)
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

