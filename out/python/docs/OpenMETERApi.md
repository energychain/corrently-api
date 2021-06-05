# openapi_client.OpenMETERApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**om_activities**](OpenMETERApi.md#om_activities) | **GET** /alternative/openmeter/activities | Public shared smart meters installed in Germany and available for subservices and exploration.
[**om_meters**](OpenMETERApi.md#om_meters) | **GET** /alternative/openmeter/meters | Public shared smart meters installed in Germany and available for subservices and exploration.
[**om_readings**](OpenMETERApi.md#om_readings) | **GET** /alternative/openmeter/readings | Public shared smart meters installed in Germany and available for subservices and exploration.


# **om_activities**
> [Ommeters] om_activities()

Public shared smart meters installed in Germany and available for subservices and exploration.

Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery. 

### Example

```python
import time
import openapi_client
from openapi_client.api import open_meter_api
from openapi_client.model.ommeters import Ommeters
from pprint import pprint
# Defining the host is optional and defaults to https://api.corrently.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.corrently.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = open_meter_api.OpenMETERApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Public shared smart meters installed in Germany and available for subservices and exploration.
        api_response = api_instance.om_activities()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling OpenMETERApi->om_activities: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[Ommeters]**](Ommeters.md)

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

# **om_meters**
> [Ommeters] om_meters()

Public shared smart meters installed in Germany and available for subservices and exploration.

Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery. 

### Example

```python
import time
import openapi_client
from openapi_client.api import open_meter_api
from openapi_client.model.ommeters import Ommeters
from pprint import pprint
# Defining the host is optional and defaults to https://api.corrently.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.corrently.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = open_meter_api.OpenMETERApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Public shared smart meters installed in Germany and available for subservices and exploration.
        api_response = api_instance.om_meters()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling OpenMETERApi->om_meters: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[Ommeters]**](Ommeters.md)

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

# **om_readings**
> [Ommeters] om_readings()

Public shared smart meters installed in Germany and available for subservices and exploration.

Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery. 

### Example

```python
import time
import openapi_client
from openapi_client.api import open_meter_api
from openapi_client.model.ommeters import Ommeters
from pprint import pprint
# Defining the host is optional and defaults to https://api.corrently.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.corrently.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = open_meter_api.OpenMETERApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Public shared smart meters installed in Germany and available for subservices and exploration.
        api_response = api_instance.om_readings()
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling OpenMETERApi->om_readings: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[Ommeters]**](Ommeters.md)

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

