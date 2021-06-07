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

// InlineObject3 struct for InlineObject3
type InlineObject3 struct {
	// Stromkonto account (address) associated with this metering.
	Account *string `json:"account,omitempty"`
	// Some private password you might choose on first update. However you need to use the same secret on every further posts.
	Secret *string `json:"secret,omitempty"`
	// Meter Reading (prefered in Wh)
	Var180 *int32 `json:"1.8.0,omitempty"`
	// Alias for 1.8.0
	Value *int32 `json:"value,omitempty"`
	// Alias for 1.8.0
	Energy *int32 `json:"energy,omitempty"`
	// Zipcode (Postleitzahl) of metered location
	Zip *string `json:"zip,omitempty"`
}

// NewInlineObject3 instantiates a new InlineObject3 object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInlineObject3() *InlineObject3 {
	this := InlineObject3{}
	return &this
}

// NewInlineObject3WithDefaults instantiates a new InlineObject3 object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInlineObject3WithDefaults() *InlineObject3 {
	this := InlineObject3{}
	return &this
}

// GetAccount returns the Account field value if set, zero value otherwise.
func (o *InlineObject3) GetAccount() string {
	if o == nil || o.Account == nil {
		var ret string
		return ret
	}
	return *o.Account
}

// GetAccountOk returns a tuple with the Account field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineObject3) GetAccountOk() (*string, bool) {
	if o == nil || o.Account == nil {
		return nil, false
	}
	return o.Account, true
}

// HasAccount returns a boolean if a field has been set.
func (o *InlineObject3) HasAccount() bool {
	if o != nil && o.Account != nil {
		return true
	}

	return false
}

// SetAccount gets a reference to the given string and assigns it to the Account field.
func (o *InlineObject3) SetAccount(v string) {
	o.Account = &v
}

// GetSecret returns the Secret field value if set, zero value otherwise.
func (o *InlineObject3) GetSecret() string {
	if o == nil || o.Secret == nil {
		var ret string
		return ret
	}
	return *o.Secret
}

// GetSecretOk returns a tuple with the Secret field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineObject3) GetSecretOk() (*string, bool) {
	if o == nil || o.Secret == nil {
		return nil, false
	}
	return o.Secret, true
}

// HasSecret returns a boolean if a field has been set.
func (o *InlineObject3) HasSecret() bool {
	if o != nil && o.Secret != nil {
		return true
	}

	return false
}

// SetSecret gets a reference to the given string and assigns it to the Secret field.
func (o *InlineObject3) SetSecret(v string) {
	o.Secret = &v
}

// GetVar180 returns the Var180 field value if set, zero value otherwise.
func (o *InlineObject3) GetVar180() int32 {
	if o == nil || o.Var180 == nil {
		var ret int32
		return ret
	}
	return *o.Var180
}

// GetVar180Ok returns a tuple with the Var180 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineObject3) GetVar180Ok() (*int32, bool) {
	if o == nil || o.Var180 == nil {
		return nil, false
	}
	return o.Var180, true
}

// HasVar180 returns a boolean if a field has been set.
func (o *InlineObject3) HasVar180() bool {
	if o != nil && o.Var180 != nil {
		return true
	}

	return false
}

// SetVar180 gets a reference to the given int32 and assigns it to the Var180 field.
func (o *InlineObject3) SetVar180(v int32) {
	o.Var180 = &v
}

// GetValue returns the Value field value if set, zero value otherwise.
func (o *InlineObject3) GetValue() int32 {
	if o == nil || o.Value == nil {
		var ret int32
		return ret
	}
	return *o.Value
}

// GetValueOk returns a tuple with the Value field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineObject3) GetValueOk() (*int32, bool) {
	if o == nil || o.Value == nil {
		return nil, false
	}
	return o.Value, true
}

// HasValue returns a boolean if a field has been set.
func (o *InlineObject3) HasValue() bool {
	if o != nil && o.Value != nil {
		return true
	}

	return false
}

// SetValue gets a reference to the given int32 and assigns it to the Value field.
func (o *InlineObject3) SetValue(v int32) {
	o.Value = &v
}

// GetEnergy returns the Energy field value if set, zero value otherwise.
func (o *InlineObject3) GetEnergy() int32 {
	if o == nil || o.Energy == nil {
		var ret int32
		return ret
	}
	return *o.Energy
}

// GetEnergyOk returns a tuple with the Energy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineObject3) GetEnergyOk() (*int32, bool) {
	if o == nil || o.Energy == nil {
		return nil, false
	}
	return o.Energy, true
}

// HasEnergy returns a boolean if a field has been set.
func (o *InlineObject3) HasEnergy() bool {
	if o != nil && o.Energy != nil {
		return true
	}

	return false
}

// SetEnergy gets a reference to the given int32 and assigns it to the Energy field.
func (o *InlineObject3) SetEnergy(v int32) {
	o.Energy = &v
}

// GetZip returns the Zip field value if set, zero value otherwise.
func (o *InlineObject3) GetZip() string {
	if o == nil || o.Zip == nil {
		var ret string
		return ret
	}
	return *o.Zip
}

// GetZipOk returns a tuple with the Zip field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineObject3) GetZipOk() (*string, bool) {
	if o == nil || o.Zip == nil {
		return nil, false
	}
	return o.Zip, true
}

// HasZip returns a boolean if a field has been set.
func (o *InlineObject3) HasZip() bool {
	if o != nil && o.Zip != nil {
		return true
	}

	return false
}

// SetZip gets a reference to the given string and assigns it to the Zip field.
func (o *InlineObject3) SetZip(v string) {
	o.Zip = &v
}

func (o InlineObject3) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Account != nil {
		toSerialize["account"] = o.Account
	}
	if o.Secret != nil {
		toSerialize["secret"] = o.Secret
	}
	if o.Var180 != nil {
		toSerialize["1.8.0"] = o.Var180
	}
	if o.Value != nil {
		toSerialize["value"] = o.Value
	}
	if o.Energy != nil {
		toSerialize["energy"] = o.Energy
	}
	if o.Zip != nil {
		toSerialize["zip"] = o.Zip
	}
	return json.Marshal(toSerialize)
}

type NullableInlineObject3 struct {
	value *InlineObject3
	isSet bool
}

func (v NullableInlineObject3) Get() *InlineObject3 {
	return v.value
}

func (v *NullableInlineObject3) Set(val *InlineObject3) {
	v.value = val
	v.isSet = true
}

func (v NullableInlineObject3) IsSet() bool {
	return v.isSet
}

func (v *NullableInlineObject3) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInlineObject3(val *InlineObject3) *NullableInlineObject3 {
	return &NullableInlineObject3{value: val, isSet: true}
}

func (v NullableInlineObject3) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInlineObject3) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


