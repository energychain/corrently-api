# # ForecastItem

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

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
