# OpenAPI\Client\EaseeApi

All URIs are relative to https://api.corrently.io/v2.0.

Method | HTTP request | Description
------------- | ------------- | -------------
[**easeeSessions()**](EaseeApi.md#easeeSessions) | **GET** /alternative/easee/lastSessions | Returns lastSession info for all easee wallboxes (chargers) given user has access to.


## `easeeSessions()`

```php
easeeSessions($username, $password): \OpenAPI\Client\Model\EaseeCharger[]
```

Returns lastSession info for all easee wallboxes (chargers) given user has access to.

Refer to easee.cloud API for details.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\EaseeApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$username = 'username_example'; // string | Username as used on easy.cloud
$password = 'password_example'; // string | Password as used on easy.cloud

try {
    $result = $apiInstance->easeeSessions($username, $password);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EaseeApi->easeeSessions: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **string**| Username as used on easy.cloud | [optional]
 **password** | **string**| Password as used on easy.cloud | [optional]

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
