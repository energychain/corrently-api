# OpenAPI\Client\GreenPowerIndexGrnstromIndexApi

All URIs are relative to https://api.corrently.io/v2.0.

Method | HTTP request | Description
------------- | ------------- | -------------
[**gsiBesthour()**](GreenPowerIndexGrnstromIndexApi.md#gsiBesthour) | **GET** /gsi/bestHour | Get best hour (with most regional green energy) in a given timeframe.
[**gsiDispatch()**](GreenPowerIndexGrnstromIndexApi.md#gsiDispatch) | **GET** /gsi/dispatch | Dispatch (Green Energy Distribution Schedule)
[**gsiMarketdata()**](GreenPowerIndexGrnstromIndexApi.md#gsiMarketdata) | **GET** /gsi/marketdata | Marketdata
[**gsiPrediction()**](GreenPowerIndexGrnstromIndexApi.md#gsiPrediction) | **GET** /gsi/prediction | Prediction


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



$apiInstance = new OpenAPI\Client\Api\GreenPowerIndexGrnstromIndexApi(
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
    echo 'Exception when calling GreenPowerIndexGrnstromIndexApi->gsiBesthour: ', $e->getMessage(), PHP_EOL;
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

## `gsiDispatch()`

```php
gsiDispatch($zip, $key): \OpenAPI\Client\Model\InlineResponse2002
```

Dispatch (Green Energy Distribution Schedule)

Dispatch of green energy has two aspects to consider:   - Availability of gerneration facility (depends on weather and installed capacity)   - Demand of energy Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic).

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\GreenPowerIndexGrnstromIndexApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$zip = 'zip_example'; // string | Zipcode (Postleitzahl) of a city in Germany.
$key = 'key_example'; // string | Any valid Stromkonto account (address).

try {
    $result = $apiInstance->gsiDispatch($zip, $key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GreenPowerIndexGrnstromIndexApi->gsiDispatch: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zip** | **string**| Zipcode (Postleitzahl) of a city in Germany. | [optional]
 **key** | **string**| Any valid Stromkonto account (address). | [optional]

### Return type

[**\OpenAPI\Client\Model\InlineResponse2002**](../Model/InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `gsiMarketdata()`

```php
gsiMarketdata($zip): \OpenAPI\Client\Model\InlineResponse2003
```

Marketdata

Compatible to awattar (https://api.awattar.de/v1/marketdata) API interface but data comes from GreenPowerIndex instead of EPEXSpot.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\GreenPowerIndexGrnstromIndexApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$zip = 'zip_example'; // string | Zipcode (Postleitzahl) of a city in Germany.

try {
    $result = $apiInstance->gsiMarketdata($zip);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GreenPowerIndexGrnstromIndexApi->gsiMarketdata: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zip** | **string**| Zipcode (Postleitzahl) of a city in Germany. | [optional]

### Return type

[**\OpenAPI\Client\Model\InlineResponse2003**](../Model/InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `gsiPrediction()`

```php
gsiPrediction($zip, $key): \OpenAPI\Client\Model\InlineResponse2001
```

Prediction

Retrieval the GreenPowerIndex (GrünstromIndex) for a given city (by zipcode) in Germany.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\GreenPowerIndexGrnstromIndexApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$zip = 'zip_example'; // string | Zipcode (Postleitzahl) of a city in Germany.
$key = 'key_example'; // string | Any valid Stromkonto account (address).

try {
    $result = $apiInstance->gsiPrediction($zip, $key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GreenPowerIndexGrnstromIndexApi->gsiPrediction: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zip** | **string**| Zipcode (Postleitzahl) of a city in Germany. | [optional]
 **key** | **string**| Any valid Stromkonto account (address). | [optional]

### Return type

[**\OpenAPI\Client\Model\InlineResponse2001**](../Model/InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
