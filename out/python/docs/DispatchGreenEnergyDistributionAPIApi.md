# openapi_client.DispatchGreenEnergyDistributionAPIApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gsi_dispatch**](DispatchGreenEnergyDistributionAPIApi.md#gsi_dispatch) | **GET** /gsi/dispatch | Dispatch (Green Energy Distribution Schedule)


# **gsi_dispatch**
> InlineResponse2002 gsi_dispatch()

Dispatch (Green Energy Distribution Schedule)

Dispatch of green energy has two aspects to consider:   - Availability of gerneration facility (depends on weather and installed capacity)   - Demand of energy Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic). 

### Example

```python
import time
import openapi_client
from openapi_client.api import dispatch__green_energy_distribution_api_api
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
    api_instance = dispatch__green_energy_distribution_api_api.DispatchGreenEnergyDistributionAPIApi(api_client)
    zip = "zip_example" # str | Zipcode (Postleitzahl) of a city in Germany. (optional)
    key = "key_example" # str | Any valid Stromkonto account (address). (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Dispatch (Green Energy Distribution Schedule)
        api_response = api_instance.gsi_dispatch(zip=zip, key=key)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling DispatchGreenEnergyDistributionAPIApi->gsi_dispatch: %s\n" % e)
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

