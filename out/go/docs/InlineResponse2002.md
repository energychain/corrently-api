# InlineResponse2002

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Premix** | Pointer to **map[string]interface{}** | Green Energy Mix prior to dispatch of given city | [optional] 
**Postmix** | Pointer to **map[string]interface{}** | Green Energy Mix after dispatch of given city | [optional] 
**DispatchFrom** | Pointer to [**[]DispatchLocation**](DispatchLocation.md) | List of current sources of green energy (into requested location) | [optional] 
**DispatchTarget** | Pointer to [**[]DispatchLocation**](DispatchLocation.md) | List of current targets of green energy (out of requested location) | [optional] 
**Timeframe** | Pointer to [**InlineResponse2002Timeframe**](InlineResponse2002Timeframe.md) |  | [optional] 
**AvgDistanceKm** | Pointer to **float32** | Averaged geospatial distance in kilometers between energy generation and usage at requested location. | [optional] 

## Methods

### NewInlineResponse2002

`func NewInlineResponse2002() *InlineResponse2002`

NewInlineResponse2002 instantiates a new InlineResponse2002 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInlineResponse2002WithDefaults

`func NewInlineResponse2002WithDefaults() *InlineResponse2002`

NewInlineResponse2002WithDefaults instantiates a new InlineResponse2002 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPremix

`func (o *InlineResponse2002) GetPremix() map[string]interface{}`

GetPremix returns the Premix field if non-nil, zero value otherwise.

### GetPremixOk

`func (o *InlineResponse2002) GetPremixOk() (*map[string]interface{}, bool)`

GetPremixOk returns a tuple with the Premix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPremix

`func (o *InlineResponse2002) SetPremix(v map[string]interface{})`

SetPremix sets Premix field to given value.

### HasPremix

`func (o *InlineResponse2002) HasPremix() bool`

HasPremix returns a boolean if a field has been set.

### GetPostmix

`func (o *InlineResponse2002) GetPostmix() map[string]interface{}`

GetPostmix returns the Postmix field if non-nil, zero value otherwise.

### GetPostmixOk

`func (o *InlineResponse2002) GetPostmixOk() (*map[string]interface{}, bool)`

GetPostmixOk returns a tuple with the Postmix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostmix

`func (o *InlineResponse2002) SetPostmix(v map[string]interface{})`

SetPostmix sets Postmix field to given value.

### HasPostmix

`func (o *InlineResponse2002) HasPostmix() bool`

HasPostmix returns a boolean if a field has been set.

### GetDispatchFrom

`func (o *InlineResponse2002) GetDispatchFrom() []DispatchLocation`

GetDispatchFrom returns the DispatchFrom field if non-nil, zero value otherwise.

### GetDispatchFromOk

`func (o *InlineResponse2002) GetDispatchFromOk() (*[]DispatchLocation, bool)`

GetDispatchFromOk returns a tuple with the DispatchFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDispatchFrom

`func (o *InlineResponse2002) SetDispatchFrom(v []DispatchLocation)`

SetDispatchFrom sets DispatchFrom field to given value.

### HasDispatchFrom

`func (o *InlineResponse2002) HasDispatchFrom() bool`

HasDispatchFrom returns a boolean if a field has been set.

### GetDispatchTarget

`func (o *InlineResponse2002) GetDispatchTarget() []DispatchLocation`

GetDispatchTarget returns the DispatchTarget field if non-nil, zero value otherwise.

### GetDispatchTargetOk

`func (o *InlineResponse2002) GetDispatchTargetOk() (*[]DispatchLocation, bool)`

GetDispatchTargetOk returns a tuple with the DispatchTarget field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDispatchTarget

`func (o *InlineResponse2002) SetDispatchTarget(v []DispatchLocation)`

SetDispatchTarget sets DispatchTarget field to given value.

### HasDispatchTarget

`func (o *InlineResponse2002) HasDispatchTarget() bool`

HasDispatchTarget returns a boolean if a field has been set.

### GetTimeframe

`func (o *InlineResponse2002) GetTimeframe() InlineResponse2002Timeframe`

GetTimeframe returns the Timeframe field if non-nil, zero value otherwise.

### GetTimeframeOk

`func (o *InlineResponse2002) GetTimeframeOk() (*InlineResponse2002Timeframe, bool)`

GetTimeframeOk returns a tuple with the Timeframe field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeframe

`func (o *InlineResponse2002) SetTimeframe(v InlineResponse2002Timeframe)`

SetTimeframe sets Timeframe field to given value.

### HasTimeframe

`func (o *InlineResponse2002) HasTimeframe() bool`

HasTimeframe returns a boolean if a field has been set.

### GetAvgDistanceKm

`func (o *InlineResponse2002) GetAvgDistanceKm() float32`

GetAvgDistanceKm returns the AvgDistanceKm field if non-nil, zero value otherwise.

### GetAvgDistanceKmOk

`func (o *InlineResponse2002) GetAvgDistanceKmOk() (*float32, bool)`

GetAvgDistanceKmOk returns a tuple with the AvgDistanceKm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvgDistanceKm

`func (o *InlineResponse2002) SetAvgDistanceKm(v float32)`

SetAvgDistanceKm sets AvgDistanceKm field to given value.

### HasAvgDistanceKm

`func (o *InlineResponse2002) HasAvgDistanceKm() bool`

HasAvgDistanceKm returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


