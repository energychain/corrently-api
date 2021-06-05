# Balance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Soll** | Pointer to **int32** | Sum due by account | [optional] 
**Haben** | Pointer to **int32** | Sum owned by account | [optional] 
**Balance** | Pointer to **int32** | Sum owned - sum due by account | [optional] 
**Txs** | Pointer to [**[]Transactions**](Transactions.md) |  | [optional] 
**Variation** | Pointer to **string** | Type of subbalance (sub account) | [optional] 

## Methods

### NewBalance

`func NewBalance() *Balance`

NewBalance instantiates a new Balance object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBalanceWithDefaults

`func NewBalanceWithDefaults() *Balance`

NewBalanceWithDefaults instantiates a new Balance object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSoll

`func (o *Balance) GetSoll() int32`

GetSoll returns the Soll field if non-nil, zero value otherwise.

### GetSollOk

`func (o *Balance) GetSollOk() (*int32, bool)`

GetSollOk returns a tuple with the Soll field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSoll

`func (o *Balance) SetSoll(v int32)`

SetSoll sets Soll field to given value.

### HasSoll

`func (o *Balance) HasSoll() bool`

HasSoll returns a boolean if a field has been set.

### GetHaben

`func (o *Balance) GetHaben() int32`

GetHaben returns the Haben field if non-nil, zero value otherwise.

### GetHabenOk

`func (o *Balance) GetHabenOk() (*int32, bool)`

GetHabenOk returns a tuple with the Haben field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHaben

`func (o *Balance) SetHaben(v int32)`

SetHaben sets Haben field to given value.

### HasHaben

`func (o *Balance) HasHaben() bool`

HasHaben returns a boolean if a field has been set.

### GetBalance

`func (o *Balance) GetBalance() int32`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *Balance) GetBalanceOk() (*int32, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *Balance) SetBalance(v int32)`

SetBalance sets Balance field to given value.

### HasBalance

`func (o *Balance) HasBalance() bool`

HasBalance returns a boolean if a field has been set.

### GetTxs

`func (o *Balance) GetTxs() []Transactions`

GetTxs returns the Txs field if non-nil, zero value otherwise.

### GetTxsOk

`func (o *Balance) GetTxsOk() (*[]Transactions, bool)`

GetTxsOk returns a tuple with the Txs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTxs

`func (o *Balance) SetTxs(v []Transactions)`

SetTxs sets Txs field to given value.

### HasTxs

`func (o *Balance) HasTxs() bool`

HasTxs returns a boolean if a field has been set.

### GetVariation

`func (o *Balance) GetVariation() string`

GetVariation returns the Variation field if non-nil, zero value otherwise.

### GetVariationOk

`func (o *Balance) GetVariationOk() (*string, bool)`

GetVariationOk returns a tuple with the Variation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariation

`func (o *Balance) SetVariation(v string)`

SetVariation sets Variation field to given value.

### HasVariation

`func (o *Balance) HasVariation() bool`

HasVariation returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


