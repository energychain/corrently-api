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

// Tariffh0 struct for Tariffh0
type Tariffh0 struct {
	// Energy price in cent per kwh. (Arbeitspreis) including all taxes and fees.
	Ap *int32 `json:"ap,omitempty"`
	// Base price in euro per montah (Grundpreis) including all taxes and fees.
	Gp *int32 `json:"gp,omitempty"`
}

// NewTariffh0 instantiates a new Tariffh0 object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTariffh0() *Tariffh0 {
	this := Tariffh0{}
	return &this
}

// NewTariffh0WithDefaults instantiates a new Tariffh0 object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTariffh0WithDefaults() *Tariffh0 {
	this := Tariffh0{}
	return &this
}

// GetAp returns the Ap field value if set, zero value otherwise.
func (o *Tariffh0) GetAp() int32 {
	if o == nil || o.Ap == nil {
		var ret int32
		return ret
	}
	return *o.Ap
}

// GetApOk returns a tuple with the Ap field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Tariffh0) GetApOk() (*int32, bool) {
	if o == nil || o.Ap == nil {
		return nil, false
	}
	return o.Ap, true
}

// HasAp returns a boolean if a field has been set.
func (o *Tariffh0) HasAp() bool {
	if o != nil && o.Ap != nil {
		return true
	}

	return false
}

// SetAp gets a reference to the given int32 and assigns it to the Ap field.
func (o *Tariffh0) SetAp(v int32) {
	o.Ap = &v
}

// GetGp returns the Gp field value if set, zero value otherwise.
func (o *Tariffh0) GetGp() int32 {
	if o == nil || o.Gp == nil {
		var ret int32
		return ret
	}
	return *o.Gp
}

// GetGpOk returns a tuple with the Gp field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Tariffh0) GetGpOk() (*int32, bool) {
	if o == nil || o.Gp == nil {
		return nil, false
	}
	return o.Gp, true
}

// HasGp returns a boolean if a field has been set.
func (o *Tariffh0) HasGp() bool {
	if o != nil && o.Gp != nil {
		return true
	}

	return false
}

// SetGp gets a reference to the given int32 and assigns it to the Gp field.
func (o *Tariffh0) SetGp(v int32) {
	o.Gp = &v
}

func (o Tariffh0) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Ap != nil {
		toSerialize["ap"] = o.Ap
	}
	if o.Gp != nil {
		toSerialize["gp"] = o.Gp
	}
	return json.Marshal(toSerialize)
}

type NullableTariffh0 struct {
	value *Tariffh0
	isSet bool
}

func (v NullableTariffh0) Get() *Tariffh0 {
	return v.value
}

func (v *NullableTariffh0) Set(val *Tariffh0) {
	v.value = val
	v.isSet = true
}

func (v NullableTariffh0) IsSet() bool {
	return v.isSet
}

func (v *NullableTariffh0) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTariffh0(val *Tariffh0) *NullableTariffh0 {
	return &NullableTariffh0{value: val, isSet: true}
}

func (v NullableTariffh0) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTariffh0) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


