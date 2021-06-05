# Tariffh0

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ap** | Pointer to **int32** | Energy price in cent per kwh. (Arbeitspreis) including all taxes and fees. | [optional] 
**Gp** | Pointer to **int32** | Base price in euro per montah (Grundpreis) including all taxes and fees. | [optional] 

## Methods

### NewTariffh0

`func NewTariffh0() *Tariffh0`

NewTariffh0 instantiates a new Tariffh0 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTariffh0WithDefaults

`func NewTariffh0WithDefaults() *Tariffh0`

NewTariffh0WithDefaults instantiates a new Tariffh0 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAp

`func (o *Tariffh0) GetAp() int32`

GetAp returns the Ap field if non-nil, zero value otherwise.

### GetApOk

`func (o *Tariffh0) GetApOk() (*int32, bool)`

GetApOk returns a tuple with the Ap field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAp

`func (o *Tariffh0) SetAp(v int32)`

SetAp sets Ap field to given value.

### HasAp

`func (o *Tariffh0) HasAp() bool`

HasAp returns a boolean if a field has been set.

### GetGp

`func (o *Tariffh0) GetGp() int32`

GetGp returns the Gp field if non-nil, zero value otherwise.

### GetGpOk

`func (o *Tariffh0) GetGpOk() (*int32, bool)`

GetGpOk returns a tuple with the Gp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGp

`func (o *Tariffh0) SetGp(v int32)`

SetGp sets Gp field to given value.

### HasGp

`func (o *Tariffh0) HasGp() bool`

HasGp returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


