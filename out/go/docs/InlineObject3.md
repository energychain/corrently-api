# InlineObject3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Account** | Pointer to **string** | Stromkonto account (address) associated with this metering. | [optional] 
**Secret** | Pointer to **string** | Some private password you might choose on first update. However you need to use the same secret on every further posts. | [optional] 
**Var180** | Pointer to **int32** | Meter Reading (prefered in Wh) | [optional] 
**Value** | Pointer to **int32** | Alias for 1.8.0 | [optional] 
**Energy** | Pointer to **int32** | Alias for 1.8.0 | [optional] 
**Zip** | Pointer to **string** | Zipcode (Postleitzahl) of metered location | [optional] 

## Methods

### NewInlineObject3

`func NewInlineObject3() *InlineObject3`

NewInlineObject3 instantiates a new InlineObject3 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInlineObject3WithDefaults

`func NewInlineObject3WithDefaults() *InlineObject3`

NewInlineObject3WithDefaults instantiates a new InlineObject3 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccount

`func (o *InlineObject3) GetAccount() string`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *InlineObject3) GetAccountOk() (*string, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *InlineObject3) SetAccount(v string)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *InlineObject3) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetSecret

`func (o *InlineObject3) GetSecret() string`

GetSecret returns the Secret field if non-nil, zero value otherwise.

### GetSecretOk

`func (o *InlineObject3) GetSecretOk() (*string, bool)`

GetSecretOk returns a tuple with the Secret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecret

`func (o *InlineObject3) SetSecret(v string)`

SetSecret sets Secret field to given value.

### HasSecret

`func (o *InlineObject3) HasSecret() bool`

HasSecret returns a boolean if a field has been set.

### GetVar180

`func (o *InlineObject3) GetVar180() int32`

GetVar180 returns the Var180 field if non-nil, zero value otherwise.

### GetVar180Ok

`func (o *InlineObject3) GetVar180Ok() (*int32, bool)`

GetVar180Ok returns a tuple with the Var180 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVar180

`func (o *InlineObject3) SetVar180(v int32)`

SetVar180 sets Var180 field to given value.

### HasVar180

`func (o *InlineObject3) HasVar180() bool`

HasVar180 returns a boolean if a field has been set.

### GetValue

`func (o *InlineObject3) GetValue() int32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *InlineObject3) GetValueOk() (*int32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *InlineObject3) SetValue(v int32)`

SetValue sets Value field to given value.

### HasValue

`func (o *InlineObject3) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetEnergy

`func (o *InlineObject3) GetEnergy() int32`

GetEnergy returns the Energy field if non-nil, zero value otherwise.

### GetEnergyOk

`func (o *InlineObject3) GetEnergyOk() (*int32, bool)`

GetEnergyOk returns a tuple with the Energy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnergy

`func (o *InlineObject3) SetEnergy(v int32)`

SetEnergy sets Energy field to given value.

### HasEnergy

`func (o *InlineObject3) HasEnergy() bool`

HasEnergy returns a boolean if a field has been set.

### GetZip

`func (o *InlineObject3) GetZip() string`

GetZip returns the Zip field if non-nil, zero value otherwise.

### GetZipOk

`func (o *InlineObject3) GetZipOk() (*string, bool)`

GetZipOk returns a tuple with the Zip field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetZip

`func (o *InlineObject3) SetZip(v string)`

SetZip sets Zip field to given value.

### HasZip

`func (o *InlineObject3) HasZip() bool`

HasZip returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


