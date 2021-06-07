# WiMWechselprozesseImMesswesenStromStatusApiApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wimstatus**](WiMWechselprozesseImMesswesenStromStatusApiApi.md#wimstatus) | **GET** /wim/status | WiM Proess Informtion


<a name="wimstatus"></a>
# **wimstatus**
> InlineResponse2006 wimstatus(vid)

WiM Proess Informtion

Access to status information of an existing metering change and allocation process. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.WiMWechselprozesseImMesswesenStromStatusApiApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.corrently.io/v2.0");

    WiMWechselprozesseImMesswesenStromStatusApiApi apiInstance = new WiMWechselprozesseImMesswesenStromStatusApiApi(defaultClient);
    String vid = "vid_example"; // String | VID key of the process.
    try {
      InlineResponse2006 result = apiInstance.wimstatus(vid);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WiMWechselprozesseImMesswesenStromStatusApiApi#wimstatus");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vid** | **String**| VID key of the process. | [optional]

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

