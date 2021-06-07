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

// InlineResponse2004 struct for InlineResponse2004
type InlineResponse2004 struct {
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
	// Time to Live for this reader. If no update is provided it gets decommissioned.
	Ttl *int32 `json:"ttl,omitempty"`
	// Update credits this meter has. Gets refilled automtically to prevent too frequent updates
	Credits interface{} `json:"credits,omitempty"`
}

// NewInlineResponse2004 instantiates a new InlineResponse2004 object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInlineResponse2004() *InlineResponse2004 {
	this := InlineResponse2004{}
	return &this
}

// NewInlineResponse2004WithDefaults instantiates a new InlineResponse2004 object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInlineResponse2004WithDefaults() *InlineResponse2004 {
	this := InlineResponse2004{}
	return &this
}

// GetAccount returns the Account field value if set, zero value otherwise.
func (o *InlineResponse2004) GetAccount() string {
	if o == nil || o.Account == nil {
		var ret string
		return ret
	}
	return *o.Account
}

// GetAccountOk returns a tuple with the Account field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineResponse2004) GetAccountOk() (*string, bool) {
	if o == nil || o.Account == nil {
		return nil, false
	}
	return o.Account, true
}

// HasAccount returns a boolean if a field has been set.
func (o *InlineResponse2004) HasAccount() bool {
	if o != nil && o.Account != nil {
		return true
	}

	return false
}

// SetAccount gets a reference to the given string and assigns it to the Account field.
func (o *InlineResponse2004) SetAccount(v string) {
	o.Account = &v
}

// GetVar180 returns the Var180 field value if set, zero value otherwise.
func (o *InlineResponse2004) GetVar180() int32 {
	if o == nil || o.Var180 == nil {
		var ret int32
		return ret
	}
	return *o.Var180
}

// GetVar180Ok returns a tuple with the Var180 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineResponse2004) GetVar180Ok() (*int32, bool) {
	if o == nil || o.Var180 == nil {
		return nil, false
	}
	return o.Var180, true
}

// HasVar180 returns a boolean if a field has been set.
func (o *InlineResponse2004) HasVar180() bool {
	if o != nil && o.Var180 != nil {
		return true
	}

	return false
}

// SetVar180 gets a reference to the given int32 and assigns it to the Var180 field.
func (o *InlineResponse2004) SetVar180(v int32) {
	o.Var180 = &v
}

// GetVar181 returns the Var181 field value if set, zero value otherwise.
func (o *InlineResponse2004) GetVar181() int32 {
	if o == nil || o.Var181 == nil {
		var ret int32
		return ret
	}
	return *o.Var181
}

// GetVar181Ok returns a tuple with the Var181 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineResponse2004) GetVar181Ok() (*int32, bool) {
	if o == nil || o.Var181 == nil {
		return nil, false
	}
	return o.Var181, true
}

// HasVar181 returns a boolean if a field has been set.
func (o *InlineResponse2004) HasVar181() bool {
	if o != nil && o.Var181 != nil {
		return true
	}

	return false
}

// SetVar181 gets a reference to the given int32 and assigns it to the Var181 field.
func (o *InlineResponse2004) SetVar181(v int32) {
	o.Var181 = &v
}

// GetVar182 returns the Var182 field value if set, zero value otherwise.
func (o *InlineResponse2004) GetVar182() int32 {
	if o == nil || o.Var182 == nil {
		var ret int32
		return ret
	}
	return *o.Var182
}

// GetVar182Ok returns a tuple with the Var182 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineResponse2004) GetVar182Ok() (*int32, bool) {
	if o == nil || o.Var182 == nil {
		return nil, false
	}
	return o.Var182, true
}

// HasVar182 returns a boolean if a field has been set.
func (o *InlineResponse2004) HasVar182() bool {
	if o != nil && o.Var182 != nil {
		return true
	}

	return false
}

// SetVar182 gets a reference to the given int32 and assigns it to the Var182 field.
func (o *InlineResponse2004) SetVar182(v int32) {
	o.Var182 = &v
}

// GetTimeStamp returns the TimeStamp field value if set, zero value otherwise.
func (o *InlineResponse2004) GetTimeStamp() int32 {
	if o == nil || o.TimeStamp == nil {
		var ret int32
		return ret
	}
	return *o.TimeStamp
}

// GetTimeStampOk returns a tuple with the TimeStamp field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineResponse2004) GetTimeStampOk() (*int32, bool) {
	if o == nil || o.TimeStamp == nil {
		return nil, false
	}
	return o.TimeStamp, true
}

// HasTimeStamp returns a boolean if a field has been set.
func (o *InlineResponse2004) HasTimeStamp() bool {
	if o != nil && o.TimeStamp != nil {
		return true
	}

	return false
}

// SetTimeStamp gets a reference to the given int32 and assigns it to the TimeStamp field.
func (o *InlineResponse2004) SetTimeStamp(v int32) {
	o.TimeStamp = &v
}

// GetProcessingTime returns the ProcessingTime field value if set, zero value otherwise.
func (o *InlineResponse2004) GetProcessingTime() int32 {
	if o == nil || o.ProcessingTime == nil {
		var ret int32
		return ret
	}
	return *o.ProcessingTime
}

