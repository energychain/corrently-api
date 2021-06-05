# openapi_client.SmartHomeApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gsi_besthour**](SmartHomeApi.md#gsi_besthour) | **GET** /gsi/bestHour | Get best hour (with most regional green energy) in a given timeframe.


# **gsi_besthour**
> bool gsi_besthour()

Get best hour (with most regional green energy) in a given timeframe.

Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state). 

### Example

```python
import time
import openapi_client
from openapi_client.api import smart_home_api
from pprint import pprint
# Defining the host is optional and defaults to https://api.corrently.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.corrently.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = smart_home_api.SmartHomeApi(api_client)
    zip = "zip_example" # str | Zipcode (Postleitzahl) of a city in Germany. (optional)
    key = "key_example" # str | Any valid Stromkonto account (address). (optional)
    timeframe = 1 # int | Number of hours to check (default 24 hours from now). (optional)
    hours = 1 # int | How many hours in row do you need the device turned on? (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Get best hour (with most regional green energy) in a given timeframe.
        api_response = api_instance.gsi_besthour(zip=zip, key=key, timeframe=timeframe, hours=hours)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling SmartHomeApi->gsi_besthour: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zip** | **str**| Zipcode (Postleitzahl) of a city in Germany. | [optional]
 **key** | **str**| Any valid Stromkonto account (address). | [optional]
 **timeframe** | **int**| Number of hours to check (default 24 hours from now). | [optional]
 **hours** | **int**| How many hours in row do you need the device turned on? | [optional]

### Return type

**bool**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

