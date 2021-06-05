# # InlineResponse2002

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**premix** | **object** | Green Energy Mix prior to dispatch of given city | [optional]
**postmix** | **object** | Green Energy Mix after dispatch of given city | [optional]
**dispatch_from** | [**\OpenAPI\Client\Model\DispatchLocation[]**](DispatchLocation.md) | List of current sources of green energy (into requested location) | [optional]
**dispatch_target** | [**\OpenAPI\Client\Model\DispatchLocation[]**](DispatchLocation.md) | List of current targets of green energy (out of requested location) | [optional]
**timeframe** | [**\OpenAPI\Client\Model\InlineResponse2002Timeframe**](InlineResponse2002Timeframe.md) |  | [optional]
**avg_distance_km** | **float** | Averaged geospatial distance in kilometers between energy generation and usage at requested location. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
