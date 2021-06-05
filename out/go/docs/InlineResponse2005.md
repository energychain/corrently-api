# InlineResponse2005

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Account** | Pointer to **string** | Stromkonto/Metering address allocated (this is not the MELOID!) | [optional] 
**Var180** | Pointer to **int32** | Reading as provided as input in Wh | [optional] 
**Var181** | Pointer to **int32** | Green energy calculated using Green Power Index (GrünstromIndex) in Wh | [optional] 
**Var182** | Pointer to **int32** | Grey energy calculated using Green Power Index (GrünstromIndex) in Wh | [optional] 
**TimeStamp** | Pointer to **int32** | API Consensus time this reading was fully received | [optional] 
**ProcessingTime** | Pointer to **int32** | Time this reading got imported into consensus (e.q. signed timestamp). | [optional] 
**Co2GStandard** | Pointer to **int32** | CO2 Emission of metered energy in a standard mix | [optional] 
**Co2GOekostrom** | Pointer to **int32** | CO2 Emission of metered energy in a green energy mix (e.q. Ökostromtarif) | [optional] 

## Methods

### NewInlineResponse2005

`func NewInlineResponse2005() *InlineResponse2005`

NewInlineResponse2005 instantiates a new InlineResponse2005 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInlineResponse2005WithDefaults

`func NewInlineResponse2005WithDefaults() *InlineResponse2005`

NewInlineResponse2005WithDefaults instantiates a new InlineResponse2005 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccount

`func (o *InlineResponse2005) GetAccount() string`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *InlineResponse2005) GetAccountOk() (*string, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *InlineResponse2005) SetAccount(v string)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *InlineResponse2005) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetVar180

`func (o *InlineResponse2005) GetVar180() int32`

GetVar180 returns the Var180 field if non-nil, zero value otherwise.

### GetVar180Ok

`func (o *InlineResponse2005) GetVar180Ok() (*int32, bool)`

GetVar180Ok returns a tuple with the Var180 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVar180

`func (o *InlineResponse2005) SetVar180(v int32)`

SetVar180 sets Var180 field to given value.

### HasVar180

`func (o *InlineResponse2005) HasVar180() bool`

HasVar180 returns a boolean if a field has been set.

### GetVar181

`func (o *InlineResponse2005) GetVar181() int32`

GetVar181 returns the Var181 field if non-nil, zero value otherwise.

### GetVar181Ok

`func (o *InlineResponse2005) GetVar181Ok() (*int32, bool)`

GetVar181Ok returns a tuple with the Var181 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVar181

`func (o *InlineResponse2005) SetVar181(v int32)`

SetVar181 sets Var181 field to given value.

### HasVar181

`func (o *InlineResponse2005) HasVar181() bool`

HasVar181 returns a boolean if a field has been set.

### GetVar182

`func (o *InlineResponse2005) GetVar182() int32`

GetVar182 returns the Var182 field if non-nil, zero value otherwise.

### GetVar182Ok

`func (o *InlineResponse2005) GetVar182Ok() (*int32, bool)`

GetVar182Ok returns a tuple with the Var182 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVar182

`func (o *InlineResponse2005) SetVar182(v int32)`

SetVar182 sets Var182 field to given value.

### HasVar182

`func (o *InlineResponse2005) HasVar182() bool`

HasVar182 returns a boolean if a field has been set.

### GetTimeStamp

`func (o *InlineResponse2005) GetTimeStamp() int32`

GetTimeStamp returns the TimeStamp field if non-nil, zero value otherwise.

### GetTimeStampOk

`func (o *InlineResponse2005) GetTimeStampOk() (*int32, bool)`

GetTimeStampOk returns a tuple with the TimeStamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeStamp

`func (o *InlineResponse2005) SetTimeStamp(v int32)`

SetTimeStamp sets TimeStamp field to given value.

### HasTimeStamp

`func (o *InlineResponse2005) HasTimeStamp() bool`

HasTimeStamp returns a boolean if a field has been set.

### GetProcessingTime

`func (o *InlineResponse2005) GetProcessingTime() int32`

GetProcessingTime returns the ProcessingTime field if non-nil, zero value otherwise.

### GetProcessingTimeOk

`func (o *InlineResponse2005) GetProcessingTimeOk() (*int32, bool)`

GetProcessingTimeOk returns a tuple with the ProcessingTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessingTime

`func (o *InlineResponse2005) SetProcessingTime(v int32)`

SetProcessingTime sets ProcessingTime field to given value.

### HasProcessingTime

`func (o *InlineResponse2005) HasProcessingTime() bool`

HasProcessingTime returns a boolean if a field has been set.

### GetCo2GStandard

`func (o *InlineResponse2005) GetCo2GStandard() int32`

GetCo2GStandard returns the Co2GStandard field if non-nil, zero value otherwise.

### GetCo2GStandardOk

`func (o *InlineResponse2005) GetCo2GStandardOk() (*int32, bool)`

GetCo2GStandardOk returns a tuple with the Co2GStandard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCo2GStandard

`func (o *InlineResponse2005) SetCo2GStandard(v int32)`

SetCo2GStandard sets Co2GStandard field to given value.

### HasCo2GStandard

`func (o *InlineResponse2005) HasCo2GStandard() bool`

HasCo2GStandard returns a boolean if a field has been set.

### GetCo2GOekostrom

`func (o *InlineResponse2005) GetCo2GOekostrom() int32`

GetCo2GOekostrom returns the Co2GOekostrom field if non-nil, zero value otherwise.

### GetCo2GOekostromOk

`func (o *InlineResponse2005) GetCo2GOekostromOk() (*int32, bool)`

GetCo2GOekostromOk returns a tuple with the Co2GOekostrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCo2GOekostrom

`func (o *InlineResponse2005) SetCo2GOekostrom(v int32)`

SetCo2GOekostrom sets Co2GOekostrom field to given value.

### HasCo2GOekostrom

`func (o *InlineResponse2005) HasCo2GOekostrom() bool`

HasCo2GOekostrom returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


