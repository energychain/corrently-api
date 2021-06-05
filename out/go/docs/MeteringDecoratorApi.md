# \MeteringDecoratorApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**MeteringGet**](MeteringDecoratorApi.md#MeteringGet) | **Get** /metering/reading | Meter Reading
[**MeteringPost**](MeteringDecoratorApi.md#MeteringPost) | **Post** /metering/reading | Meter Reading



## MeteringGet

> InlineResponse2004 MeteringGet(ctx).Account(account).Execute()

Meter Reading



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
    account := "account_example" // string | Account/Address (Stromkonto) to retrieve reading for. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.MeteringDecoratorApi.MeteringGet(context.Background()).Account(account).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `MeteringDecoratorApi.MeteringGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `MeteringGet`: InlineResponse2004
    fmt.Fprintf(os.Stdout, "Response from `MeteringDecoratorApi.MeteringGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiMeteringGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **string** | Account/Address (Stromkonto) to retrieve reading for. | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## MeteringPost

> InlineResponse2005 MeteringPost(ctx).InlineObject3(inlineObject3).Execute()

Meter Reading



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
    inlineObject3 := *openapiclient.NewInlineObject3() // InlineObject3 | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.MeteringDecoratorApi.MeteringPost(context.Background()).InlineObject3(inlineObject3).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `MeteringDecoratorApi.MeteringPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `MeteringPost`: InlineResponse2005
    fmt.Fprintf(os.Stdout, "Response from `MeteringDecoratorApi.MeteringPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiMeteringPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject3** | [**InlineObject3**](InlineObject3.md) |  | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

