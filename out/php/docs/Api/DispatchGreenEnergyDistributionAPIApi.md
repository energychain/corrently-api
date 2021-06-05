# OpenAPI\Client\DispatchGreenEnergyDistributionAPIApi

All URIs are relative to https://api.corrently.io/v2.0.

Method | HTTP request | Description
------------- | ------------- | -------------
[**gsiDispatch()**](DispatchGreenEnergyDistributionAPIApi.md#gsiDispatch) | **GET** /gsi/dispatch | Dispatch (Green Energy Distribution Schedule)


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



$apiInstance = new OpenAPI\Client\Api\DispatchGreenEnergyDistributionAPIApi(
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
    echo 'Exception when calling DispatchGreenEnergyDistributionAPIApi->gsiDispatch: ', $e->getMessage(), PHP_EOL;
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
