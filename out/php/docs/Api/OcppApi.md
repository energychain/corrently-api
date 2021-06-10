# OpenAPI\Client\OcppApi

All URIs are relative to https://api.corrently.io/v2.0.

Method | HTTP request | Description
------------- | ------------- | -------------
[**ocppSessions()**](OcppApi.md#ocppSessions) | **GET** /alternative/ocpp/lastSessions | Returns lastSession info of OCCP Cloud service for clearing in corrently ecosystem. Might be tested via [OCPP cloud simulator](https://ocpp.corrently.cloud).


## `ocppSessions()`

```php
ocppSessions(): \OpenAPI\Client\Model\EaseeCharger[]
```

Returns lastSession info of OCCP Cloud service for clearing in corrently ecosystem. Might be tested via [OCPP cloud simulator](https://ocpp.corrently.cloud).

Last session Info of managed EV charging stations connected to the correnty ecosystem.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\OcppApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->ocppSessions();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OcppApi->ocppSessions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\EaseeCharger[]**](../Model/EaseeCharger.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
