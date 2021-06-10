# CorrentlyIo.OcppApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ocppSessions**](OcppApi.md#ocppSessions) | **GET** /alternative/ocpp/lastSessions | Returns lastSession info of OCCP Cloud service for clearing in corrently ecosystem. Might be tested via [OCPP cloud simulator](https://ocpp.corrently.cloud).



## ocppSessions

> [EaseeCharger] ocppSessions()

Returns lastSession info of OCCP Cloud service for clearing in corrently ecosystem. Might be tested via [OCPP cloud simulator](https://ocpp.corrently.cloud).

Last session Info of managed EV charging stations connected to the correnty ecosystem.    

### Example

```javascript
import CorrentlyIo from 'corrently_io';

let apiInstance = new CorrentlyIo.OcppApi();
apiInstance.ocppSessions((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[EaseeCharger]**](EaseeCharger.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