// GetProcessingTimeOk returns a tuple with the ProcessingTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineResponse2004) GetProcessingTimeOk() (*int32, bool) {
	if o == nil || o.ProcessingTime == nil {
		return nil, false
	}
	return o.ProcessingTime, true
}

// HasProcessingTime returns a boolean if a field has been set.
func (o *InlineResponse2004) HasProcessingTime() bool {
	if o != nil && o.ProcessingTime != nil {
		return true
	}

	return false
}

// SetProcessingTime gets a reference to the given int32 and assigns it to the ProcessingTime field.
func (o *InlineResponse2004) SetProcessingTime(v int32) {
	o.ProcessingTime = &v
}

// GetCo2GStandard returns the Co2GStandard field value if set, zero value otherwise.
func (o *InlineResponse2004) GetCo2GStandard() int32 {
	if o == nil || o.Co2GStandard == nil {
		var ret int32
		return ret
	}
	return *o.Co2GStandard
}

// GetCo2GStandardOk returns a tuple with the Co2GStandard field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineResponse2004) GetCo2GStandardOk() (*int32, bool) {
	if o == nil || o.Co2GStandard == nil {
		return nil, false
	}
	return o.Co2GStandard, true
}

// HasCo2GStandard returns a boolean if a field has been set.
func (o *InlineResponse2004) HasCo2GStandard() bool {
	if o != nil && o.Co2GStandard != nil {
		return true
	}

	return false
}

// SetCo2GStandard gets a reference to the given int32 and assigns it to the Co2GStandard field.
func (o *InlineResponse2004) SetCo2GStandard(v int32) {
	o.Co2GStandard = &v
}

// GetCo2GOekostrom returns the Co2GOekostrom field value if set, zero value otherwise.
func (o *InlineResponse2004) GetCo2GOekostrom() int32 {
	if o == nil || o.Co2GOekostrom == nil {
		var ret int32
		return ret
	}
	return *o.Co2GOekostrom
}

// GetCo2GOekostromOk returns a tuple with the Co2GOekostrom field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineResponse2004) GetCo2GOekostromOk() (*int32, bool) {
	if o == nil || o.Co2GOekostrom == nil {
		return nil, false
	}
	return o.Co2GOekostrom, true
}

// HasCo2GOekostrom returns a boolean if a field has been set.
func (o *InlineResponse2004) HasCo2GOekostrom() bool {
	if o != nil && o.Co2GOekostrom != nil {
		return true
	}

	return false
}

// SetCo2GOekostrom gets a reference to the given int32 and assigns it to the Co2GOekostrom field.
func (o *InlineResponse2004) SetCo2GOekostrom(v int32) {
	o.Co2GOekostrom = &v
}

// GetTtl returns the Ttl field value if set, zero value otherwise.
func (o *InlineResponse2004) GetTtl() int32 {
	if o == nil || o.Ttl == nil {
		var ret int32
		return ret
	}
	return *o.Ttl
}

// GetTtlOk returns a tuple with the Ttl field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InlineResponse2004) GetTtlOk() (*int32, bool) {
	if o == nil || o.Ttl == nil {
		return nil, false
	}
	return o.Ttl, true
}

// HasTtl returns a boolean if a field has been set.
func (o *InlineResponse2004) HasTtl() bool {
	if o != nil && o.Ttl != nil {
		return true
	}

	return false
}

// SetTtl gets a reference to the given int32 and assigns it to the Ttl field.
func (o *InlineResponse2004) SetTtl(v int32) {
	o.Ttl = &v
}

// GetCredits returns the Credits field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *InlineResponse2004) GetCredits() interface{} {
	if o == nil  {
		var ret interface{}
		return ret
	}
	return o.Credits
}

// GetCreditsOk returns a tuple with the Credits field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *InlineResponse2004) GetCreditsOk() (*interface{}, bool) {
	if o == nil || o.Credits == nil {
		return nil, false
	}
	return &o.Credits, true
}

// HasCredits returns a boolean if a field has been set.
func (o *InlineResponse2004) HasCredits() bool {
	if o != nil && o.Credits != nil {
		return true
	}

	return false
}

// SetCredits gets a reference to the given interface{} and assigns it to the Credits field.
func (o *InlineResponse2004) SetCredits(v interface{}) {
	o.Credits = v
}

func (o InlineResponse2004) MarshalJSON() ([]byte, error) {
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
	if o.Ttl != nil {
		toSerialize["ttl"] = o.Ttl
	}
	if o.Credits != nil {
		toSerialize["credits"] = o.Credits
	}
	return json.Marshal(toSerialize)
}

type NullableInlineResponse2004 struct {
	value *InlineResponse2004
	isSet bool
}

func (v NullableInlineResponse2004) Get() *InlineResponse2004 {
	return v.value
}

func (v *NullableInlineResponse2004) Set(val *InlineResponse2004) {
	v.value = val
	v.isSet = true
}

func (v NullableInlineResponse2004) IsSet() bool {
	return v.isSet
}

func (v *NullableInlineResponse2004) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInlineResponse2004(val *InlineResponse2004) *NullableInlineResponse2004 {
	return &NullableInlineResponse2004{value: val, isSet: true}
}

func (v NullableInlineResponse2004) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInlineResponse2004) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


