# OpenAPI\Client\MeteringDecoratorApi

All URIs are relative to https://api.corrently.io/v2.0.

Method | HTTP request | Description
------------- | ------------- | -------------
[**meteringGet()**](MeteringDecoratorApi.md#meteringGet) | **GET** /metering/reading | Meter Reading
[**meteringPost()**](MeteringDecoratorApi.md#meteringPost) | **POST** /metering/reading | Meter Reading


## `meteringGet()`

```php
meteringGet($account): \OpenAPI\Client\Model\InlineResponse2004
```

Meter Reading

Retrieves a metered reading using account (Stromkonto).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\MeteringDecoratorApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$account = 'account_example'; // string | Account/Address (Stromkonto) to retrieve reading for.

try {
    $result = $apiInstance->meteringGet($account);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MeteringDecoratorApi->meteringGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **string**| Account/Address (Stromkonto) to retrieve reading for. | [optional]

### Return type

[**\OpenAPI\Client\Model\InlineResponse2004**](../Model/InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `meteringPost()`

```php
meteringPost($inline_object3): \OpenAPI\Client\Model\InlineResponse2005
```

Meter Reading

Post meter reading and get it decorated. Best practice is to first create a new Stromkonto with the register method and choose a nice secret to protect updates. Now regularly send updates to get readings (consumption) split into green power (1.8.1) and grey power (1.8.2).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\MeteringDecoratorApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inline_object3 = new \OpenAPI\Client\Model\InlineObject3(); // \OpenAPI\Client\Model\InlineObject3

try {
    $result = $apiInstance->meteringPost($inline_object3);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MeteringDecoratorApi->meteringPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inline_object3** | [**\OpenAPI\Client\Model\InlineObject3**](../Model/InlineObject3.md)|  |

### Return type

[**\OpenAPI\Client\Model\InlineResponse2005**](../Model/InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
