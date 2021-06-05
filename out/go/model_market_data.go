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

// MarketData struct for MarketData
type MarketData struct {
	// Timestamp in Standard Milliseconds
	StartTimestamp *int32 `json:"start_timestamp,omitempty"`
	// Timestamp in Standard Milliseconds
	EndTimestamp *int32 `json:"end_timestamp,omitempty"`
	// Actual Marketprice for regional green power in EUR per MWh
	Marketprice *float32 `json:"marketprice,omitempty"`
}

// NewMarketData instantiates a new MarketData object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMarketData() *MarketData {
	this := MarketData{}
	return &this
}

// NewMarketDataWithDefaults instantiates a new MarketData object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMarketDataWithDefaults() *MarketData {
	this := MarketData{}
	return &this
}

// GetStartTimestamp returns the StartTimestamp field value if set, zero value otherwise.
func (o *MarketData) GetStartTimestamp() int32 {
	if o == nil || o.StartTimestamp == nil {
		var ret int32
		return ret
	}
	return *o.StartTimestamp
}

// GetStartTimestampOk returns a tuple with the StartTimestamp field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketData) GetStartTimestampOk() (*int32, bool) {
	if o == nil || o.StartTimestamp == nil {
		return nil, false
	}
	return o.StartTimestamp, true
}

// HasStartTimestamp returns a boolean if a field has been set.
func (o *MarketData) HasStartTimestamp() bool {
	if o != nil && o.StartTimestamp != nil {
		return true
	}

	return false
}

// SetStartTimestamp gets a reference to the given int32 and assigns it to the StartTimestamp field.
func (o *MarketData) SetStartTimestamp(v int32) {
	o.StartTimestamp = &v
}

// GetEndTimestamp returns the EndTimestamp field value if set, zero value otherwise.
func (o *MarketData) GetEndTimestamp() int32 {
	if o == nil || o.EndTimestamp == nil {
		var ret int32
		return ret
	}
	return *o.EndTimestamp
}

// GetEndTimestampOk returns a tuple with the EndTimestamp field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketData) GetEndTimestampOk() (*int32, bool) {
	if o == nil || o.EndTimestamp == nil {
		return nil, false
	}
	return o.EndTimestamp, true
}

// HasEndTimestamp returns a boolean if a field has been set.
func (o *MarketData) HasEndTimestamp() bool {
	if o != nil && o.EndTimestamp != nil {
		return true
	}

	return false
}

// SetEndTimestamp gets a reference to the given int32 and assigns it to the EndTimestamp field.
func (o *MarketData) SetEndTimestamp(v int32) {
	o.EndTimestamp = &v
}

// GetMarketprice returns the Marketprice field value if set, zero value otherwise.
func (o *MarketData) GetMarketprice() float32 {
	if o == nil || o.Marketprice == nil {
		var ret float32
		return ret
	}
	return *o.Marketprice
}

// GetMarketpriceOk returns a tuple with the Marketprice field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarketData) GetMarketpriceOk() (*float32, bool) {
	if o == nil || o.Marketprice == nil {
		return nil, false
	}
	return o.Marketprice, true
}

// HasMarketprice returns a boolean if a field has been set.
func (o *MarketData) HasMarketprice() bool {
	if o != nil && o.Marketprice != nil {
		return true
	}

	return false
}

// SetMarketprice gets a reference to the given float32 and assigns it to the Marketprice field.
func (o *MarketData) SetMarketprice(v float32) {
	o.Marketprice = &v
}

func (o MarketData) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.StartTimestamp != nil {
		toSerialize["start_timestamp"] = o.StartTimestamp
	}
	if o.EndTimestamp != nil {
		toSerialize["end_timestamp"] = o.EndTimestamp
	}
	if o.Marketprice != nil {
		toSerialize["marketprice"] = o.Marketprice
	}
	return json.Marshal(toSerialize)
}

type NullableMarketData struct {
	value *MarketData
	isSet bool
}

func (v NullableMarketData) Get() *MarketData {
	return v.value
}

func (v *NullableMarketData) Set(val *MarketData) {
	v.value = val
	v.isSet = true
}

func (v NullableMarketData) IsSet() bool {
	return v.isSet
}

func (v *NullableMarketData) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMarketData(val *MarketData) *NullableMarketData {
	return &NullableMarketData{value: val, isSet: true}
}

func (v NullableMarketData) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMarketData) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


