# StromQuittungApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quittungCreate**](StromQuittungApi.md#quittungCreate) | **POST** /quittung/create | Create a receipt for an energy delivery (only valid in Germany).


<a name="quittungCreate"></a>
# **quittungCreate**
> InlineResponse2006 quittungCreate(inlineObject4)

Create a receipt for an energy delivery (only valid in Germany).

Creates a full featured receipt (Quittung) for an energy delivery as it appears on a charging session or similar events. Allows to embed receipt generation directly into external services. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.StromQuittungApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.corrently.io/v2.0");

    StromQuittungApi apiInstance = new StromQuittungApi(defaultClient);
    InlineObject4 inlineObject4 = new InlineObject4(); // InlineObject4 | 
    try {
      InlineResponse2006 result = apiInstance.quittungCreate(inlineObject4);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StromQuittungApi#quittungCreate");
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
 **inlineObject4** | [**InlineObject4**](InlineObject4.md)|  |

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

