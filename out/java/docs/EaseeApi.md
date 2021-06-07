# EaseeApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**easeeSessions**](EaseeApi.md#easeeSessions) | **GET** /alternative/easee/lastSessions | Returns lastSession info for all easee wallboxes (chargers) given user has access to.


<a name="easeeSessions"></a>
# **easeeSessions**
> List&lt;EaseeCharger&gt; easeeSessions(username, password)

Returns lastSession info for all easee wallboxes (chargers) given user has access to.

Refer to easee.cloud API for details. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.EaseeApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.corrently.io/v2.0");

    EaseeApi apiInstance = new EaseeApi(defaultClient);
    String username = "username_example"; // String | Username as used on easy.cloud
    String password = "password_example"; // String | Password as used on easy.cloud
    try {
      List<EaseeCharger> result = apiInstance.easeeSessions(username, password);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling EaseeApi#easeeSessions");
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
 **username** | **String**| Username as used on easy.cloud | [optional]
 **password** | **String**| Password as used on easy.cloud | [optional]

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

