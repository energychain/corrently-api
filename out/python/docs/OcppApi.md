# openapi_client.OcppApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ocpp_sessions**](OcppApi.md#ocpp_sessions) | **GET** /alternative/ocpp/lastSessions | Returns lastSession info of OCCP Cloud service for clearing in corrently ecosystem. Might be tested via [OCPP cloud simulator](https://ocpp.corrently.cloud).


# **ocpp_sessions**
> [EaseeCharger] ocpp_sessions()

Returns lastSession info of OCCP Cloud service for clearing in corrently ecosystem. Might be tested via [OCPP cloud simulator](https://ocpp.corrently.cloud).

Last session Info of managed EV charging stations connected to the correnty ecosystem.    

### Example

```python
import time
import openapi_client
from openapi_client.api import ocpp_api
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
    api_instance = ocpp_api.OcppApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Returns lastSession info of OCCP Cloud service for clearing in corrently ecosystem. Might be tested via [OCPP cloud simulator](https://ocpp.corrently.cloud).
        api_response = api_instance.ocpp_sessions()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling OcppApi->ocpp_sessions: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

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

