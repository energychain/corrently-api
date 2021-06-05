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

// InlineResponse2003 struct for InlineResponse2003
type InlineResponse2003 struct {
	// Energyprice for the upcomming hours
	Data *[]MarketData `json:"data,omitempty"`
}

// NewInlineResponse2003 instantiates a new InlineResponse2003 object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInlineResponse2003() *InlineResponse2003 {
	this := InlineResponse2003{}
	return &this
}

// NewInlineResponse2003WithDefaults instantiates a new InlineResponse2003 object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInlineResponse2003WithDefaults() *InlineResponse2003 {
	this := InlineResponse2003{}
	return &this
}

// GetData returns the Data field value if set, zero value otherwise.
func (o *InlineResponse2003) GetData() []MarketData {
	if o == nil || o.Data == nil {
		var ret []MarketData
		return ret
	}
	return *o.Data
}

// GetDataOk returns a tuple with the Data field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineResponse2003) GetDataOk() (*[]MarketData, bool) {
	if o == nil || o.Data == nil {
		return nil, false
	}
	return o.Data, true
}

// HasData returns a boolean if a field has been set.
func (o *InlineResponse2003) HasData() bool {
	if o != nil && o.Data != nil {
		return true
	}

	return false
}

// SetData gets a reference to the given []MarketData and assigns it to the Data field.
func (o *InlineResponse2003) SetData(v []MarketData) {
	o.Data = &v
}

func (o InlineResponse2003) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Data != nil {
		toSerialize["data"] = o.Data
	}
	return json.Marshal(toSerialize)
}

type NullableInlineResponse2003 struct {
	value *InlineResponse2003
	isSet bool
}

func (v NullableInlineResponse2003) Get() *InlineResponse2003 {
	return v.value
}

func (v *NullableInlineResponse2003) Set(val *InlineResponse2003) {
	v.value = val
	v.isSet = true
}

func (v NullableInlineResponse2003) IsSet() bool {
	return v.isSet
}

func (v *NullableInlineResponse2003) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInlineResponse2003(val *InlineResponse2003) *NullableInlineResponse2003 {
	return &NullableInlineResponse2003{value: val, isSet: true}
}

func (v NullableInlineResponse2003) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInlineResponse2003) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


