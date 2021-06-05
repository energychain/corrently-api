# CorrentlyIo.GreenPowerIndexGrnstromIndexApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gsiBesthour**](GreenPowerIndexGrnstromIndexApi.md#gsiBesthour) | **GET** /gsi/bestHour | Get best hour (with most regional green energy) in a given timeframe.
[**gsiDispatch**](GreenPowerIndexGrnstromIndexApi.md#gsiDispatch) | **GET** /gsi/dispatch | Dispatch (Green Energy Distribution Schedule)
[**gsiMarketdata**](GreenPowerIndexGrnstromIndexApi.md#gsiMarketdata) | **GET** /gsi/marketdata | Marketdata
[**gsiPrediction**](GreenPowerIndexGrnstromIndexApi.md#gsiPrediction) | **GET** /gsi/prediction | Prediction



## gsiBesthour

> Boolean gsiBesthour(opts)

Get best hour (with most regional green energy) in a given timeframe.

Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state). 

### Example

```javascript
import CorrentlyIo from 'corrently_io';

let apiInstance = new CorrentlyIo.GreenPowerIndexGrnstromIndexApi();
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


## gsiDispatch

> InlineResponse2002 gsiDispatch(opts)

Dispatch (Green Energy Distribution Schedule)

Dispatch of green energy has two aspects to consider:   - Availability of gerneration facility (depends on weather and installed capacity)   - Demand of energy Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic). 

### Example

```javascript
import CorrentlyIo from 'corrently_io';

let apiInstance = new CorrentlyIo.GreenPowerIndexGrnstromIndexApi();
let opts = {
  'zip': "zip_example", // String | Zipcode (Postleitzahl) of a city in Germany.
  'key': "key_example" // String | Any valid Stromkonto account (address).
};
apiInstance.gsiDispatch(opts, (error, data, response) => {
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

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gsiMarketdata

> InlineResponse2003 gsiMarketdata(opts)

Marketdata

Compatible to awattar (https://api.awattar.de/v1/marketdata) API interface but data comes from GreenPowerIndex instead of EPEXSpot. 

### Example

```javascript
import CorrentlyIo from 'corrently_io';

let apiInstance = new CorrentlyIo.GreenPowerIndexGrnstromIndexApi();
let opts = {
  'zip': "zip_example" // String | Zipcode (Postleitzahl) of a city in Germany.
};
apiInstance.gsiMarketdata(opts, (error, data, response) => {
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

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gsiPrediction

> InlineResponse2001 gsiPrediction(opts)

Prediction

Retrieval the GreenPowerIndex (GrünstromIndex) for a given city (by zipcode) in Germany. 

### Example

```javascript
import CorrentlyIo from 'corrently_io';

let apiInstance = new CorrentlyIo.GreenPowerIndexGrnstromIndexApi();
let opts = {
  'zip': "zip_example", // String | Zipcode (Postleitzahl) of a city in Germany.
  'key': "key_example" // String | Any valid Stromkonto account (address).
};
apiInstance.gsiPrediction(opts, (error, data, response) => {
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

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

