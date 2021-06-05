# openapi_client.StromkontoLedgerApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**prepare_transaction**](StromkontoLedgerApi.md#prepare_transaction) | **POST** /stromkonto/prepareTransaction | Prepare Transaction
[**stromkonto_balances**](StromkontoLedgerApi.md#stromkonto_balances) | **GET** /stromkonto/balances | Balances
[**stromkonto_choices**](StromkontoLedgerApi.md#stromkonto_choices) | **GET** /stromkonto/choices | Selectable Choices for customer
[**stromkonto_login**](StromkontoLedgerApi.md#stromkonto_login) | **POST** /stromkonto/login | Login (via Mail)
[**stromkonto_register**](StromkontoLedgerApi.md#stromkonto_register) | **POST** /stromkonto/register | Register (new Stromkonto)


# **prepare_transaction**
> prepare_transaction(inline_object2)

Prepare Transaction

Prepares and inques a transaction (transfer) between two accounts (Stromkonten). This might be used to send any balanced entity. Using this endpoint will only prepare the transaction and enques it for signing and countersigning. This is done from within the user UI using validation process. Note: This API method does not validate any transations. In other words authentication, authorization, validation and actual transfer of value is done using a smart contract during processing in the energy blockchain. 

### Example

```python
import time
import openapi_client
from openapi_client.api import stromkonto__ledger_api
from openapi_client.model.inline_object2 import InlineObject2
from pprint import pprint
# Defining the host is optional and defaults to https://api.corrently.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.corrently.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = stromkonto__ledger_api.StromkontoLedgerApi(api_client)
    inline_object2 = InlineObject2(
        account="account_example",
        to="to_example",
        value=1,
        variation="gsb",
        signature="signature_example",
    ) # InlineObject2 | 

    # example passing only required values which don't have defaults set
    try:
        # Prepare Transaction
        api_instance.prepare_transaction(inline_object2)
    except openapi_client.ApiException as e:
        print("Exception when calling StromkontoLedgerApi->prepare_transaction: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inline_object2** | [**InlineObject2**](InlineObject2.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stromkonto_balances**
> [Balance] stromkonto_balances()

Balances

Stromkonto represents a core component of the Corrently Ecosystem. It is a ledger for green energy related transactions and gets heavily used by the public Web-UI on www.stromkonto.net . Beside of some decoration and reformating operations all data is backed by the [Energychain blockchain](https://github.com/energychain/) to provide consensus of balances and transactions. Use this API Endppoint if you prefere not to work with low level Distributed Ledger Technology (Blockchain). 

### Example

```python
import time
import openapi_client
from openapi_client.api import stromkonto__ledger_api
from openapi_client.model.balance import Balance
from pprint import pprint
# Defining the host is optional and defaults to https://api.corrently.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.corrently.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = stromkonto__ledger_api.StromkontoLedgerApi(api_client)
    account = "account_example" # str | Ethereum style address referencing a valid account (AKA Stromkonto). (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Balances
        api_response = api_instance.stromkonto_balances(account=account)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling StromkontoLedgerApi->stromkonto_balances: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **str**| Ethereum style address referencing a valid account (AKA Stromkonto). | [optional]

### Return type

[**[Balance]**](Balance.md)

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

# **stromkonto_choices**
> [Balance] stromkonto_choices()

Selectable Choices for customer

Signable choices (contract changes) for customer. 

### Example

```python
import time
import openapi_client
from openapi_client.api import stromkonto__ledger_api
from openapi_client.model.balance import Balance
from pprint import pprint
# Defining the host is optional and defaults to https://api.corrently.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.corrently.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = stromkonto__ledger_api.StromkontoLedgerApi(api_client)
    account = "account_example" # str | Ethereum style address referencing a valid account alias (never use Stromkonto directly!). (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Selectable Choices for customer
        api_response = api_instance.stromkonto_choices(account=account)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling StromkontoLedgerApi->stromkonto_choices: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **str**| Ethereum style address referencing a valid account alias (never use Stromkonto directly!). | [optional]

### Return type

[**[Balance]**](Balance.md)

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

# **stromkonto_login**
> InlineResponse200 stromkonto_login(inline_object1)

Login (via Mail)

Sends a mail to a given email address to login this user. This function makes life a bit easier in order to not having to deal with private key protection on the user side as a shared key is used to sign transactions onbehalf of a particular account.  However viewing consensus information (balances) are public and *might move* from account to account without prior notification. Best practice for third party uses is to always start a session with the login RESP call and only create a user in case the response indicates an `unregistered` status. 

### Example

```python
import time
import openapi_client
from openapi_client.api import stromkonto__ledger_api
from openapi_client.model.inline_object1 import InlineObject1
from openapi_client.model.inline_response200 import InlineResponse200
from pprint import pprint
# Defining the host is optional and defaults to https://api.corrently.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.corrently.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = stromkonto__ledger_api.StromkontoLedgerApi(api_client)
    inline_object1 = InlineObject1(
        email="email_example",
    ) # InlineObject1 | 

    # example passing only required values which don't have defaults set
    try:
        # Login (via Mail)
        api_response = api_instance.stromkonto_login(inline_object1)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling StromkontoLedgerApi->stromkonto_login: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inline_object1** | [**InlineObject1**](InlineObject1.md)|  |

### Return type

[**InlineResponse200**](InlineResponse200.md)

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

# **stromkonto_register**
> stromkonto_register(inline_object)

Register (new Stromkonto)

Calling this method with an unregistered (new) email will create a new account (Stromkonto) with all balances having a value of `0` and no transaction history. In addition some basic properties like region and zipcode are set to allow further operation of account. 

### Example

```python
import time
import openapi_client
from openapi_client.api import stromkonto__ledger_api
from openapi_client.model.inline_object import InlineObject
from pprint import pprint
# Defining the host is optional and defaults to https://api.corrently.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.corrently.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = stromkonto__ledger_api.StromkontoLedgerApi(api_client)
    inline_object = InlineObject(
        email="email_example",
        first_name="first_name_example",
        last_name="last_name_example",
        zipcode="zipcode_example",
    ) # InlineObject | 

    # example passing only required values which don't have defaults set
    try:
        # Register (new Stromkonto)
        api_instance.stromkonto_register(inline_object)
    except openapi_client.ApiException as e:
        print("Exception when calling StromkontoLedgerApi->stromkonto_register: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inline_object** | [**InlineObject**](InlineObject.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

