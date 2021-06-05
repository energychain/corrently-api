# OpenMeterApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**omActivities**](OpenMeterApi.md#omActivities) | **GET** /alternative/openmeter/activities | Public shared smart meters installed in Germany and available for subservices and exploration.
[**omMeters**](OpenMeterApi.md#omMeters) | **GET** /alternative/openmeter/meters | Public shared smart meters installed in Germany and available for subservices and exploration.
[**omReadings**](OpenMeterApi.md#omReadings) | **GET** /alternative/openmeter/readings | Public shared smart meters installed in Germany and available for subservices and exploration.


<a name="omActivities"></a>
# **omActivities**
> List&lt;Ommeters&gt; omActivities()

Public shared smart meters installed in Germany and available for subservices and exploration.

Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OpenMeterApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.corrently.io/v2.0");

    OpenMeterApi apiInstance = new OpenMeterApi(defaultClient);
    try {
      List<Ommeters> result = apiInstance.omActivities();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OpenMeterApi#omActivities");
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

[**List&lt;Ommeters&gt;**](Ommeters.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

<a name="omMeters"></a>
# **omMeters**
> List&lt;Ommeters&gt; omMeters()

Public shared smart meters installed in Germany and available for subservices and exploration.

Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OpenMeterApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.corrently.io/v2.0");

    OpenMeterApi apiInstance = new OpenMeterApi(defaultClient);
    try {
      List<Ommeters> result = apiInstance.omMeters();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OpenMeterApi#omMeters");
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

[**List&lt;Ommeters&gt;**](Ommeters.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

<a name="omReadings"></a>
# **omReadings**
> List&lt;Ommeters&gt; omReadings()

Public shared smart meters installed in Germany and available for subservices and exploration.

Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OpenMeterApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.corrently.io/v2.0");

    OpenMeterApi apiInstance = new OpenMeterApi(defaultClient);
    try {
      List<Ommeters> result = apiInstance.omReadings();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OpenMeterApi#omReadings");
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

[**List&lt;Ommeters&gt;**](Ommeters.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

