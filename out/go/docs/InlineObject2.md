# InlineObject2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Account** | Pointer to **string** | Stromkonto account address of sender | [optional] 
**To** | Pointer to **string** | Stromkonto account address of reciever | [optional] 
**Value** | Pointer to **int32** | Amount to transfer (in Watthours for electricity, or pcs for trees) | [optional] 
**Variation** | Pointer to **string** |  | [optional] 
**Signature** | Pointer to **string** | Signature per Stromkonto setting (might be simple email confirmation link) | [optional] 

## Methods

### NewInlineObject2

`func NewInlineObject2() *InlineObject2`

NewInlineObject2 instantiates a new InlineObject2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInlineObject2WithDefaults

`func NewInlineObject2WithDefaults() *InlineObject2`

NewInlineObject2WithDefaults instantiates a new InlineObject2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccount

`func (o *InlineObject2) GetAccount() string`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *InlineObject2) GetAccountOk() (*string, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *InlineObject2) SetAccount(v string)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *InlineObject2) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetTo

`func (o *InlineObject2) GetTo() string`

GetTo returns the To field if non-nil, zero value otherwise.

### GetToOk

`func (o *InlineObject2) GetToOk() (*string, bool)`

GetToOk returns a tuple with the To field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTo

`func (o *InlineObject2) SetTo(v string)`

SetTo sets To field to given value.

### HasTo

`func (o *InlineObject2) HasTo() bool`

HasTo returns a boolean if a field has been set.

### GetValue

`func (o *InlineObject2) GetValue() int32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *InlineObject2) GetValueOk() (*int32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *InlineObject2) SetValue(v int32)`

SetValue sets Value field to given value.

### HasValue

`func (o *InlineObject2) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetVariation

`func (o *InlineObject2) GetVariation() string`

GetVariation returns the Variation field if non-nil, zero value otherwise.

### GetVariationOk

`func (o *InlineObject2) GetVariationOk() (*string, bool)`

GetVariationOk returns a tuple with the Variation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariation

`func (o *InlineObject2) SetVariation(v string)`

SetVariation sets Variation field to given value.

### HasVariation

`func (o *InlineObject2) HasVariation() bool`

HasVariation returns a boolean if a field has been set.

### GetSignature

`func (o *InlineObject2) GetSignature() string`

GetSignature returns the Signature field if non-nil, zero value otherwise.

### GetSignatureOk

`func (o *InlineObject2) GetSignatureOk() (*string, bool)`

GetSignatureOk returns a tuple with the Signature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignature

`func (o *InlineObject2) SetSignature(v string)`

SetSignature sets Signature field to given value.

### HasSignature

`func (o *InlineObject2) HasSignature() bool`

HasSignature returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


