# ForecastItem


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**epochtime** | **int** | Timestamps in Seconds | [optional] 
**time_stamp** | **int** | Timestamp in Standard Milliseconds | [optional] 
**gsi** | **int** | Actual GreenPowerIndex for given Timestamp (between 0-100) | [optional] 
**scaled** | **bool** | Indicates if scaling is in operation to predict values | [optional] 
**sci** | **int** | Subindex just for Solar Energy | [optional] 
**energyprice** | **float** | Local/regional energyprice modification (cent per kWh or euro per MWh). | [optional] 
**co2_g_oekostrom** | **int** | CO2 footprint in Gramm per kwh (only Green Power) | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


