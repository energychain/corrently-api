# openapi_client.StromQuittungApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quittung_create**](StromQuittungApi.md#quittung_create) | **POST** /quittung/create | Create a receipt for an energy delivery (only valid in Germany).


# **quittung_create**
> InlineResponse2006 quittung_create(inline_object4)

Create a receipt for an energy delivery (only valid in Germany).

Creates a full featured receipt (Quittung) for an energy delivery as it appears on a charging session or similar events. Allows to embed receipt generation directly into external services. 

### Example

```python
import time
import openapi_client
from openapi_client.api import strom_quittung_api
from openapi_client.model.inline_response2006 import InlineResponse2006
from openapi_client.model.inline_object4 import InlineObject4
from pprint import pprint
# Defining the host is optional and defaults to https://api.corrently.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.corrently.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = strom_quittung_api.StromQuittungApi(api_client)
    inline_object4 = InlineObject4(
        email="email_example",
    ) # InlineObject4 | 

    # example passing only required values which don't have defaults set
    try:
        # Create a receipt for an energy delivery (only valid in Germany).
        api_response = api_instance.quittung_create(inline_object4)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling StromQuittungApi->quittung_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inline_object4** | [**InlineObject4**](InlineObject4.md)|  |

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

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

