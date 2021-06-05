# MarketData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StartTimestamp** | Pointer to **int32** | Timestamp in Standard Milliseconds | [optional] 
**EndTimestamp** | Pointer to **int32** | Timestamp in Standard Milliseconds | [optional] 
**Marketprice** | Pointer to **float32** | Actual Marketprice for regional green power in EUR per MWh | [optional] 

## Methods

### NewMarketData

`func NewMarketData() *MarketData`

NewMarketData instantiates a new MarketData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMarketDataWithDefaults

`func NewMarketDataWithDefaults() *MarketData`

NewMarketDataWithDefaults instantiates a new MarketData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStartTimestamp

`func (o *MarketData) GetStartTimestamp() int32`

GetStartTimestamp returns the StartTimestamp field if non-nil, zero value otherwise.

### GetStartTimestampOk

`func (o *MarketData) GetStartTimestampOk() (*int32, bool)`

GetStartTimestampOk returns a tuple with the StartTimestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTimestamp

`func (o *MarketData) SetStartTimestamp(v int32)`

SetStartTimestamp sets StartTimestamp field to given value.

### HasStartTimestamp

`func (o *MarketData) HasStartTimestamp() bool`

HasStartTimestamp returns a boolean if a field has been set.

### GetEndTimestamp

`func (o *MarketData) GetEndTimestamp() int32`

GetEndTimestamp returns the EndTimestamp field if non-nil, zero value otherwise.

### GetEndTimestampOk

`func (o *MarketData) GetEndTimestampOk() (*int32, bool)`

GetEndTimestampOk returns a tuple with the EndTimestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndTimestamp

`func (o *MarketData) SetEndTimestamp(v int32)`

SetEndTimestamp sets EndTimestamp field to given value.

### HasEndTimestamp

`func (o *MarketData) HasEndTimestamp() bool`

HasEndTimestamp returns a boolean if a field has been set.

### GetMarketprice

`func (o *MarketData) GetMarketprice() float32`

GetMarketprice returns the Marketprice field if non-nil, zero value otherwise.

### GetMarketpriceOk

`func (o *MarketData) GetMarketpriceOk() (*float32, bool)`

GetMarketpriceOk returns a tuple with the Marketprice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketprice

`func (o *MarketData) SetMarketprice(v float32)`

SetMarketprice sets Marketprice field to given value.

### HasMarketprice

`func (o *MarketData) HasMarketprice() bool`

HasMarketprice returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


