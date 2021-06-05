# DispatchLocation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Energy** | Pointer to **float32** | Percentage of energy | [optional] 
**Location** | Pointer to **map[string]interface{}** | GeoJSON encoded location of target or source of green energy. | [optional] 

## Methods

### NewDispatchLocation

`func NewDispatchLocation() *DispatchLocation`

NewDispatchLocation instantiates a new DispatchLocation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDispatchLocationWithDefaults

`func NewDispatchLocationWithDefaults() *DispatchLocation`

NewDispatchLocationWithDefaults instantiates a new DispatchLocation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnergy

`func (o *DispatchLocation) GetEnergy() float32`

GetEnergy returns the Energy field if non-nil, zero value otherwise.

### GetEnergyOk

`func (o *DispatchLocation) GetEnergyOk() (*float32, bool)`

GetEnergyOk returns a tuple with the Energy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnergy

`func (o *DispatchLocation) SetEnergy(v float32)`

SetEnergy sets Energy field to given value.

### HasEnergy

`func (o *DispatchLocation) HasEnergy() bool`

HasEnergy returns a boolean if a field has been set.

### GetLocation

`func (o *DispatchLocation) GetLocation() map[string]interface{}`

GetLocation returns the Location field if non-nil, zero value otherwise.

### GetLocationOk

`func (o *DispatchLocation) GetLocationOk() (*map[string]interface{}, bool)`

GetLocationOk returns a tuple with the Location field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocation

`func (o *DispatchLocation) SetLocation(v map[string]interface{})`

SetLocation sets Location field to given value.

### HasLocation

`func (o *DispatchLocation) HasLocation() bool`

HasLocation returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


