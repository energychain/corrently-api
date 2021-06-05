# SmartHomeApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gsiBesthour**](SmartHomeApi.md#gsiBesthour) | **GET** /gsi/bestHour | Get best hour (with most regional green energy) in a given timeframe.


<a name="gsiBesthour"></a>
# **gsiBesthour**
> Boolean gsiBesthour(zip, key, timeframe, hours)

Get best hour (with most regional green energy) in a given timeframe.

Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state). 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.SmartHomeApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.corrently.io/v2.0");

    SmartHomeApi apiInstance = new SmartHomeApi(defaultClient);
    String zip = "zip_example"; // String | Zipcode (Postleitzahl) of a city in Germany.
    String key = "key_example"; // String | Any valid Stromkonto account (address).
    Integer timeframe = 56; // Integer | Number of hours to check (default 24 hours from now).
    Integer hours = 56; // Integer | How many hours in row do you need the device turned on?
    try {
      Boolean result = apiInstance.gsiBesthour(zip, key, timeframe, hours);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SmartHomeApi#gsiBesthour");
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
 **zip** | **String**| Zipcode (Postleitzahl) of a city in Germany. | [optional]
 **key** | **String**| Any valid Stromkonto account (address). | [optional]
 **timeframe** | **Integer**| Number of hours to check (default 24 hours from now). | [optional]
 **hours** | **Integer**| How many hours in row do you need the device turned on? | [optional]

### Return type

**Boolean**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

