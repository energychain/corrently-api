# \EaseeApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**EaseeSessions**](EaseeApi.md#EaseeSessions) | **Get** /alternative/easee/lastSessions | Returns lastSession info for all easee wallboxes (chargers) given user has access to.



## EaseeSessions

> []EaseeCharger EaseeSessions(ctx).Username(username).Password(password).Execute()

Returns lastSession info for all easee wallboxes (chargers) given user has access to.



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
    username := "username_example" // string | Username as used on easy.cloud (optional)
    password := "password_example" // string | Password as used on easy.cloud (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.EaseeApi.EaseeSessions(context.Background()).Username(username).Password(password).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EaseeApi.EaseeSessions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `EaseeSessions`: []EaseeCharger
    fmt.Fprintf(os.Stdout, "Response from `EaseeApi.EaseeSessions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiEaseeSessionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **string** | Username as used on easy.cloud | 
 **password** | **string** | Password as used on easy.cloud | 

### Return type

[**[]EaseeCharger**](EaseeCharger.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

