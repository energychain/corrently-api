/*
 * Corrently.io
 *
 * *Corrently - from italian corrente, which is energy* # Introduction The Corrently ecosystem gets maintained by [STROMDAO GmbH](https://www.stromdao.de/) to support green energy services for prosumers, grid operators, regulators, integrators or any other party with an emerging need of consensus driven management. As the [energy product Corrently](https://www.corrently.de/) got first launched in Germany parts of this documentation provide simple translations for better understanding. [Released SKDs for Download](https://github.com/energychain/corrently-api/releases) 
 *
 * API version: 2.0.0
 * Contact: dev@stromdao.com
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// Balance struct for Balance
type Balance struct {
	// Sum due by account
	Soll *int32 `json:"soll,omitempty"`
	// Sum owned by account
	Haben *int32 `json:"haben,omitempty"`
	// Sum owned - sum due by account
	Balance *int32 `json:"balance,omitempty"`
	Txs *[]Transactions `json:"txs,omitempty"`
	// Type of subbalance (sub account)
	Variation *string `json:"variation,omitempty"`
}

// NewBalance instantiates a new Balance object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBalance() *Balance {
	this := Balance{}
	return &this
}

// NewBalanceWithDefaults instantiates a new Balance object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBalanceWithDefaults() *Balance {
	this := Balance{}
	return &this
}

// GetSoll returns the Soll field value if set, zero value otherwise.
func (o *Balance) GetSoll() int32 {
	if o == nil || o.Soll == nil {
		var ret int32
		return ret
	}
	return *o.Soll
}

// GetSollOk returns a tuple with the Soll field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Balance) GetSollOk() (*int32, bool) {
	if o == nil || o.Soll == nil {
		return nil, false
	}
	return o.Soll, true
}

// HasSoll returns a boolean if a field has been set.
func (o *Balance) HasSoll() bool {
	if o != nil && o.Soll != nil {
		return true
	}

	return false
}

// SetSoll gets a reference to the given int32 and assigns it to the Soll field.
func (o *Balance) SetSoll(v int32) {
	o.Soll = &v
}

// GetHaben returns the Haben field value if set, zero value otherwise.
func (o *Balance) GetHaben() int32 {
	if o == nil || o.Haben == nil {
		var ret int32
		return ret
	}
	return *o.Haben
}

// GetHabenOk returns a tuple with the Haben field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Balance) GetHabenOk() (*int32, bool) {
	if o == nil || o.Haben == nil {
		return nil, false
	}
	return o.Haben, true
}

// HasHaben returns a boolean if a field has been set.
func (o *Balance) HasHaben() bool {
	if o != nil && o.Haben != nil {
		return true
	}

	return false
}

// SetHaben gets a reference to the given int32 and assigns it to the Haben field.
func (o *Balance) SetHaben(v int32) {
	o.Haben = &v
}

// GetBalance returns the Balance field value if set, zero value otherwise.
func (o *Balance) GetBalance() int32 {
	if o == nil || o.Balance == nil {
		var ret int32
		return ret
	}
	return *o.Balance
}

// GetBalanceOk returns a tuple with the Balance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Balance) GetBalanceOk() (*int32, bool) {
	if o == nil || o.Balance == nil {
		return nil, false
	}
	return o.Balance, true
}

// HasBalance returns a boolean if a field has been set.
func (o *Balance) HasBalance() bool {
	if o != nil && o.Balance != nil {
		return true
	}

	return false
}

// SetBalance gets a reference to the given int32 and assigns it to the Balance field.
func (o *Balance) SetBalance(v int32) {
	o.Balance = &v
}

// GetTxs returns the Txs field value if set, zero value otherwise.
func (o *Balance) GetTxs() []Transactions {
	if o == nil || o.Txs == nil {
		var ret []Transactions
		return ret
	}
	return *o.Txs
}

// GetTxsOk returns a tuple with the Txs field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Balance) GetTxsOk() (*[]Transactions, bool) {
	if o == nil || o.Txs == nil {
		return nil, false
	}
	return o.Txs, true
}

// HasTxs returns a boolean if a field has been set.
func (o *Balance) HasTxs() bool {
	if o != nil && o.Txs != nil {
		return true
	}

	return false
}

// SetTxs gets a reference to the given []Transactions and assigns it to the Txs field.
func (o *Balance) SetTxs(v []Transactions) {
	o.Txs = &v
}

// GetVariation returns the Variation field value if set, zero value otherwise.
func (o *Balance) GetVariation() string {
	if o == nil || o.Variation == nil {
		var ret string
		return ret
	}
	return *o.Variation
}

// GetVariationOk returns a tuple with the Variation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Balance) GetVariationOk() (*string, bool) {
	if o == nil || o.Variation == nil {
		return nil, false
	}
	return o.Variation, true
}

// HasVariation returns a boolean if a field has been set.
func (o *Balance) HasVariation() bool {
	if o != nil && o.Variation != nil {
		return true
	}

	return false
}

// SetVariation gets a reference to the given string and assigns it to the Variation field.
func (o *Balance) SetVariation(v string) {
	o.Variation = &v
}

func (o Balance) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Soll != nil {
		toSerialize["soll"] = o.Soll
	}
	if o.Haben != nil {
		toSerialize["haben"] = o.Haben
	}
	if o.Balance != nil {
		toSerialize["balance"] = o.Balance
	}
	if o.Txs != nil {
		toSerialize["txs"] = o.Txs
	}
	if o.Variation != nil {
		toSerialize["variation"] = o.Variation
	}
	return json.Marshal(toSerialize)
}

type NullableBalance struct {
	value *Balance
	isSet bool
}

func (v NullableBalance) Get() *Balance {
	return v.value
}

func (v *NullableBalance) Set(val *Balance) {
	v.value = val
	v.isSet = true
}

func (v NullableBalance) IsSet() bool {
	return v.isSet
}

func (v *NullableBalance) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBalance(val *Balance) *NullableBalance {
	return &NullableBalance{value: val, isSet: true}
}

func (v NullableBalance) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBalance) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


