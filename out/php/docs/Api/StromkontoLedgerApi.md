# OpenAPI\Client\StromkontoLedgerApi

All URIs are relative to https://api.corrently.io/v2.0.

Method | HTTP request | Description
------------- | ------------- | -------------
[**prepareTransaction()**](StromkontoLedgerApi.md#prepareTransaction) | **POST** /stromkonto/prepareTransaction | Prepare Transaction
[**stromkontoBalances()**](StromkontoLedgerApi.md#stromkontoBalances) | **GET** /stromkonto/balances | Balances
[**stromkontoChoices()**](StromkontoLedgerApi.md#stromkontoChoices) | **GET** /stromkonto/choices | Selectable Choices for customer
[**stromkontoLogin()**](StromkontoLedgerApi.md#stromkontoLogin) | **POST** /stromkonto/login | Login (via Mail)
[**stromkontoRegister()**](StromkontoLedgerApi.md#stromkontoRegister) | **POST** /stromkonto/register | Register (new Stromkonto)


## `prepareTransaction()`

```php
prepareTransaction($inline_object2)
```

Prepare Transaction

Prepares and inques a transaction (transfer) between two accounts (Stromkonten). This might be used to send any balanced entity. Using this endpoint will only prepare the transaction and enques it for signing and countersigning. This is done from within the user UI using validation process. Note: This API method does not validate any transations. In other words authentication, authorization, validation and actual transfer of value is done using a smart contract during processing in the energy blockchain.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\StromkontoLedgerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inline_object2 = new \OpenAPI\Client\Model\InlineObject2(); // \OpenAPI\Client\Model\InlineObject2

try {
    $apiInstance->prepareTransaction($inline_object2);
} catch (Exception $e) {
    echo 'Exception when calling StromkontoLedgerApi->prepareTransaction: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inline_object2** | [**\OpenAPI\Client\Model\InlineObject2**](../Model/InlineObject2.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `stromkontoBalances()`

```php
stromkontoBalances($account): \OpenAPI\Client\Model\Balance[]
```

Balances

Stromkonto represents a core component of the Corrently Ecosystem. It is a ledger for green energy related transactions and gets heavily used by the public Web-UI on www.stromkonto.net . Beside of some decoration and reformating operations all data is backed by the [Energychain blockchain](https://github.com/energychain/) to provide consensus of balances and transactions. Use this API Endppoint if you prefere not to work with low level Distributed Ledger Technology (Blockchain).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\StromkontoLedgerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$account = 'account_example'; // string | Ethereum style address referencing a valid account (AKA Stromkonto).

try {
    $result = $apiInstance->stromkontoBalances($account);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StromkontoLedgerApi->stromkontoBalances: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **string**| Ethereum style address referencing a valid account (AKA Stromkonto). | [optional]

### Return type

[**\OpenAPI\Client\Model\Balance[]**](../Model/Balance.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `stromkontoChoices()`

```php
stromkontoChoices($account): \OpenAPI\Client\Model\Balance[]
```

Selectable Choices for customer

Signable choices (contract changes) for customer.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\StromkontoLedgerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$account = 'account_example'; // string | Ethereum style address referencing a valid account alias (never use Stromkonto directly!).

try {
    $result = $apiInstance->stromkontoChoices($account);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StromkontoLedgerApi->stromkontoChoices: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **string**| Ethereum style address referencing a valid account alias (never use Stromkonto directly!). | [optional]

### Return type

[**\OpenAPI\Client\Model\Balance[]**](../Model/Balance.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `stromkontoLogin()`

```php
stromkontoLogin($inline_object1): \OpenAPI\Client\Model\InlineResponse200
```

Login (via Mail)

Sends a mail to a given email address to login this user. This function makes life a bit easier in order to not having to deal with private key protection on the user side as a shared key is used to sign transactions onbehalf of a particular account.  However viewing consensus information (balances) are public and *might move* from account to account without prior notification. Best practice for third party uses is to always start a session with the login RESP call and only create a user in case the response indicates an `unregistered` status.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\StromkontoLedgerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inline_object1 = new \OpenAPI\Client\Model\InlineObject1(); // \OpenAPI\Client\Model\InlineObject1

try {
    $result = $apiInstance->stromkontoLogin($inline_object1);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StromkontoLedgerApi->stromkontoLogin: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inline_object1** | [**\OpenAPI\Client\Model\InlineObject1**](../Model/InlineObject1.md)|  |

### Return type

[**\OpenAPI\Client\Model\InlineResponse200**](../Model/InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `stromkontoRegister()`

```php
stromkontoRegister($inline_object)
```

Register (new Stromkonto)

Calling this method with an unregistered (new) email will create a new account (Stromkonto) with all balances having a value of `0` and no transaction history. In addition some basic properties like region and zipcode are set to allow further operation of account.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\StromkontoLedgerApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inline_object = new \OpenAPI\Client\Model\InlineObject(); // \OpenAPI\Client\Model\InlineObject

try {
    $apiInstance->stromkontoRegister($inline_object);
} catch (Exception $e) {
    echo 'Exception when calling StromkontoLedgerApi->stromkontoRegister: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inline_object** | [**\OpenAPI\Client\Model\InlineObject**](../Model/InlineObject.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
