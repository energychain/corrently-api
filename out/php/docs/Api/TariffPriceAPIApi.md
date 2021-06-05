# OpenAPI\Client\TariffPriceAPIApi

All URIs are relative to https://api.corrently.io/v2.0.

Method | HTTP request | Description
------------- | ------------- | -------------
[**tariffSLPH0()**](TariffPriceAPIApi.md#tariffSLPH0) | **GET** /tariff/slph0 | Energy Tariff information
[**tariffcomponents()**](TariffPriceAPIApi.md#tariffcomponents) | **GET** /tariff/components | Energy Tariff price components


## `tariffSLPH0()`

```php
tariffSLPH0($zipcode): \OpenAPI\Client\Model\Tariffh0[]
```

Energy Tariff information

Provides pricing data for private households with standard load profiles (Standardlastprofil H0).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\TariffPriceAPIApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$zipcode = 'zipcode_example'; // string | Zipcode (Postzleitzahl) of a city in Germany.

try {
    $result = $apiInstance->tariffSLPH0($zipcode);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TariffPriceAPIApi->tariffSLPH0: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zipcode** | **string**| Zipcode (Postzleitzahl) of a city in Germany. | [optional]

### Return type

[**\OpenAPI\Client\Model\Tariffh0[]**](../Model/Tariffh0.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `tariffcomponents()`

```php
tariffcomponents($zipcode, $email, $kwha, $milliseconds, $wh): \OpenAPI\Client\Model\Componentsh0
```

Energy Tariff price components

Provides insides into the different cost components of energy for a private household. Sample Request: https://api.corrently.io/v2.0/tariff/components?email=demo%40corrently.io&zip=69168&kwha=3300

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\TariffPriceAPIApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$zipcode = 'zipcode_example'; // string | Zipcode (Postzleitzahl) of a city in Germany.
$email = 'email_example'; // string | Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time
$kwha = 56; // int | Total amount of energy in kilo-watt-hours per year. (sample 2100)
$milliseconds = 56; // int | If provided all results will be scaled to this timeframe
$wh = 56; // int | If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created.

try {
    $result = $apiInstance->tariffcomponents($zipcode, $email, $kwha, $milliseconds, $wh);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TariffPriceAPIApi->tariffcomponents: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zipcode** | **string**| Zipcode (Postzleitzahl) of a city in Germany. | [optional]
 **email** | **string**| Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time | [optional]
 **kwha** | **int**| Total amount of energy in kilo-watt-hours per year. (sample 2100) | [optional]
 **milliseconds** | **int**| If provided all results will be scaled to this timeframe | [optional]
 **wh** | **int**| If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created. | [optional]

### Return type

[**\OpenAPI\Client\Model\Componentsh0**](../Model/Componentsh0.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
