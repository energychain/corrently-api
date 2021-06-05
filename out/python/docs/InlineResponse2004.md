# InlineResponse2004


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **str** | Stromkonto/Metering address allocated (this is not the MELOID!) | [optional] 
**_1_8_0** | **int** | Reading as provided as input in Wh | [optional] 
**_1_8_1** | **int** | Green energy calculated using Green Power Index (GrünstromIndex) in Wh | [optional] 
**_1_8_2** | **int** | Grey energy calculated using Green Power Index (GrünstromIndex) in Wh | [optional] 
**time_stamp** | **int** | API Consensus time this reading was fully received | [optional] 
**processing_time** | **int** | Time this reading got imported into consensus (e.q. signed timestamp). | [optional] 
**co2_g_standard** | **int** | CO2 Emission of metered energy in a standard mix | [optional] 
**co2_g_oekostrom** | **int** | CO2 Emission of metered energy in a green energy mix (e.q. Ökostromtarif) | [optional] 
**ttl** | **int** | Time to Live for this reader. If no update is provided it gets decommissioned. | [optional] 
**credits** | **bool, date, datetime, dict, float, int, list, str, none_type** | Update credits this meter has. Gets refilled automtically to prevent too frequent updates | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


