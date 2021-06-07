# CorrentlyIo.WiMWechselprozesseImMesswesenStromStatusAPIApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wimstatus**](WiMWechselprozesseImMesswesenStromStatusAPIApi.md#wimstatus) | **GET** /wim/status | WiM Proess Informtion



## wimstatus

> InlineResponse2006 wimstatus(opts)

WiM Proess Informtion

Access to status information of an existing metering change and allocation process. 

### Example

```javascript
import CorrentlyIo from 'corrently_io';

let apiInstance = new CorrentlyIo.WiMWechselprozesseImMesswesenStromStatusAPIApi();
let opts = {
  'vid': "vid_example" // String | VID key of the process.
};
apiInstance.wimstatus(opts, (error, data, response) => {
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
 **vid** | **String**| VID key of the process. | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

