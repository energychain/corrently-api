# Ommeters


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meter_id** | **str** | identifier to be used in other methods like readings or activities. | [optional] 
**manufacturer_id** | **str** | DLMS manufacturerId | [optional] 
**location** | **str** | Basic address information for geo coding | [optional] 
**type** | **str** | Device type of the meter | [optional] 
**measurement_type** | **str** | Physical quantity being measured by the meter | [optional] 
**load_profile_type** | **str** | Metering load profile type associated with the meter | [optional] 
**scaling_factor** | **int** | Factor imposed on metered current AND voltage by a transducer | [optional] 
**current_scaling_factor** | **int** | Factor imposed on metered current by a transducer | [optional] 
**voltage_scaling_factor** | **int** | Factor imposed on metered voltage by a transducer | [optional] 
**meta** | **str** | Statistical metadata for this household | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


