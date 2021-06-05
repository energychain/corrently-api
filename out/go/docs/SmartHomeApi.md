# \SmartHomeApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GsiBesthour**](SmartHomeApi.md#GsiBesthour) | **Get** /gsi/bestHour | Get best hour (with most regional green energy) in a given timeframe.



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
    resp, r, err := api_client.SmartHomeApi.GsiBesthour(context.Background()).Zip(zip).Key(key).Timeframe(timeframe).Hours(hours).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SmartHomeApi.GsiBesthour``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GsiBesthour`: bool
    fmt.Fprintf(os.Stdout, "Response from `SmartHomeApi.GsiBesthour`: %v\n", resp)
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

