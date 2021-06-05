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

// InlineResponse2005 struct for InlineResponse2005
type InlineResponse2005 struct {
	// Stromkonto/Metering address allocated (this is not the MELOID!)
	Account *string `json:"account,omitempty"`
	// Reading as provided as input in Wh
	Var180 *int32 `json:"1.8.0,omitempty"`
	// Green energy calculated using Green Power Index (GrünstromIndex) in Wh
	Var181 *int32 `json:"1.8.1,omitempty"`
	// Grey energy calculated using Green Power Index (GrünstromIndex) in Wh
	Var182 *int32 `json:"1.8.2,omitempty"`
	// API Consensus time this reading was fully received
	TimeStamp *int32 `json:"timeStamp,omitempty"`
	// Time this reading got imported into consensus (e.q. signed timestamp).
	ProcessingTime *int32 `json:"_processingTime,omitempty"`
	// CO2 Emission of metered energy in a standard mix
	Co2GStandard *int32 `json:"co2_g_standard,omitempty"`
	// CO2 Emission of metered energy in a green energy mix (e.q. Ökostromtarif)
	Co2GOekostrom *int32 `json:"co2_g_oekostrom,omitempty"`
}

// NewInlineResponse2005 instantiates a new InlineResponse2005 object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInlineResponse2005() *InlineResponse2005 {
	this := InlineResponse2005{}
	return &this
}

// NewInlineResponse2005WithDefaults instantiates a new InlineResponse2005 object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInlineResponse2005WithDefaults() *InlineResponse2005 {
	this := InlineResponse2005{}
	return &this
}

// GetAccount returns the Account field value if set, zero value otherwise.
func (o *InlineResponse2005) GetAccount() string {
	if o == nil || o.Account == nil {
		var ret string
		return ret
	}
	return *o.Account
}

// GetAccountOk returns a tuple with the Account field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineResponse2005) GetAccountOk() (*string, bool) {
	if o == nil || o.Account == nil {
		return nil, false
	}
	return o.Account, true
}

// HasAccount returns a boolean if a field has been set.
func (o *InlineResponse2005) HasAccount() bool {
	if o != nil && o.Account != nil {
		return true
	}

	return false
}

// SetAccount gets a reference to the given string and assigns it to the Account field.
func (o *InlineResponse2005) SetAccount(v string) {
	o.Account = &v
}

// GetVar180 returns the Var180 field value if set, zero value otherwise.
func (o *InlineResponse2005) GetVar180() int32 {
	if o == nil || o.Var180 == nil {
		var ret int32
		return ret
	}
	return *o.Var180
}

// GetVar180Ok returns a tuple with the Var180 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineResponse2005) GetVar180Ok() (*int32, bool) {
	if o == nil || o.Var180 == nil {
		return nil, false
	}
	return o.Var180, true
}

// HasVar180 returns a boolean if a field has been set.
func (o *InlineResponse2005) HasVar180() bool {
	if o != nil && o.Var180 != nil {
		return true
	}

	return false
}

// SetVar180 gets a reference to the given int32 and assigns it to the Var180 field.
func (o *InlineResponse2005) SetVar180(v int32) {
	o.Var180 = &v
}

// GetVar181 returns the Var181 field value if set, zero value otherwise.
func (o *InlineResponse2005) GetVar181() int32 {
	if o == nil || o.Var181 == nil {
		var ret int32
		return ret
	}
	return *o.Var181
}

// GetVar181Ok returns a tuple with the Var181 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineResponse2005) GetVar181Ok() (*int32, bool) {
	if o == nil || o.Var181 == nil {
		return nil, false
	}
	return o.Var181, true
}

// HasVar181 returns a boolean if a field has been set.
func (o *InlineResponse2005) HasVar181() bool {
	if o != nil && o.Var181 != nil {
		return true
	}

	return false
}

// SetVar181 gets a reference to the given int32 and assigns it to the Var181 field.
func (o *InlineResponse2005) SetVar181(v int32) {
	o.Var181 = &v
}

// GetVar182 returns the Var182 field value if set, zero value otherwise.
func (o *InlineResponse2005) GetVar182() int32 {
	if o == nil || o.Var182 == nil {
		var ret int32
		return ret
	}
	return *o.Var182
}

// GetVar182Ok returns a tuple with the Var182 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineResponse2005) GetVar182Ok() (*int32, bool) {
	if o == nil || o.Var182 == nil {
		return nil, false
	}
	return o.Var182, true
}

// HasVar182 returns a boolean if a field has been set.
func (o *InlineResponse2005) HasVar182() bool {
	if o != nil && o.Var182 != nil {
		return true
	}

	return false
}

// SetVar182 gets a reference to the given int32 and assigns it to the Var182 field.
func (o *InlineResponse2005) SetVar182(v int32) {
	o.Var182 = &v
}

// GetTimeStamp returns the TimeStamp field value if set, zero value otherwise.
func (o *InlineResponse2005) GetTimeStamp() int32 {
	if o == nil || o.TimeStamp == nil {
		var ret int32
		return ret
	}
	return *o.TimeStamp
}

