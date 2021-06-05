# InlineResponse2002


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**premix** | **{str: (bool, date, datetime, dict, float, int, list, str, none_type)}** | Green Energy Mix prior to dispatch of given city | [optional] 
**postmix** | **{str: (bool, date, datetime, dict, float, int, list, str, none_type)}** | Green Energy Mix after dispatch of given city | [optional] 
**dispatch_from** | [**[DispatchLocation]**](DispatchLocation.md) | List of current sources of green energy (into requested location) | [optional] 
**dispatch_target** | [**[DispatchLocation]**](DispatchLocation.md) | List of current targets of green energy (out of requested location) | [optional] 
**timeframe** | [**InlineResponse2002Timeframe**](InlineResponse2002Timeframe.md) |  | [optional] 
**avg_distance_km** | **float** | Averaged geospatial distance in kilometers between energy generation and usage at requested location. | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


