# Componentsh0

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Sum** | Pointer to **float64** | Total sum in Euro for this price component. | [optional] 
**Describtion** | Pointer to **string** | What is this price component about | [optional] 
**Mutlityplier** | Pointer to **string** | Frequency/dependency of component | [optional] 
**Per** | Pointer to **float64** | Single unit price multiyplier is based on | [optional] 
**Components** | Pointer to [**[]Componentsh0**](Componentsh0.md) | Sub components of this price | [optional] 

## Methods

### NewComponentsh0

`func NewComponentsh0() *Componentsh0`

NewComponentsh0 instantiates a new Componentsh0 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewComponentsh0WithDefaults

`func NewComponentsh0WithDefaults() *Componentsh0`

NewComponentsh0WithDefaults instantiates a new Componentsh0 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSum

`func (o *Componentsh0) GetSum() float64`

GetSum returns the Sum field if non-nil, zero value otherwise.

### GetSumOk

`func (o *Componentsh0) GetSumOk() (*float64, bool)`

GetSumOk returns a tuple with the Sum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSum

`func (o *Componentsh0) SetSum(v float64)`

SetSum sets Sum field to given value.

### HasSum

`func (o *Componentsh0) HasSum() bool`

HasSum returns a boolean if a field has been set.

### GetDescribtion

`func (o *Componentsh0) GetDescribtion() string`

GetDescribtion returns the Describtion field if non-nil, zero value otherwise.

### GetDescribtionOk

`func (o *Componentsh0) GetDescribtionOk() (*string, bool)`

GetDescribtionOk returns a tuple with the Describtion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescribtion

`func (o *Componentsh0) SetDescribtion(v string)`

SetDescribtion sets Describtion field to given value.

### HasDescribtion

`func (o *Componentsh0) HasDescribtion() bool`

HasDescribtion returns a boolean if a field has been set.

### GetMutlityplier

`func (o *Componentsh0) GetMutlityplier() string`

GetMutlityplier returns the Mutlityplier field if non-nil, zero value otherwise.

### GetMutlityplierOk

`func (o *Componentsh0) GetMutlityplierOk() (*string, bool)`

GetMutlityplierOk returns a tuple with the Mutlityplier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMutlityplier

`func (o *Componentsh0) SetMutlityplier(v string)`

SetMutlityplier sets Mutlityplier field to given value.

### HasMutlityplier

`func (o *Componentsh0) HasMutlityplier() bool`

HasMutlityplier returns a boolean if a field has been set.

### GetPer

`func (o *Componentsh0) GetPer() float64`

GetPer returns the Per field if non-nil, zero value otherwise.

### GetPerOk

`func (o *Componentsh0) GetPerOk() (*float64, bool)`

GetPerOk returns a tuple with the Per field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPer

`func (o *Componentsh0) SetPer(v float64)`

SetPer sets Per field to given value.

### HasPer

`func (o *Componentsh0) HasPer() bool`

HasPer returns a boolean if a field has been set.

### GetComponents

`func (o *Componentsh0) GetComponents() []Componentsh0`

GetComponents returns the Components field if non-nil, zero value otherwise.

### GetComponentsOk

`func (o *Componentsh0) GetComponentsOk() (*[]Componentsh0, bool)`

GetComponentsOk returns a tuple with the Components field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponents

`func (o *Componentsh0) SetComponents(v []Componentsh0)`

SetComponents sets Components field to given value.

### HasComponents

`func (o *Componentsh0) HasComponents() bool`

HasComponents returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


