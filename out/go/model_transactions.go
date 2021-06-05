/*
 * Corrently.io
 *
 * *Corrently - from italian corrente, which is energy* # Introduction The Corrently ecosystem gets maintained by [STROMDAO GmbH](https://www.stromdao.de/) to support green energy services for prosumers, grid operators, regulators, integrators or any other party with an emerging need of consensus driven management. As the [energy product Corrently](https://www.corrently.de/) got first launched in Germany parts of this documentation provide simple translations for better understanding. 
 *
 * API version: 2.0.0
 * Contact: dev@stromdao.com
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// Transactions struct for Transactions
type Transactions struct {
	// Cross signed timestamp of transaction
	TimeStamp *int32 `json:"timeStamp,omitempty"`
	// Unique hash of this transaction as provided by counter signing party
	Txid *string `json:"txid,omitempty"`
	// Pretty print of counter signing party
	Cashier *string `json:"cashier,omitempty"`
	// Type of transaction per cashier implementation and schema
	Txtype *string `json:"txtype,omitempty"`
	// Amount covered by transaction
	Value *int32 `json:"value,omitempty"`
}

// NewTransactions instantiates a new Transactions object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTransactions() *Transactions {
	this := Transactions{}
	return &this
}

// NewTransactionsWithDefaults instantiates a new Transactions object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTransactionsWithDefaults() *Transactions {
	this := Transactions{}
	return &this
}

// GetTimeStamp returns the TimeStamp field value if set, zero value otherwise.
func (o *Transactions) GetTimeStamp() int32 {
	if o == nil || o.TimeStamp == nil {
		var ret int32
		return ret
	}
	return *o.TimeStamp
}

// GetTimeStampOk returns a tuple with the TimeStamp field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Transactions) GetTimeStampOk() (*int32, bool) {
	if o == nil || o.TimeStamp == nil {
		return nil, false
	}
	return o.TimeStamp, true
}

// HasTimeStamp returns a boolean if a field has been set.
func (o *Transactions) HasTimeStamp() bool {
	if o != nil && o.TimeStamp != nil {
		return true
	}

	return false
}

// SetTimeStamp gets a reference to the given int32 and assigns it to the TimeStamp field.
func (o *Transactions) SetTimeStamp(v int32) {
	o.TimeStamp = &v
}

// GetTxid returns the Txid field value if set, zero value otherwise.
func (o *Transactions) GetTxid() string {
	if o == nil || o.Txid == nil {
		var ret string
		return ret
	}
	return *o.Txid
}

// GetTxidOk returns a tuple with the Txid field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Transactions) GetTxidOk() (*string, bool) {
	if o == nil || o.Txid == nil {
		return nil, false
	}
	return o.Txid, true
}

// HasTxid returns a boolean if a field has been set.
func (o *Transactions) HasTxid() bool {
	if o != nil && o.Txid != nil {
		return true
	}

	return false
}

// SetTxid gets a reference to the given string and assigns it to the Txid field.
func (o *Transactions) SetTxid(v string) {
	o.Txid = &v
}

// GetCashier returns the Cashier field value if set, zero value otherwise.
func (o *Transactions) GetCashier() string {
	if o == nil || o.Cashier == nil {
		var ret string
		return ret
	}
	return *o.Cashier
}

// GetCashierOk returns a tuple with the Cashier field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Transactions) GetCashierOk() (*string, bool) {
	if o == nil || o.Cashier == nil {
		return nil, false
	}
	return o.Cashier, true
}

// HasCashier returns a boolean if a field has been set.
func (o *Transactions) HasCashier() bool {
	if o != nil && o.Cashier != nil {
		return true
	}

	return false
}

// SetCashier gets a reference to the given string and assigns it to the Cashier field.
func (o *Transactions) SetCashier(v string) {
	o.Cashier = &v
}

// GetTxtype returns the Txtype field value if set, zero value otherwise.
func (o *Transactions) GetTxtype() string {
	if o == nil || o.Txtype == nil {
		var ret string
		return ret
	}
	return *o.Txtype
}

// GetTxtypeOk returns a tuple with the Txtype field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Transactions) GetTxtypeOk() (*string, bool) {
	if o == nil || o.Txtype == nil {
		return nil, false
	}
	return o.Txtype, true
}

// HasTxtype returns a boolean if a field has been set.
func (o *Transactions) HasTxtype() bool {
	if o != nil && o.Txtype != nil {
		return true
	}

	return false
}

// SetTxtype gets a reference to the given string and assigns it to the Txtype field.
func (o *Transactions) SetTxtype(v string) {
	o.Txtype = &v
}

// GetValue returns the Value field value if set, zero value otherwise.
func (o *Transactions) GetValue() int32 {
	if o == nil || o.Value == nil {
		var ret int32
		return ret
	}
	return *o.Value
}

// GetValueOk returns a tuple with the Value field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Transactions) GetValueOk() (*int32, bool) {
	if o == nil || o.Value == nil {
		return nil, false
	}
	return o.Value, true
}

// HasValue returns a boolean if a field has been set.
func (o *Transactions) HasValue() bool {
	if o != nil && o.Value != nil {
		return true
	}

	return false
}

// SetValue gets a reference to the given int32 and assigns it to the Value field.
func (o *Transactions) SetValue(v int32) {
	o.Value = &v
}

func (o Transactions) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.TimeStamp != nil {
		toSerialize["timeStamp"] = o.TimeStamp
	}
	if o.Txid != nil {
		toSerialize["txid"] = o.Txid
	}
	if o.Cashier != nil {
		toSerialize["cashier"] = o.Cashier
	}
	if o.Txtype != nil {
		toSerialize["txtype"] = o.Txtype
	}
	if o.Value != nil {
		toSerialize["value"] = o.Value
	}
	return json.Marshal(toSerialize)
}

type NullableTransactions struct {
	value *Transactions
	isSet bool
}

func (v NullableTransactions) Get() *Transactions {
	return v.value
}

func (v *NullableTransactions) Set(val *Transactions) {
	v.value = val
	v.isSet = true
}

func (v NullableTransactions) IsSet() bool {
	return v.isSet
}

func (v *NullableTransactions) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTransactions(val *Transactions) *NullableTransactions {
	return &NullableTransactions{value: val, isSet: true}
}

func (v NullableTransactions) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTransactions) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


