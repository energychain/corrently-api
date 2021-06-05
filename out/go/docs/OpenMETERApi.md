# \OpenMETERApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**OmActivities**](OpenMETERApi.md#OmActivities) | **Get** /alternative/openmeter/activities | Public shared smart meters installed in Germany and available for subservices and exploration.
[**OmMeters**](OpenMETERApi.md#OmMeters) | **Get** /alternative/openmeter/meters | Public shared smart meters installed in Germany and available for subservices and exploration.
[**OmReadings**](OpenMETERApi.md#OmReadings) | **Get** /alternative/openmeter/readings | Public shared smart meters installed in Germany and available for subservices and exploration.



## OmActivities

> []Ommeters OmActivities(ctx).Execute()

Public shared smart meters installed in Germany and available for subservices and exploration.



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

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.OpenMETERApi.OmActivities(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OpenMETERApi.OmActivities``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `OmActivities`: []Ommeters
    fmt.Fprintf(os.Stdout, "Response from `OpenMETERApi.OmActivities`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiOmActivitiesRequest struct via the builder pattern


### Return type

[**[]Ommeters**](Ommeters.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## OmMeters

> []Ommeters OmMeters(ctx).Execute()

Public shared smart meters installed in Germany and available for subservices and exploration.



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

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.OpenMETERApi.OmMeters(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OpenMETERApi.OmMeters``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `OmMeters`: []Ommeters
    fmt.Fprintf(os.Stdout, "Response from `OpenMETERApi.OmMeters`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiOmMetersRequest struct via the builder pattern


### Return type

[**[]Ommeters**](Ommeters.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## OmReadings

> []Ommeters OmReadings(ctx).Execute()

Public shared smart meters installed in Germany and available for subservices and exploration.



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

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.OpenMETERApi.OmReadings(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OpenMETERApi.OmReadings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `OmReadings`: []Ommeters
    fmt.Fprintf(os.Stdout, "Response from `OpenMETERApi.OmReadings`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiOmReadingsRequest struct via the builder pattern


### Return type

[**[]Ommeters**](Ommeters.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

