# # InlineResponse2005

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **string** | Stromkonto/Metering address allocated (this is not the MELOID!) | [optional]
**_1_8_0** | **int** | Reading as provided as input in Wh | [optional]
**_1_8_1** | **int** | Green energy calculated using Green Power Index (GrünstromIndex) in Wh | [optional]
**_1_8_2** | **int** | Grey energy calculated using Green Power Index (GrünstromIndex) in Wh | [optional]
**time_stamp** | **int** | API Consensus time this reading was fully received | [optional]
**_processing_time** | **int** | Time this reading got imported into consensus (e.q. signed timestamp). | [optional]
**co2_g_standard** | **int** | CO2 Emission of metered energy in a standard mix | [optional]
**co2_g_oekostrom** | **int** | CO2 Emission of metered energy in a green energy mix (e.q. Ökostromtarif) | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
