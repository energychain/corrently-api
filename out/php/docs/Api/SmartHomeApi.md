# OpenAPI\Client\SmartHomeApi

All URIs are relative to https://api.corrently.io/v2.0.

Method | HTTP request | Description
------------- | ------------- | -------------
[**gsiBesthour()**](SmartHomeApi.md#gsiBesthour) | **GET** /gsi/bestHour | Get best hour (with most regional green energy) in a given timeframe.


## `gsiBesthour()`

```php
gsiBesthour($zip, $key, $timeframe, $hours): bool
```

Get best hour (with most regional green energy) in a given timeframe.

Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\SmartHomeApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$zip = 'zip_example'; // string | Zipcode (Postleitzahl) of a city in Germany.
$key = 'key_example'; // string | Any valid Stromkonto account (address).
$timeframe = 56; // int | Number of hours to check (default 24 hours from now).
$hours = 56; // int | How many hours in row do you need the device turned on?

try {
    $result = $apiInstance->gsiBesthour($zip, $key, $timeframe, $hours);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SmartHomeApi->gsiBesthour: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zip** | **string**| Zipcode (Postleitzahl) of a city in Germany. | [optional]
 **key** | **string**| Any valid Stromkonto account (address). | [optional]
 **timeframe** | **int**| Number of hours to check (default 24 hours from now). | [optional]
 **hours** | **int**| How many hours in row do you need the device turned on? | [optional]

### Return type

**bool**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
