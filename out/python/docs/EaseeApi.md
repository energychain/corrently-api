# openapi_client.EaseeApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**easee_sessions**](EaseeApi.md#easee_sessions) | **GET** /alternative/easee/lastSessions | Returns lastSession info for all easee wallboxes (chargers) given user has access to.


# **easee_sessions**
> [EaseeCharger] easee_sessions()

Returns lastSession info for all easee wallboxes (chargers) given user has access to.

Refer to easee.cloud API for details. 

### Example

```python
import time
import openapi_client
from openapi_client.api import easee_api
from openapi_client.model.easee_charger import EaseeCharger
from pprint import pprint
# Defining the host is optional and defaults to https://api.corrently.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.corrently.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = easee_api.EaseeApi(api_client)
    username = "username_example" # str | Username as used on easy.cloud (optional)
    password = "password_example" # str | Password as used on easy.cloud (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Returns lastSession info for all easee wallboxes (chargers) given user has access to.
        api_response = api_instance.easee_sessions(username=username, password=password)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling EaseeApi->easee_sessions: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| Username as used on easy.cloud | [optional]
 **password** | **str**| Password as used on easy.cloud | [optional]

### Return type

[**[EaseeCharger]**](EaseeCharger.md)

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

