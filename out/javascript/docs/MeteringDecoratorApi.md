# CorrentlyIo.MeteringDecoratorApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**meteringGet**](MeteringDecoratorApi.md#meteringGet) | **GET** /metering/reading | Meter Reading
[**meteringPost**](MeteringDecoratorApi.md#meteringPost) | **POST** /metering/reading | Meter Reading



## meteringGet

> InlineResponse2004 meteringGet(opts)

Meter Reading

Retrieves a metered reading using account (Stromkonto). 

### Example

```javascript
import CorrentlyIo from 'corrently_io';

let apiInstance = new CorrentlyIo.MeteringDecoratorApi();
let opts = {
  'account': "account_example" // String | Account/Address (Stromkonto) to retrieve reading for.
};
apiInstance.meteringGet(opts, (error, data, response) => {
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
 **account** | **String**| Account/Address (Stromkonto) to retrieve reading for. | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## meteringPost

> InlineResponse2005 meteringPost(inlineObject3)

Meter Reading

Post meter reading and get it decorated. Best practice is to first create a new Stromkonto with the register method and choose a nice secret to protect updates. Now regularly send updates to get readings (consumption) split into green power (1.8.1) and grey power (1.8.2). 

### Example

```javascript
import CorrentlyIo from 'corrently_io';

let apiInstance = new CorrentlyIo.MeteringDecoratorApi();
let inlineObject3 = new CorrentlyIo.InlineObject3(); // InlineObject3 | 
apiInstance.meteringPost(inlineObject3, (error, data, response) => {
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
 **inlineObject3** | [**InlineObject3**](InlineObject3.md)|  | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

