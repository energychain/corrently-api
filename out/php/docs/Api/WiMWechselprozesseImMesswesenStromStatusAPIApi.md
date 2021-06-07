# OpenAPI\Client\WiMWechselprozesseImMesswesenStromStatusAPIApi

All URIs are relative to https://api.corrently.io/v2.0.

Method | HTTP request | Description
------------- | ------------- | -------------
[**wimstatus()**](WiMWechselprozesseImMesswesenStromStatusAPIApi.md#wimstatus) | **GET** /wim/status | WiM Proess Informtion


## `wimstatus()`

```php
wimstatus($vid): \OpenAPI\Client\Model\InlineResponse2006
```

WiM Proess Informtion

Access to status information of an existing metering change and allocation process.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\WiMWechselprozesseImMesswesenStromStatusAPIApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$vid = 'vid_example'; // string | VID key of the process.

try {
    $result = $apiInstance->wimstatus($vid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WiMWechselprozesseImMesswesenStromStatusAPIApi->wimstatus: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vid** | **string**| VID key of the process. | [optional]

### Return type

[**\OpenAPI\Client\Model\InlineResponse2006**](../Model/InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
