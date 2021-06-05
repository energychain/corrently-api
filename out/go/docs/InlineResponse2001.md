# InlineResponse2001

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Forecast** | Pointer to [**[]ForecastItem**](ForecastItem.md) | Prediction for the upcomming hours | [optional] 
**Location** | Pointer to [**InlineResponse2001Location**](InlineResponse2001Location.md) |  | [optional] 
**Matrix** | Pointer to [**InlineResponse2001Matrix**](InlineResponse2001Matrix.md) |  | [optional] 

## Methods

### NewInlineResponse2001

`func NewInlineResponse2001() *InlineResponse2001`

NewInlineResponse2001 instantiates a new InlineResponse2001 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInlineResponse2001WithDefaults

`func NewInlineResponse2001WithDefaults() *InlineResponse2001`

NewInlineResponse2001WithDefaults instantiates a new InlineResponse2001 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetForecast

`func (o *InlineResponse2001) GetForecast() []ForecastItem`

GetForecast returns the Forecast field if non-nil, zero value otherwise.

### GetForecastOk

`func (o *InlineResponse2001) GetForecastOk() (*[]ForecastItem, bool)`

GetForecastOk returns a tuple with the Forecast field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForecast

`func (o *InlineResponse2001) SetForecast(v []ForecastItem)`

SetForecast sets Forecast field to given value.

### HasForecast

`func (o *InlineResponse2001) HasForecast() bool`

HasForecast returns a boolean if a field has been set.

### GetLocation

`func (o *InlineResponse2001) GetLocation() InlineResponse2001Location`

GetLocation returns the Location field if non-nil, zero value otherwise.

### GetLocationOk

`func (o *InlineResponse2001) GetLocationOk() (*InlineResponse2001Location, bool)`

GetLocationOk returns a tuple with the Location field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocation

`func (o *InlineResponse2001) SetLocation(v InlineResponse2001Location)`

SetLocation sets Location field to given value.

### HasLocation

`func (o *InlineResponse2001) HasLocation() bool`

HasLocation returns a boolean if a field has been set.

### GetMatrix

`func (o *InlineResponse2001) GetMatrix() InlineResponse2001Matrix`

GetMatrix returns the Matrix field if non-nil, zero value otherwise.

### GetMatrixOk

`func (o *InlineResponse2001) GetMatrixOk() (*InlineResponse2001Matrix, bool)`

GetMatrixOk returns a tuple with the Matrix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatrix

`func (o *InlineResponse2001) SetMatrix(v InlineResponse2001Matrix)`

SetMatrix sets Matrix field to given value.

### HasMatrix

`func (o *InlineResponse2001) HasMatrix() bool`

HasMatrix returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