// GetTimeStampOk returns a tuple with the TimeStamp field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineResponse2005) GetTimeStampOk() (*int32, bool) {
	if o == nil || o.TimeStamp == nil {
		return nil, false
	}
	return o.TimeStamp, true
}

// HasTimeStamp returns a boolean if a field has been set.
func (o *InlineResponse2005) HasTimeStamp() bool {
	if o != nil && o.TimeStamp != nil {
		return true
	}

	return false
}

// SetTimeStamp gets a reference to the given int32 and assigns it to the TimeStamp field.
func (o *InlineResponse2005) SetTimeStamp(v int32) {
	o.TimeStamp = &v
}

// GetProcessingTime returns the ProcessingTime field value if set, zero value otherwise.
func (o *InlineResponse2005) GetProcessingTime() int32 {
	if o == nil || o.ProcessingTime == nil {
		var ret int32
		return ret
	}
	return *o.ProcessingTime
}

// GetProcessingTimeOk returns a tuple with the ProcessingTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineResponse2005) GetProcessingTimeOk() (*int32, bool) {
	if o == nil || o.ProcessingTime == nil {
		return nil, false
	}
	return o.ProcessingTime, true
}

// HasProcessingTime returns a boolean if a field has been set.
func (o *InlineResponse2005) HasProcessingTime() bool {
	if o != nil && o.ProcessingTime != nil {
		return true
	}

	return false
}

// SetProcessingTime gets a reference to the given int32 and assigns it to the ProcessingTime field.
func (o *InlineResponse2005) SetProcessingTime(v int32) {
	o.ProcessingTime = &v
}

// GetCo2GStandard returns the Co2GStandard field value if set, zero value otherwise.
func (o *InlineResponse2005) GetCo2GStandard() int32 {
	if o == nil || o.Co2GStandard == nil {
		var ret int32
		return ret
	}
	return *o.Co2GStandard
}

// GetCo2GStandardOk returns a tuple with the Co2GStandard field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineResponse2005) GetCo2GStandardOk() (*int32, bool) {
	if o == nil || o.Co2GStandard == nil {
		return nil, false
	}
	return o.Co2GStandard, true
}

// HasCo2GStandard returns a boolean if a field has been set.
func (o *InlineResponse2005) HasCo2GStandard() bool {
	if o != nil && o.Co2GStandard != nil {
		return true
	}

	return false
}

// SetCo2GStandard gets a reference to the given int32 and assigns it to the Co2GStandard field.
func (o *InlineResponse2005) SetCo2GStandard(v int32) {
	o.Co2GStandard = &v
}

// GetCo2GOekostrom returns the Co2GOekostrom field value if set, zero value otherwise.
func (o *InlineResponse2005) GetCo2GOekostrom() int32 {
	if o == nil || o.Co2GOekostrom == nil {
		var ret int32
		return ret
	}
	return *o.Co2GOekostrom
}

// GetCo2GOekostromOk returns a tuple with the Co2GOekostrom field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineResponse2005) GetCo2GOekostromOk() (*int32, bool) {
	if o == nil || o.Co2GOekostrom == nil {
		return nil, false
	}
	return o.Co2GOekostrom, true
}

// HasCo2GOekostrom returns a boolean if a field has been set.
func (o *InlineResponse2005) HasCo2GOekostrom() bool {
	if o != nil && o.Co2GOekostrom != nil {
		return true
	}

	return false
}

// SetCo2GOekostrom gets a reference to the given int32 and assigns it to the Co2GOekostrom field.
func (o *InlineResponse2005) SetCo2GOekostrom(v int32) {
	o.Co2GOekostrom = &v
}

func (o InlineResponse2005) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Account != nil {
		toSerialize["account"] = o.Account
	}
	if o.Var180 != nil {
		toSerialize["1.8.0"] = o.Var180
	}
	if o.Var181 != nil {
		toSerialize["1.8.1"] = o.Var181
	}
	if o.Var182 != nil {
		toSerialize["1.8.2"] = o.Var182
	}
	if o.TimeStamp != nil {
		toSerialize["timeStamp"] = o.TimeStamp
	}
	if o.ProcessingTime != nil {
		toSerialize["_processingTime"] = o.ProcessingTime
	}
	if o.Co2GStandard != nil {
		toSerialize["co2_g_standard"] = o.Co2GStandard
	}
	if o.Co2GOekostrom != nil {
		toSerialize["co2_g_oekostrom"] = o.Co2GOekostrom
	}
	return json.Marshal(toSerialize)
}

type NullableInlineResponse2005 struct {
	value *InlineResponse2005
	isSet bool
}

func (v NullableInlineResponse2005) Get() *InlineResponse2005 {
	return v.value
}

func (v *NullableInlineResponse2005) Set(val *InlineResponse2005) {
	v.value = val
	v.isSet = true
}

func (v NullableInlineResponse2005) IsSet() bool {
	return v.isSet
}

func (v *NullableInlineResponse2005) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInlineResponse2005(val *InlineResponse2005) *NullableInlineResponse2005 {
	return &NullableInlineResponse2005{value: val, isSet: true}
}

func (v NullableInlineResponse2005) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInlineResponse2005) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

