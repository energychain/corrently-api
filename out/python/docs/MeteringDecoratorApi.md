# openapi_client.MeteringDecoratorApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metering_get**](MeteringDecoratorApi.md#metering_get) | **GET** /metering/reading | Meter Reading
[**metering_post**](MeteringDecoratorApi.md#metering_post) | **POST** /metering/reading | Meter Reading


# **metering_get**
> InlineResponse2004 metering_get()

Meter Reading

Retrieves a metered reading using account (Stromkonto). 

### Example

```python
import time
import openapi_client
from openapi_client.api import metering__decorator_api
from openapi_client.model.inline_response2004 import InlineResponse2004
from pprint import pprint
# Defining the host is optional and defaults to https://api.corrently.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.corrently.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = metering__decorator_api.MeteringDecoratorApi(api_client)
    account = "account_example" # str | Account/Address (Stromkonto) to retrieve reading for. (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Meter Reading
        api_response = api_instance.metering_get(account=account)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling MeteringDecoratorApi->metering_get: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **str**| Account/Address (Stromkonto) to retrieve reading for. | [optional]

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

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

# **metering_post**
> InlineResponse2005 metering_post(inline_object3)

Meter Reading

Post meter reading and get it decorated. Best practice is to first create a new Stromkonto with the register method and choose a nice secret to protect updates. Now regularly send updates to get readings (consumption) split into green power (1.8.1) and grey power (1.8.2). 

### Example

```python
import time
import openapi_client
from openapi_client.api import metering__decorator_api
from openapi_client.model.inline_object3 import InlineObject3
from openapi_client.model.inline_response2005 import InlineResponse2005
from pprint import pprint
# Defining the host is optional and defaults to https://api.corrently.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.corrently.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = metering__decorator_api.MeteringDecoratorApi(api_client)
    inline_object3 = InlineObject3(
        account="account_example",
        secret="secret_example",
        _1_8_0=1,
        value=1,
        energy=1,
        zip="zip_example",
    ) # InlineObject3 | 

    # example passing only required values which don't have defaults set
    try:
        # Meter Reading
        api_response = api_instance.metering_post(inline_object3)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling MeteringDecoratorApi->metering_post: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inline_object3** | [**InlineObject3**](InlineObject3.md)|  |

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

