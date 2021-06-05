# OpenAPI\Client\OpenMETERApi

All URIs are relative to https://api.corrently.io/v2.0.

Method | HTTP request | Description
------------- | ------------- | -------------
[**omActivities()**](OpenMETERApi.md#omActivities) | **GET** /alternative/openmeter/activities | Public shared smart meters installed in Germany and available for subservices and exploration.
[**omMeters()**](OpenMETERApi.md#omMeters) | **GET** /alternative/openmeter/meters | Public shared smart meters installed in Germany and available for subservices and exploration.
[**omReadings()**](OpenMETERApi.md#omReadings) | **GET** /alternative/openmeter/readings | Public shared smart meters installed in Germany and available for subservices and exploration.


## `omActivities()`

```php
omActivities(): \OpenAPI\Client\Model\Ommeters[]
```

Public shared smart meters installed in Germany and available for subservices and exploration.

Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\OpenMETERApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->omActivities();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OpenMETERApi->omActivities: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\Ommeters[]**](../Model/Ommeters.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `omMeters()`

```php
omMeters(): \OpenAPI\Client\Model\Ommeters[]
```

Public shared smart meters installed in Germany and available for subservices and exploration.

Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\OpenMETERApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->omMeters();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OpenMETERApi->omMeters: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\Ommeters[]**](../Model/Ommeters.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `omReadings()`

```php
omReadings(): \OpenAPI\Client\Model\Ommeters[]
```

Public shared smart meters installed in Germany and available for subservices and exploration.

Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\OpenMETERApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->omReadings();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OpenMETERApi->omReadings: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\Ommeters[]**](../Model/Ommeters.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
