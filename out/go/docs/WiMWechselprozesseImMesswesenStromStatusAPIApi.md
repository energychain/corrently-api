# \WiMWechselprozesseImMesswesenStromStatusAPIApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Wimstatus**](WiMWechselprozesseImMesswesenStromStatusAPIApi.md#Wimstatus) | **Get** /wim/status | WiM Proess Informtion



## Wimstatus

> InlineResponse2006 Wimstatus(ctx).Vid(vid).Execute()

WiM Proess Informtion



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
    vid := "vid_example" // string | VID key of the process. (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.WiMWechselprozesseImMesswesenStromStatusAPIApi.Wimstatus(context.Background()).Vid(vid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `WiMWechselprozesseImMesswesenStromStatusAPIApi.Wimstatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `Wimstatus`: InlineResponse2006
    fmt.Fprintf(os.Stdout, "Response from `WiMWechselprozesseImMesswesenStromStatusAPIApi.Wimstatus`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiWimstatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vid** | **string** | VID key of the process. | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

