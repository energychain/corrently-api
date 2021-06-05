# Ommeters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MeterId** | Pointer to **string** | identifier to be used in other methods like readings or activities. | [optional] 
**ManufacturerId** | Pointer to **string** | DLMS manufacturerId | [optional] 
**Location** | Pointer to **string** | Basic address information for geo coding | [optional] 
**Type** | Pointer to **string** | Device type of the meter | [optional] 
**MeasurementType** | Pointer to **string** | Physical quantity being measured by the meter | [optional] 
**LoadProfileType** | Pointer to **string** | Metering load profile type associated with the meter | [optional] 
**ScalingFactor** | Pointer to **int32** | Factor imposed on metered current AND voltage by a transducer | [optional] 
**CurrentScalingFactor** | Pointer to **int32** | Factor imposed on metered current by a transducer | [optional] 
**VoltageScalingFactor** | Pointer to **int32** | Factor imposed on metered voltage by a transducer | [optional] 
**Meta** | Pointer to **string** | Statistical metadata for this household | [optional] 

## Methods

### NewOmmeters

`func NewOmmeters() *Ommeters`

NewOmmeters instantiates a new Ommeters object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOmmetersWithDefaults

`func NewOmmetersWithDefaults() *Ommeters`

NewOmmetersWithDefaults instantiates a new Ommeters object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMeterId

`func (o *Ommeters) GetMeterId() string`

GetMeterId returns the MeterId field if non-nil, zero value otherwise.

### GetMeterIdOk

`func (o *Ommeters) GetMeterIdOk() (*string, bool)`

GetMeterIdOk returns a tuple with the MeterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeterId

`func (o *Ommeters) SetMeterId(v string)`

SetMeterId sets MeterId field to given value.

### HasMeterId

`func (o *Ommeters) HasMeterId() bool`

HasMeterId returns a boolean if a field has been set.

### GetManufacturerId

`func (o *Ommeters) GetManufacturerId() string`

GetManufacturerId returns the ManufacturerId field if non-nil, zero value otherwise.

### GetManufacturerIdOk

`func (o *Ommeters) GetManufacturerIdOk() (*string, bool)`

GetManufacturerIdOk returns a tuple with the ManufacturerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManufacturerId

`func (o *Ommeters) SetManufacturerId(v string)`

SetManufacturerId sets ManufacturerId field to given value.

### HasManufacturerId

`func (o *Ommeters) HasManufacturerId() bool`

HasManufacturerId returns a boolean if a field has been set.

### GetLocation

`func (o *Ommeters) GetLocation() string`

GetLocation returns the Location field if non-nil, zero value otherwise.

### GetLocationOk

`func (o *Ommeters) GetLocationOk() (*string, bool)`

GetLocationOk returns a tuple with the Location field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocation

`func (o *Ommeters) SetLocation(v string)`

SetLocation sets Location field to given value.

### HasLocation

`func (o *Ommeters) HasLocation() bool`

HasLocation returns a boolean if a field has been set.

### GetType

`func (o *Ommeters) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Ommeters) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Ommeters) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Ommeters) HasType() bool`

HasType returns a boolean if a field has been set.

### GetMeasurementType

`func (o *Ommeters) GetMeasurementType() string`

GetMeasurementType returns the MeasurementType field if non-nil, zero value otherwise.

### GetMeasurementTypeOk

`func (o *Ommeters) GetMeasurementTypeOk() (*string, bool)`

GetMeasurementTypeOk returns a tuple with the MeasurementType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeasurementType

`func (o *Ommeters) SetMeasurementType(v string)`

SetMeasurementType sets MeasurementType field to given value.

### HasMeasurementType

`func (o *Ommeters) HasMeasurementType() bool`

HasMeasurementType returns a boolean if a field has been set.

### GetLoadProfileType

`func (o *Ommeters) GetLoadProfileType() string`

GetLoadProfileType returns the LoadProfileType field if non-nil, zero value otherwise.

### GetLoadProfileTypeOk

`func (o *Ommeters) GetLoadProfileTypeOk() (*string, bool)`

GetLoadProfileTypeOk returns a tuple with the LoadProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoadProfileType

`func (o *Ommeters) SetLoadProfileType(v string)`

SetLoadProfileType sets LoadProfileType field to given value.

### HasLoadProfileType

`func (o *Ommeters) HasLoadProfileType() bool`

HasLoadProfileType returns a boolean if a field has been set.

### GetScalingFactor

`func (o *Ommeters) GetScalingFactor() int32`

GetScalingFactor returns the ScalingFactor field if non-nil, zero value otherwise.

### GetScalingFactorOk

`func (o *Ommeters) GetScalingFactorOk() (*int32, bool)`

GetScalingFactorOk returns a tuple with the ScalingFactor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScalingFactor

`func (o *Ommeters) SetScalingFactor(v int32)`

SetScalingFactor sets ScalingFactor field to given value.

### HasScalingFactor

`func (o *Ommeters) HasScalingFactor() bool`

HasScalingFactor returns a boolean if a field has been set.

### GetCurrentScalingFactor

`func (o *Ommeters) GetCurrentScalingFactor() int32`

GetCurrentScalingFactor returns the CurrentScalingFactor field if non-nil, zero value otherwise.

### GetCurrentScalingFactorOk

`func (o *Ommeters) GetCurrentScalingFactorOk() (*int32, bool)`

GetCurrentScalingFactorOk returns a tuple with the CurrentScalingFactor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentScalingFactor

`func (o *Ommeters) SetCurrentScalingFactor(v int32)`

SetCurrentScalingFactor sets CurrentScalingFactor field to given value.

### HasCurrentScalingFactor

`func (o *Ommeters) HasCurrentScalingFactor() bool`

HasCurrentScalingFactor returns a boolean if a field has been set.

### GetVoltageScalingFactor

`func (o *Ommeters) GetVoltageScalingFactor() int32`

GetVoltageScalingFactor returns the VoltageScalingFactor field if non-nil, zero value otherwise.

### GetVoltageScalingFactorOk

`func (o *Ommeters) GetVoltageScalingFactorOk() (*int32, bool)`

GetVoltageScalingFactorOk returns a tuple with the VoltageScalingFactor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVoltageScalingFactor

`func (o *Ommeters) SetVoltageScalingFactor(v int32)`

SetVoltageScalingFactor sets VoltageScalingFactor field to given value.

### HasVoltageScalingFactor

`func (o *Ommeters) HasVoltageScalingFactor() bool`

HasVoltageScalingFactor returns a boolean if a field has been set.

### GetMeta

`func (o *Ommeters) GetMeta() string`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *Ommeters) GetMetaOk() (*string, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *Ommeters) SetMeta(v string)`

SetMeta sets Meta field to given value.

### HasMeta

`func (o *Ommeters) HasMeta() bool`

HasMeta returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


