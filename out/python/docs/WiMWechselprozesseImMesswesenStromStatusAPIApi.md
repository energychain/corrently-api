# openapi_client.WiMWechselprozesseImMesswesenStromStatusAPIApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wimstatus**](WiMWechselprozesseImMesswesenStromStatusAPIApi.md#wimstatus) | **GET** /wim/status | WiM Proess Informtion


# **wimstatus**
> InlineResponse2007 wimstatus()

WiM Proess Informtion

Access to status information of an existing metering change and allocation process. 

### Example

```python
import time
import openapi_client
from openapi_client.api import wi_m__wechselprozesse_im_messwesen_strom___status_api_api
from openapi_client.model.inline_response2007 import InlineResponse2007
from pprint import pprint
# Defining the host is optional and defaults to https://api.corrently.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.corrently.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = wi_m__wechselprozesse_im_messwesen_strom___status_api_api.WiMWechselprozesseImMesswesenStromStatusAPIApi(api_client)
    vid = "vid_example" # str | VID key of the process. (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # WiM Proess Informtion
        api_response = api_instance.wimstatus(vid=vid)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling WiMWechselprozesseImMesswesenStromStatusAPIApi->wimstatus: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vid** | **str**| VID key of the process. | [optional]

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

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

