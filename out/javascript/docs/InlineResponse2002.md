# CorrentlyIo.InlineResponse2002

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**premix** | **Object** | Green Energy Mix prior to dispatch of given city | [optional] 
**postmix** | **Object** | Green Energy Mix after dispatch of given city | [optional] 
**dispatchFrom** | [**[DispatchLocation]**](DispatchLocation.md) | List of current sources of green energy (into requested location) | [optional] 
**dispatchTarget** | [**[DispatchLocation]**](DispatchLocation.md) | List of current targets of green energy (out of requested location) | [optional] 
**timeframe** | [**InlineResponse2002Timeframe**](InlineResponse2002Timeframe.md) |  | [optional] 
**avgDistanceKm** | **Number** | Averaged geospatial distance in kilometers between energy generation and usage at requested location. | [optional] 


