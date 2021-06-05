# openapi_client.TariffPriceAPIApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tariff_slph0**](TariffPriceAPIApi.md#tariff_slph0) | **GET** /tariff/slph0 | Energy Tariff information
[**tariffcomponents**](TariffPriceAPIApi.md#tariffcomponents) | **GET** /tariff/components | Energy Tariff price components


# **tariff_slph0**
> [Tariffh0] tariff_slph0()

Energy Tariff information

Provides pricing data for private households with standard load profiles (Standardlastprofil H0). 

### Example

```python
import time
import openapi_client
from openapi_client.api import tariff__price_api_api
from openapi_client.model.tariffh0 import Tariffh0
from pprint import pprint
# Defining the host is optional and defaults to https://api.corrently.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.corrently.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = tariff__price_api_api.TariffPriceAPIApi(api_client)
    zipcode = "zipcode_example" # str | Zipcode (Postzleitzahl) of a city in Germany. (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Energy Tariff information
        api_response = api_instance.tariff_slph0(zipcode=zipcode)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TariffPriceAPIApi->tariff_slph0: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zipcode** | **str**| Zipcode (Postzleitzahl) of a city in Germany. | [optional]

### Return type

[**[Tariffh0]**](Tariffh0.md)

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

# **tariffcomponents**
> Componentsh0 tariffcomponents()

Energy Tariff price components

Provides insides into the different cost components of energy for a private household. Sample Request: https://api.corrently.io/v2.0/tariff/components?email=demo%40corrently.io&zip=69168&kwha=3300 

### Example

```python
import time
import openapi_client
from openapi_client.api import tariff__price_api_api
from openapi_client.model.componentsh0 import Componentsh0
from pprint import pprint
# Defining the host is optional and defaults to https://api.corrently.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.corrently.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = tariff__price_api_api.TariffPriceAPIApi(api_client)
    zipcode = "zipcode_example" # str | Zipcode (Postzleitzahl) of a city in Germany. (optional)
    email = "email_example" # str | Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time (optional)
    kwha = 1 # int | Total amount of energy in kilo-watt-hours per year. (sample 2100) (optional)
    milliseconds = 1 # int | If provided all results will be scaled to this timeframe (optional)
    wh = 1 # int | If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created. (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Energy Tariff price components
        api_response = api_instance.tariffcomponents(zipcode=zipcode, email=email, kwha=kwha, milliseconds=milliseconds, wh=wh)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling TariffPriceAPIApi->tariffcomponents: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zipcode** | **str**| Zipcode (Postzleitzahl) of a city in Germany. | [optional]
 **email** | **str**| Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time | [optional]
 **kwha** | **int**| Total amount of energy in kilo-watt-hours per year. (sample 2100) | [optional]
 **milliseconds** | **int**| If provided all results will be scaled to this timeframe | [optional]
 **wh** | **int**| If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created. | [optional]

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

