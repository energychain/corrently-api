

# ForecastItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**epochtime** | **Integer** | Timestamps in Seconds |  [optional]
**timeStamp** | **Integer** | Timestamp in Standard Milliseconds |  [optional]
**gsi** | **Integer** | Actual GreenPowerIndex for given Timestamp (between 0-100) |  [optional]
**scaled** | **Boolean** | Indicates if scaling is in operation to predict values |  [optional]
**sci** | **Integer** | Subindex just for Solar Energy |  [optional]
**energyprice** | **BigDecimal** | Local/regional energyprice modification (cent per kWh or euro per MWh). |  [optional]
**co2GOekostrom** | **Integer** | CO2 footprint in Gramm per kwh (only Green Power) |  [optional]



