# CorrentlyIo.StromQuittungApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quittungCreate**](StromQuittungApi.md#quittungCreate) | **POST** /quittung/create | Create a receipt for an energy delivery (only valid in Germany).



## quittungCreate

> InlineResponse2006 quittungCreate(inlineObject4)

Create a receipt for an energy delivery (only valid in Germany).

Creates a full featured receipt (Quittung) for an energy delivery as it appears on a charging session or similar events. Allows to embed receipt generation directly into external services. 

### Example

```javascript
import CorrentlyIo from 'corrently_io';

let apiInstance = new CorrentlyIo.StromQuittungApi();
let inlineObject4 = new CorrentlyIo.InlineObject4(); // InlineObject4 | 
apiInstance.quittungCreate(inlineObject4, (error, data, response) => {
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
 **inlineObject4** | [**InlineObject4**](InlineObject4.md)|  | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

