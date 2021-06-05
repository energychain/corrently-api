# Transactions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TimeStamp** | Pointer to **int32** | Cross signed timestamp of transaction | [optional] 
**Txid** | Pointer to **string** | Unique hash of this transaction as provided by counter signing party | [optional] 
**Cashier** | Pointer to **string** | Pretty print of counter signing party | [optional] 
**Txtype** | Pointer to **string** | Type of transaction per cashier implementation and schema | [optional] 
**Value** | Pointer to **int32** | Amount covered by transaction | [optional] 

## Methods

### NewTransactions

`func NewTransactions() *Transactions`

NewTransactions instantiates a new Transactions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionsWithDefaults

`func NewTransactionsWithDefaults() *Transactions`

NewTransactionsWithDefaults instantiates a new Transactions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimeStamp

`func (o *Transactions) GetTimeStamp() int32`

GetTimeStamp returns the TimeStamp field if non-nil, zero value otherwise.

### GetTimeStampOk

`func (o *Transactions) GetTimeStampOk() (*int32, bool)`

GetTimeStampOk returns a tuple with the TimeStamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeStamp

`func (o *Transactions) SetTimeStamp(v int32)`

SetTimeStamp sets TimeStamp field to given value.

### HasTimeStamp

`func (o *Transactions) HasTimeStamp() bool`

HasTimeStamp returns a boolean if a field has been set.

### GetTxid

`func (o *Transactions) GetTxid() string`

GetTxid returns the Txid field if non-nil, zero value otherwise.

### GetTxidOk

`func (o *Transactions) GetTxidOk() (*string, bool)`

GetTxidOk returns a tuple with the Txid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTxid

`func (o *Transactions) SetTxid(v string)`

SetTxid sets Txid field to given value.

### HasTxid

`func (o *Transactions) HasTxid() bool`

HasTxid returns a boolean if a field has been set.

### GetCashier

`func (o *Transactions) GetCashier() string`

GetCashier returns the Cashier field if non-nil, zero value otherwise.

### GetCashierOk

`func (o *Transactions) GetCashierOk() (*string, bool)`

GetCashierOk returns a tuple with the Cashier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashier

`func (o *Transactions) SetCashier(v string)`

SetCashier sets Cashier field to given value.

### HasCashier

`func (o *Transactions) HasCashier() bool`

HasCashier returns a boolean if a field has been set.

### GetTxtype

`func (o *Transactions) GetTxtype() string`

GetTxtype returns the Txtype field if non-nil, zero value otherwise.

### GetTxtypeOk

`func (o *Transactions) GetTxtypeOk() (*string, bool)`

GetTxtypeOk returns a tuple with the Txtype field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTxtype

`func (o *Transactions) SetTxtype(v string)`

SetTxtype sets Txtype field to given value.

### HasTxtype

`func (o *Transactions) HasTxtype() bool`

HasTxtype returns a boolean if a field has been set.

### GetValue

`func (o *Transactions) GetValue() int32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Transactions) GetValueOk() (*int32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Transactions) SetValue(v int32)`

SetValue sets Value field to given value.

### HasValue

`func (o *Transactions) HasValue() bool`

HasValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


