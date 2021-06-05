

# Balance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**soll** | **Integer** | Sum due by account |  [optional]
**haben** | **Integer** | Sum owned by account |  [optional]
**balance** | **Integer** | Sum owned - sum due by account |  [optional]
**txs** | [**List&lt;Transactions&gt;**](Transactions.md) |  |  [optional]
**variation** | [**VariationEnum**](#VariationEnum) | Type of subbalance (sub account) |  [optional]



## Enum: VariationEnum

Name | Value
---- | -----
GSB | &quot;gsb&quot;
ERZEUGUNG | &quot;erzeugung&quot;
EIGENSTROM | &quot;eigenstrom&quot;
CO2 | &quot;co2&quot;
BAEUME | &quot;baeume&quot;



