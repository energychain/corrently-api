# OcppApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ocppSessions**](OcppApi.md#ocppSessions) | **GET** /alternative/ocpp/lastSessions | Returns lastSession info of OCCP Cloud service for clearing in corrently ecosystem. Might be tested via [OCPP cloud simulator](https://ocpp.corrently.cloud).


<a name="ocppSessions"></a>
# **ocppSessions**
> List&lt;EaseeCharger&gt; ocppSessions()

Returns lastSession info of OCCP Cloud service for clearing in corrently ecosystem. Might be tested via [OCPP cloud simulator](https://ocpp.corrently.cloud).

Last session Info of managed EV charging stations connected to the correnty ecosystem.    

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OcppApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.corrently.io/v2.0");

    OcppApi apiInstance = new OcppApi(defaultClient);
    try {
      List<EaseeCharger> result = apiInstance.ocppSessions();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OcppApi#ocppSessions");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;EaseeCharger&gt;**](EaseeCharger.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

