# TariffPriceApiApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tariffSLPH0**](TariffPriceApiApi.md#tariffSLPH0) | **GET** /tariff/slph0 | Energy Tariff information
[**tariffcomponents**](TariffPriceApiApi.md#tariffcomponents) | **GET** /tariff/components | Energy Tariff price components


<a name="tariffSLPH0"></a>
# **tariffSLPH0**
> List&lt;Tariffh0&gt; tariffSLPH0(zipcode)

Energy Tariff information

Provides pricing data for private households with standard load profiles (Standardlastprofil H0). 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TariffPriceApiApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.corrently.io/v2.0");

    TariffPriceApiApi apiInstance = new TariffPriceApiApi(defaultClient);
    String zipcode = "zipcode_example"; // String | Zipcode (Postzleitzahl) of a city in Germany.
    try {
      List<Tariffh0> result = apiInstance.tariffSLPH0(zipcode);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TariffPriceApiApi#tariffSLPH0");
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
 **zipcode** | **String**| Zipcode (Postzleitzahl) of a city in Germany. | [optional]

### Return type

[**List&lt;Tariffh0&gt;**](Tariffh0.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

<a name="tariffcomponents"></a>
# **tariffcomponents**
> Componentsh0 tariffcomponents(zipcode, email, kwha, milliseconds, wh)

Energy Tariff price components

Provides insides into the different cost components of energy for a private household. Sample Request: https://api.corrently.io/v2.0/tariff/components?email&#x3D;demo%40corrently.io&amp;zip&#x3D;69168&amp;kwha&#x3D;3300 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TariffPriceApiApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.corrently.io/v2.0");

    TariffPriceApiApi apiInstance = new TariffPriceApiApi(defaultClient);
    String zipcode = "zipcode_example"; // String | Zipcode (Postzleitzahl) of a city in Germany.
    String email = "email_example"; // String | Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time
    Integer kwha = 56; // Integer | Total amount of energy in kilo-watt-hours per year. (sample 2100)
    Integer milliseconds = 56; // Integer | If provided all results will be scaled to this timeframe
    Integer wh = 56; // Integer | If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created.
    try {
      Componentsh0 result = apiInstance.tariffcomponents(zipcode, email, kwha, milliseconds, wh);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TariffPriceApiApi#tariffcomponents");
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
 **zipcode** | **String**| Zipcode (Postzleitzahl) of a city in Germany. | [optional]
 **email** | **String**| Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time | [optional]
 **kwha** | **Integer**| Total amount of energy in kilo-watt-hours per year. (sample 2100) | [optional]
 **milliseconds** | **Integer**| If provided all results will be scaled to this timeframe | [optional]
 **wh** | **Integer**| If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created. | [optional]

### Return type

[**Componentsh0**](Componentsh0.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

