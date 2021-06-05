# openapi_client.GreenPowerIndexGrnstromIndexApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gsi_besthour**](GreenPowerIndexGrnstromIndexApi.md#gsi_besthour) | **GET** /gsi/bestHour | Get best hour (with most regional green energy) in a given timeframe.
[**gsi_dispatch**](GreenPowerIndexGrnstromIndexApi.md#gsi_dispatch) | **GET** /gsi/dispatch | Dispatch (Green Energy Distribution Schedule)
[**gsi_marketdata**](GreenPowerIndexGrnstromIndexApi.md#gsi_marketdata) | **GET** /gsi/marketdata | Marketdata
[**gsi_prediction**](GreenPowerIndexGrnstromIndexApi.md#gsi_prediction) | **GET** /gsi/prediction | Prediction


# **gsi_besthour**
> bool gsi_besthour()

Get best hour (with most regional green energy) in a given timeframe.

Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state). 

### Example

```python
import time
import openapi_client
from openapi_client.api import green_power_index__grnstrom_index_api
from pprint import pprint
# Defining the host is optional and defaults to https://api.corrently.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.corrently.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = green_power_index__grnstrom_index_api.GreenPowerIndexGrnstromIndexApi(api_client)
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
        print("Exception when calling GreenPowerIndexGrnstromIndexApi->gsi_besthour: %s\n" % e)
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

# **gsi_dispatch**
> InlineResponse2002 gsi_dispatch()

Dispatch (Green Energy Distribution Schedule)

Dispatch of green energy has two aspects to consider:   - Availability of gerneration facility (depends on weather and installed capacity)   - Demand of energy Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic). 

### Example

```python
import time
import openapi_client
from openapi_client.api import green_power_index__grnstrom_index_api
from openapi_client.model.inline_response2002 import InlineResponse2002
from pprint import pprint
# Defining the host is optional and defaults to https://api.corrently.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.corrently.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = green_power_index__grnstrom_index_api.GreenPowerIndexGrnstromIndexApi(api_client)
    zip = "zip_example" # str | Zipcode (Postleitzahl) of a city in Germany. (optional)
    key = "key_example" # str | Any valid Stromkonto account (address). (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Dispatch (Green Energy Distribution Schedule)
        api_response = api_instance.gsi_dispatch(zip=zip, key=key)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling GreenPowerIndexGrnstromIndexApi->gsi_dispatch: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zip** | **str**| Zipcode (Postleitzahl) of a city in Germany. | [optional]
 **key** | **str**| Any valid Stromkonto account (address). | [optional]

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gsi_marketdata**
> InlineResponse2003 gsi_marketdata()

Marketdata

Compatible to awattar (https://api.awattar.de/v1/marketdata) API interface but data comes from GreenPowerIndex instead of EPEXSpot. 

### Example

```python
import time
import openapi_client
from openapi_client.api import green_power_index__grnstrom_index_api
from openapi_client.model.inline_response2003 import InlineResponse2003
from pprint import pprint
# Defining the host is optional and defaults to https://api.corrently.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.corrently.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = green_power_index__grnstrom_index_api.GreenPowerIndexGrnstromIndexApi(api_client)
    zip = "zip_example" # str | Zipcode (Postleitzahl) of a city in Germany. (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Marketdata
        api_response = api_instance.gsi_marketdata(zip=zip)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling GreenPowerIndexGrnstromIndexApi->gsi_marketdata: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zip** | **str**| Zipcode (Postleitzahl) of a city in Germany. | [optional]

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gsi_prediction**
> InlineResponse2001 gsi_prediction()

Prediction

Retrieval the GreenPowerIndex (GrünstromIndex) for a given city (by zipcode) in Germany. 

### Example

```python
import time
import openapi_client
from openapi_client.api import green_power_index__grnstrom_index_api
from openapi_client.model.inline_response2001 import InlineResponse2001
from pprint import pprint
# Defining the host is optional and defaults to https://api.corrently.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.corrently.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = green_power_index__grnstrom_index_api.GreenPowerIndexGrnstromIndexApi(api_client)
    zip = "zip_example" # str | Zipcode (Postleitzahl) of a city in Germany. (optional)
    key = "key_example" # str | Any valid Stromkonto account (address). (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Prediction
        api_response = api_instance.gsi_prediction(zip=zip, key=key)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling GreenPowerIndexGrnstromIndexApi->gsi_prediction: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zip** | **str**| Zipcode (Postleitzahl) of a city in Germany. | [optional]
 **key** | **str**| Any valid Stromkonto account (address). | [optional]

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

