# GreenPowerIndexGrnstromIndexApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gsiBesthour**](GreenPowerIndexGrnstromIndexApi.md#gsiBesthour) | **GET** /gsi/bestHour | Get best hour (with most regional green energy) in a given timeframe.
[**gsiDispatch**](GreenPowerIndexGrnstromIndexApi.md#gsiDispatch) | **GET** /gsi/dispatch | Dispatch (Green Energy Distribution Schedule)
[**gsiMarketdata**](GreenPowerIndexGrnstromIndexApi.md#gsiMarketdata) | **GET** /gsi/marketdata | Marketdata
[**gsiPrediction**](GreenPowerIndexGrnstromIndexApi.md#gsiPrediction) | **GET** /gsi/prediction | Prediction


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
import org.openapitools.client.api.GreenPowerIndexGrnstromIndexApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.corrently.io/v2.0");

    GreenPowerIndexGrnstromIndexApi apiInstance = new GreenPowerIndexGrnstromIndexApi(defaultClient);
    String zip = "zip_example"; // String | Zipcode (Postleitzahl) of a city in Germany.
    String key = "key_example"; // String | Any valid Stromkonto account (address).
    Integer timeframe = 56; // Integer | Number of hours to check (default 24 hours from now).
    Integer hours = 56; // Integer | How many hours in row do you need the device turned on?
    try {
      Boolean result = apiInstance.gsiBesthour(zip, key, timeframe, hours);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GreenPowerIndexGrnstromIndexApi#gsiBesthour");
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

<a name="gsiDispatch"></a>
# **gsiDispatch**
> InlineResponse2002 gsiDispatch(zip, key)

Dispatch (Green Energy Distribution Schedule)

Dispatch of green energy has two aspects to consider:   - Availability of gerneration facility (depends on weather and installed capacity)   - Demand of energy Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic). 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.GreenPowerIndexGrnstromIndexApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.corrently.io/v2.0");

    GreenPowerIndexGrnstromIndexApi apiInstance = new GreenPowerIndexGrnstromIndexApi(defaultClient);
    String zip = "zip_example"; // String | Zipcode (Postleitzahl) of a city in Germany.
    String key = "key_example"; // String | Any valid Stromkonto account (address).
    try {
      InlineResponse2002 result = apiInstance.gsiDispatch(zip, key);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GreenPowerIndexGrnstromIndexApi#gsiDispatch");
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

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

<a name="gsiMarketdata"></a>
# **gsiMarketdata**
> InlineResponse2003 gsiMarketdata(zip)

Marketdata

Compatible to awattar (https://api.awattar.de/v1/marketdata) API interface but data comes from GreenPowerIndex instead of EPEXSpot. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.GreenPowerIndexGrnstromIndexApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.corrently.io/v2.0");

    GreenPowerIndexGrnstromIndexApi apiInstance = new GreenPowerIndexGrnstromIndexApi(defaultClient);
    String zip = "zip_example"; // String | Zipcode (Postleitzahl) of a city in Germany.
    try {
      InlineResponse2003 result = apiInstance.gsiMarketdata(zip);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GreenPowerIndexGrnstromIndexApi#gsiMarketdata");
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

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

<a name="gsiPrediction"></a>
# **gsiPrediction**
> InlineResponse2001 gsiPrediction(zip, key)

Prediction

Retrieval the GreenPowerIndex (GrünstromIndex) for a given city (by zipcode) in Germany. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.GreenPowerIndexGrnstromIndexApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.corrently.io/v2.0");

    GreenPowerIndexGrnstromIndexApi apiInstance = new GreenPowerIndexGrnstromIndexApi(defaultClient);
    String zip = "zip_example"; // String | Zipcode (Postleitzahl) of a city in Germany.
    String key = "key_example"; // String | Any valid Stromkonto account (address).
    try {
      InlineResponse2001 result = apiInstance.gsiPrediction(zip, key);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GreenPowerIndexGrnstromIndexApi#gsiPrediction");
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

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

