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

// InlineObject struct for InlineObject
type InlineObject struct {
	Email *string `json:"email,omitempty"`
	FirstName *string `json:"first_name,omitempty"`
	LastName *string `json:"last_name,omitempty"`
	Zipcode *string `json:"zipcode,omitempty"`
}

// NewInlineObject instantiates a new InlineObject object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInlineObject() *InlineObject {
	this := InlineObject{}
	return &this
}

// NewInlineObjectWithDefaults instantiates a new InlineObject object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInlineObjectWithDefaults() *InlineObject {
	this := InlineObject{}
	return &this
}

// GetEmail returns the Email field value if set, zero value otherwise.
func (o *InlineObject) GetEmail() string {
	if o == nil || o.Email == nil {
		var ret string
		return ret
	}
	return *o.Email
}

// GetEmailOk returns a tuple with the Email field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineObject) GetEmailOk() (*string, bool) {
	if o == nil || o.Email == nil {
		return nil, false
	}
	return o.Email, true
}

// HasEmail returns a boolean if a field has been set.
func (o *InlineObject) HasEmail() bool {
	if o != nil && o.Email != nil {
		return true
	}

	return false
}

// SetEmail gets a reference to the given string and assigns it to the Email field.
func (o *InlineObject) SetEmail(v string) {
	o.Email = &v
}

// GetFirstName returns the FirstName field value if set, zero value otherwise.
func (o *InlineObject) GetFirstName() string {
	if o == nil || o.FirstName == nil {
		var ret string
		return ret
	}
	return *o.FirstName
}

// GetFirstNameOk returns a tuple with the FirstName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineObject) GetFirstNameOk() (*string, bool) {
	if o == nil || o.FirstName == nil {
		return nil, false
	}
	return o.FirstName, true
}

// HasFirstName returns a boolean if a field has been set.
func (o *InlineObject) HasFirstName() bool {
	if o != nil && o.FirstName != nil {
		return true
	}

	return false
}

// SetFirstName gets a reference to the given string and assigns it to the FirstName field.
func (o *InlineObject) SetFirstName(v string) {
	o.FirstName = &v
}

// GetLastName returns the LastName field value if set, zero value otherwise.
func (o *InlineObject) GetLastName() string {
	if o == nil || o.LastName == nil {
		var ret string
		return ret
	}
	return *o.LastName
}

// GetLastNameOk returns a tuple with the LastName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineObject) GetLastNameOk() (*string, bool) {
	if o == nil || o.LastName == nil {
		return nil, false
	}
	return o.LastName, true
}

// HasLastName returns a boolean if a field has been set.
func (o *InlineObject) HasLastName() bool {
	if o != nil && o.LastName != nil {
		return true
	}

	return false
}

// SetLastName gets a reference to the given string and assigns it to the LastName field.
func (o *InlineObject) SetLastName(v string) {
	o.LastName = &v
}

// GetZipcode returns the Zipcode field value if set, zero value otherwise.
func (o *InlineObject) GetZipcode() string {
	if o == nil || o.Zipcode == nil {
		var ret string
		return ret
	}
	return *o.Zipcode
}

// GetZipcodeOk returns a tuple with the Zipcode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineObject) GetZipcodeOk() (*string, bool) {
	if o == nil || o.Zipcode == nil {
		return nil, false
	}
	return o.Zipcode, true
}

// HasZipcode returns a boolean if a field has been set.
func (o *InlineObject) HasZipcode() bool {
	if o != nil && o.Zipcode != nil {
		return true
	}

	return false
}

// SetZipcode gets a reference to the given string and assigns it to the Zipcode field.
func (o *InlineObject) SetZipcode(v string) {
	o.Zipcode = &v
}

func (o InlineObject) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Email != nil {
		toSerialize["email"] = o.Email
	}
	if o.FirstName != nil {
		toSerialize["first_name"] = o.FirstName
	}
	if o.LastName != nil {
		toSerialize["last_name"] = o.LastName
	}
	if o.Zipcode != nil {
		toSerialize["zipcode"] = o.Zipcode
	}
	return json.Marshal(toSerialize)
}

type NullableInlineObject struct {
	value *InlineObject
	isSet bool
}

func (v NullableInlineObject) Get() *InlineObject {
	return v.value
}

func (v *NullableInlineObject) Set(val *InlineObject) {
	v.value = val
	v.isSet = true
}

func (v NullableInlineObject) IsSet() bool {
	return v.isSet
}

func (v *NullableInlineObject) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInlineObject(val *InlineObject) *NullableInlineObject {
	return &NullableInlineObject{value: val, isSet: true}
}

func (v NullableInlineObject) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInlineObject) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


