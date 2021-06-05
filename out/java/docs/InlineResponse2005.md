

# InlineResponse2005


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **String** | Stromkonto/Metering address allocated (this is not the MELOID!) |  [optional]
**_1_8_0** | **Integer** | Reading as provided as input in Wh |  [optional]
**_1_8_1** | **Integer** | Green energy calculated using Green Power Index (GrünstromIndex) in Wh |  [optional]
**_1_8_2** | **Integer** | Grey energy calculated using Green Power Index (GrünstromIndex) in Wh |  [optional]
**timeStamp** | **Integer** | API Consensus time this reading was fully received |  [optional]
**processingTime** | **Integer** | Time this reading got imported into consensus (e.q. signed timestamp). |  [optional]
**co2GStandard** | **Integer** | CO2 Emission of metered energy in a standard mix |  [optional]
**co2GOekostrom** | **Integer** | CO2 Emission of metered energy in a green energy mix (e.q. Ökostromtarif) |  [optional]



