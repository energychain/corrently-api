

# InlineObject2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **String** | Stromkonto account address of sender |  [optional]
**to** | **String** | Stromkonto account address of reciever |  [optional]
**value** | **Integer** | Amount to transfer (in Watthours for electricity, or pcs for trees) |  [optional]
**variation** | [**VariationEnum**](#VariationEnum) |  |  [optional]
**signature** | **String** | Signature per Stromkonto setting (might be simple email confirmation link) |  [optional]



## Enum: VariationEnum

Name | Value
---- | -----
GSB | &quot;gsb&quot;
ERZEUGUNG | &quot;erzeugung&quot;
EIGENSTROM | &quot;eigenstrom&quot;
CO2 | &quot;co2&quot;
BAEUME | &quot;baeume&quot;



