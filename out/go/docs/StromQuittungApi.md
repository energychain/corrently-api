# \StromQuittungApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**QuittungCreate**](StromQuittungApi.md#QuittungCreate) | **Post** /quittung/create | Create a receipt for an energy delivery (only valid in Germany).



## QuittungCreate

> string QuittungCreate(ctx).InlineObject4(inlineObject4).Execute()

Create a receipt for an energy delivery (only valid in Germany).



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
    inlineObject4 := *openapiclient.NewInlineObject4() // InlineObject4 | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.StromQuittungApi.QuittungCreate(context.Background()).InlineObject4(inlineObject4).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `StromQuittungApi.QuittungCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `QuittungCreate`: string
    fmt.Fprintf(os.Stdout, "Response from `StromQuittungApi.QuittungCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiQuittungCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject4** | [**InlineObject4**](InlineObject4.md) |  | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

