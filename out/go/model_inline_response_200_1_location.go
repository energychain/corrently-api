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

// InlineResponse2001Location Standarized location info sourced for prediction
type InlineResponse2001Location struct {
	// Zipcode (Postleitzahl)
	Zip *string `json:"zip,omitempty"`
	// Pretty Print city name
	City *string `json:"city,omitempty"`
}

// NewInlineResponse2001Location instantiates a new InlineResponse2001Location object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInlineResponse2001Location() *InlineResponse2001Location {
	this := InlineResponse2001Location{}
	return &this
}

// NewInlineResponse2001LocationWithDefaults instantiates a new InlineResponse2001Location object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInlineResponse2001LocationWithDefaults() *InlineResponse2001Location {
	this := InlineResponse2001Location{}
	return &this
}

// GetZip returns the Zip field value if set, zero value otherwise.
func (o *InlineResponse2001Location) GetZip() string {
	if o == nil || o.Zip == nil {
		var ret string
		return ret
	}
	return *o.Zip
}

// GetZipOk returns a tuple with the Zip field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineResponse2001Location) GetZipOk() (*string, bool) {
	if o == nil || o.Zip == nil {
		return nil, false
	}
	return o.Zip, true
}

// HasZip returns a boolean if a field has been set.
func (o *InlineResponse2001Location) HasZip() bool {
	if o != nil && o.Zip != nil {
		return true
	}

	return false
}

// SetZip gets a reference to the given string and assigns it to the Zip field.
func (o *InlineResponse2001Location) SetZip(v string) {
	o.Zip = &v
}

// GetCity returns the City field value if set, zero value otherwise.
func (o *InlineResponse2001Location) GetCity() string {
	if o == nil || o.City == nil {
		var ret string
		return ret
	}
	return *o.City
}

// GetCityOk returns a tuple with the City field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineResponse2001Location) GetCityOk() (*string, bool) {
	if o == nil || o.City == nil {
		return nil, false
	}
	return o.City, true
}

// HasCity returns a boolean if a field has been set.
func (o *InlineResponse2001Location) HasCity() bool {
	if o != nil && o.City != nil {
		return true
	}

	return false
}

// SetCity gets a reference to the given string and assigns it to the City field.
func (o *InlineResponse2001Location) SetCity(v string) {
	o.City = &v
}

func (o InlineResponse2001Location) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Zip != nil {
		toSerialize["zip"] = o.Zip
	}
	if o.City != nil {
		toSerialize["city"] = o.City
	}
	return json.Marshal(toSerialize)
}

type NullableInlineResponse2001Location struct {
	value *InlineResponse2001Location
	isSet bool
}

func (v NullableInlineResponse2001Location) Get() *InlineResponse2001Location {
	return v.value
}

func (v *NullableInlineResponse2001Location) Set(val *InlineResponse2001Location) {
	v.value = val
	v.isSet = true
}

func (v NullableInlineResponse2001Location) IsSet() bool {
	return v.isSet
}

func (v *NullableInlineResponse2001Location) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInlineResponse2001Location(val *InlineResponse2001Location) *NullableInlineResponse2001Location {
	return &NullableInlineResponse2001Location{value: val, isSet: true}
}

func (v NullableInlineResponse2001Location) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInlineResponse2001Location) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


