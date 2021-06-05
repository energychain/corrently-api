# ForecastItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Epochtime** | Pointer to **int32** | Timestamps in Seconds | [optional] 
**TimeStamp** | Pointer to **int32** | Timestamp in Standard Milliseconds | [optional] 
**Gsi** | Pointer to **int32** | Actual GreenPowerIndex for given Timestamp (between 0-100) | [optional] 
**Scaled** | Pointer to **bool** | Indicates if scaling is in operation to predict values | [optional] 
**Sci** | Pointer to **int32** | Subindex just for Solar Energy | [optional] 
**Energyprice** | Pointer to **float32** | Local/regional energyprice modification (cent per kWh or euro per MWh). | [optional] 
**Co2GOekostrom** | Pointer to **int32** | CO2 footprint in Gramm per kwh (only Green Power) | [optional] 

## Methods

### NewForecastItem

`func NewForecastItem() *ForecastItem`

NewForecastItem instantiates a new ForecastItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewForecastItemWithDefaults

`func NewForecastItemWithDefaults() *ForecastItem`

NewForecastItemWithDefaults instantiates a new ForecastItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEpochtime

`func (o *ForecastItem) GetEpochtime() int32`

GetEpochtime returns the Epochtime field if non-nil, zero value otherwise.

### GetEpochtimeOk

`func (o *ForecastItem) GetEpochtimeOk() (*int32, bool)`

GetEpochtimeOk returns a tuple with the Epochtime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEpochtime

`func (o *ForecastItem) SetEpochtime(v int32)`

SetEpochtime sets Epochtime field to given value.

### HasEpochtime

`func (o *ForecastItem) HasEpochtime() bool`

HasEpochtime returns a boolean if a field has been set.

### GetTimeStamp

`func (o *ForecastItem) GetTimeStamp() int32`

GetTimeStamp returns the TimeStamp field if non-nil, zero value otherwise.

### GetTimeStampOk

`func (o *ForecastItem) GetTimeStampOk() (*int32, bool)`

GetTimeStampOk returns a tuple with the TimeStamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeStamp

`func (o *ForecastItem) SetTimeStamp(v int32)`

SetTimeStamp sets TimeStamp field to given value.

### HasTimeStamp

`func (o *ForecastItem) HasTimeStamp() bool`

HasTimeStamp returns a boolean if a field has been set.

### GetGsi

`func (o *ForecastItem) GetGsi() int32`

GetGsi returns the Gsi field if non-nil, zero value otherwise.

### GetGsiOk

`func (o *ForecastItem) GetGsiOk() (*int32, bool)`

GetGsiOk returns a tuple with the Gsi field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGsi

`func (o *ForecastItem) SetGsi(v int32)`

SetGsi sets Gsi field to given value.

### HasGsi

`func (o *ForecastItem) HasGsi() bool`

HasGsi returns a boolean if a field has been set.

### GetScaled

`func (o *ForecastItem) GetScaled() bool`

GetScaled returns the Scaled field if non-nil, zero value otherwise.

### GetScaledOk

`func (o *ForecastItem) GetScaledOk() (*bool, bool)`

GetScaledOk returns a tuple with the Scaled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScaled

`func (o *ForecastItem) SetScaled(v bool)`

SetScaled sets Scaled field to given value.

### HasScaled

`func (o *ForecastItem) HasScaled() bool`

HasScaled returns a boolean if a field has been set.

### GetSci

`func (o *ForecastItem) GetSci() int32`

GetSci returns the Sci field if non-nil, zero value otherwise.

### GetSciOk

`func (o *ForecastItem) GetSciOk() (*int32, bool)`

GetSciOk returns a tuple with the Sci field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSci

`func (o *ForecastItem) SetSci(v int32)`

SetSci sets Sci field to given value.

### HasSci

`func (o *ForecastItem) HasSci() bool`

HasSci returns a boolean if a field has been set.

### GetEnergyprice

`func (o *ForecastItem) GetEnergyprice() float32`

GetEnergyprice returns the Energyprice field if non-nil, zero value otherwise.

### GetEnergypriceOk

`func (o *ForecastItem) GetEnergypriceOk() (*float32, bool)`

GetEnergypriceOk returns a tuple with the Energyprice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnergyprice

`func (o *ForecastItem) SetEnergyprice(v float32)`

SetEnergyprice sets Energyprice field to given value.

### HasEnergyprice

`func (o *ForecastItem) HasEnergyprice() bool`

HasEnergyprice returns a boolean if a field has been set.

### GetCo2GOekostrom

`func (o *ForecastItem) GetCo2GOekostrom() int32`

GetCo2GOekostrom returns the Co2GOekostrom field if non-nil, zero value otherwise.

### GetCo2GOekostromOk

`func (o *ForecastItem) GetCo2GOekostromOk() (*int32, bool)`

GetCo2GOekostromOk returns a tuple with the Co2GOekostrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCo2GOekostrom

`func (o *ForecastItem) SetCo2GOekostrom(v int32)`

SetCo2GOekostrom sets Co2GOekostrom field to given value.

### HasCo2GOekostrom

`func (o *ForecastItem) HasCo2GOekostrom() bool`

HasCo2GOekostrom returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


