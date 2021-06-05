# CorrentlyIo.SmartHomeApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gsiBesthour**](SmartHomeApi.md#gsiBesthour) | **GET** /gsi/bestHour | Get best hour (with most regional green energy) in a given timeframe.



## gsiBesthour

> Boolean gsiBesthour(opts)

Get best hour (with most regional green energy) in a given timeframe.

Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state). 

### Example

```javascript
import CorrentlyIo from 'corrently_io';

let apiInstance = new CorrentlyIo.SmartHomeApi();
let opts = {
  'zip': "zip_example", // String | Zipcode (Postleitzahl) of a city in Germany.
  'key': "key_example", // String | Any valid Stromkonto account (address).
  'timeframe': 56, // Number | Number of hours to check (default 24 hours from now).
  'hours': 56 // Number | How many hours in row do you need the device turned on?
};
apiInstance.gsiBesthour(opts, (error, data, response) => {
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
 **zip** | **String**| Zipcode (Postleitzahl) of a city in Germany. | [optional] 
 **key** | **String**| Any valid Stromkonto account (address). | [optional] 
 **timeframe** | **Number**| Number of hours to check (default 24 hours from now). | [optional] 
 **hours** | **Number**| How many hours in row do you need the device turned on? | [optional] 

### Return type

**Boolean**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

