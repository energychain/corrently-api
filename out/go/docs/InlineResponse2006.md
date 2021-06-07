# InlineResponse2006

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Token** | Pointer to **string** | Token for this receipt. It might be extended as &#39;token&#39; parameter to retrieve actual receipt [sample](https://corrently.de/service/quittung.html?token&#x3D;0x3C4750bf93aa96e55A0d60be334B6b6E14DCe5bc) | [optional] 

## Methods

### NewInlineResponse2006

`func NewInlineResponse2006() *InlineResponse2006`

NewInlineResponse2006 instantiates a new InlineResponse2006 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInlineResponse2006WithDefaults

`func NewInlineResponse2006WithDefaults() *InlineResponse2006`

NewInlineResponse2006WithDefaults instantiates a new InlineResponse2006 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetToken

`func (o *InlineResponse2006) GetToken() string`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *InlineResponse2006) GetTokenOk() (*string, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *InlineResponse2006) SetToken(v string)`

SetToken sets Token field to given value.

### HasToken

`func (o *InlineResponse2006) HasToken() bool`

HasToken returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


