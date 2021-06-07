# CorrentlyIo.EaseeApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**easeeSessions**](EaseeApi.md#easeeSessions) | **GET** /alternative/easee/lastSessions | Returns lastSession info for all easee wallboxes (chargers) given user has access to.



## easeeSessions

> [EaseeCharger] easeeSessions(opts)

Returns lastSession info for all easee wallboxes (chargers) given user has access to.

Refer to easee.cloud API for details. 

### Example

```javascript
import CorrentlyIo from 'corrently_io';

let apiInstance = new CorrentlyIo.EaseeApi();
let opts = {
  'username': "username_example", // String | Username as used on easy.cloud
  'password': "password_example" // String | Password as used on easy.cloud
};
apiInstance.easeeSessions(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Username as used on easy.cloud | [optional] 
 **password** | **String**| Password as used on easy.cloud | [optional] 

### Return type

[**[EaseeCharger]**](EaseeCharger.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

