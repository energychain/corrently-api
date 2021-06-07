# OpenAPI\Client\StromQuittungApi

All URIs are relative to https://api.corrently.io/v2.0.

Method | HTTP request | Description
------------- | ------------- | -------------
[**quittungCreate()**](StromQuittungApi.md#quittungCreate) | **POST** /quittung/create | Create a receipt for an energy delivery (only valid in Germany).


## `quittungCreate()`

```php
quittungCreate($inline_object4): string
```

Create a receipt for an energy delivery (only valid in Germany).

Creates a full featured receipt (Quittung) for an energy delivery as it appears on a charging session or similar events. Allows to embed receipt generation directly into external services.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\StromQuittungApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$inline_object4 = new \OpenAPI\Client\Model\InlineObject4(); // \OpenAPI\Client\Model\InlineObject4

try {
    $result = $apiInstance->quittungCreate($inline_object4);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling StromQuittungApi->quittungCreate: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inline_object4** | [**\OpenAPI\Client\Model\InlineObject4**](../Model/InlineObject4.md)|  |

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
