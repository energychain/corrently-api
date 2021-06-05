# CorrentlyIo.TariffPriceAPIApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tariffSLPH0**](TariffPriceAPIApi.md#tariffSLPH0) | **GET** /tariff/slph0 | Energy Tariff information
[**tariffcomponents**](TariffPriceAPIApi.md#tariffcomponents) | **GET** /tariff/components | Energy Tariff price components



## tariffSLPH0

> [Tariffh0] tariffSLPH0(opts)

Energy Tariff information

Provides pricing data for private households with standard load profiles (Standardlastprofil H0). 

### Example

```javascript
import CorrentlyIo from 'corrently_io';

let apiInstance = new CorrentlyIo.TariffPriceAPIApi();
let opts = {
  'zipcode': "zipcode_example" // String | Zipcode (Postzleitzahl) of a city in Germany.
};
apiInstance.tariffSLPH0(opts, (error, data, response) => {
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
 **zipcode** | **String**| Zipcode (Postzleitzahl) of a city in Germany. | [optional] 

### Return type

[**[Tariffh0]**](Tariffh0.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tariffcomponents

> Componentsh0 tariffcomponents(opts)

Energy Tariff price components

Provides insides into the different cost components of energy for a private household. Sample Request: https://api.corrently.io/v2.0/tariff/components?email&#x3D;demo%40corrently.io&amp;zip&#x3D;69168&amp;kwha&#x3D;3300 

### Example

```javascript
import CorrentlyIo from 'corrently_io';

let apiInstance = new CorrentlyIo.TariffPriceAPIApi();
let opts = {
  'zipcode': "zipcode_example", // String | Zipcode (Postzleitzahl) of a city in Germany.
  'email': "email_example", // String | Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time
  'kwha': 56, // Number | Total amount of energy in kilo-watt-hours per year. (sample 2100)
  'milliseconds': 56, // Number | If provided all results will be scaled to this timeframe
  'wh': 56 // Number | If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created.
};
apiInstance.tariffcomponents(opts, (error, data, response) => {
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
 **zipcode** | **String**| Zipcode (Postzleitzahl) of a city in Germany. | [optional] 
 **email** | **String**| Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time | [optional] 
 **kwha** | **Number**| Total amount of energy in kilo-watt-hours per year. (sample 2100) | [optional] 
 **milliseconds** | **Number**| If provided all results will be scaled to this timeframe | [optional] 
 **wh** | **Number**| If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created. | [optional] 

### Return type

[**Componentsh0**](Componentsh0.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

