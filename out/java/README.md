# openapi-java-client

Corrently.io
- API version: 2.0.0
  - Build date: 2021-06-10T22:14:05.124306Z[Etc/UTC]

*Corrently - from italian corrente, which is energy*
# Introduction
The Corrently ecosystem gets maintained by [STROMDAO GmbH](https://www.stromdao.de/) to support green energy services for prosumers, grid operators, regulators, integrators or any other party with an emerging need of consensus driven management.
As the [energy product Corrently](https://www.corrently.de/) got first launched in Germany parts of this documentation provide simple translations for better understanding.
[Released SKDs for Download](https://github.com/energychain/corrently-api/releases)


  For more information, please visit [https://stromdao.de/kontakt](https://stromdao.de/kontakt)

*Automatically generated by the [OpenAPI Generator](https://openapi-generator.tech)*


## Requirements

Building the API client library requires:
1. Java 1.7+
2. Maven/Gradle

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn clean install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn clean deploy
```

Refer to the [OSSRH Guide](http://central.sonatype.org/pages/ossrh-guide.html) for more information.

### Maven users

Add this dependency to your project's POM:

```xml
<dependency>
  <groupId>org.openapitools</groupId>
  <artifactId>openapi-java-client</artifactId>
  <version>2.0.0</version>
  <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
compile "org.openapitools:openapi-java-client:2.0.0"
```

### Others

At first generate the JAR by executing:

```shell
mvn clean package
```

Then manually install the following JARs:

* `target/openapi-java-client-2.0.0.jar`
* `target/lib/*.jar`

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java

// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DispatchGreenEnergyDistributionApiApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.corrently.io/v2.0");

    DispatchGreenEnergyDistributionApiApi apiInstance = new DispatchGreenEnergyDistributionApiApi(defaultClient);
    String zip = "zip_example"; // String | Zipcode (Postleitzahl) of a city in Germany.
    String key = "key_example"; // String | Any valid Stromkonto account (address).
    try {
      InlineResponse2002 result = apiInstance.gsiDispatch(zip, key);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DispatchGreenEnergyDistributionApiApi#gsiDispatch");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

## Documentation for API Endpoints

All URIs are relative to *https://api.corrently.io/v2.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DispatchGreenEnergyDistributionApiApi* | [**gsiDispatch**](docs/DispatchGreenEnergyDistributionApiApi.md#gsiDispatch) | **GET** /gsi/dispatch | Dispatch (Green Energy Distribution Schedule)
*EaseeApi* | [**easeeSessions**](docs/EaseeApi.md#easeeSessions) | **GET** /alternative/easee/lastSessions | Returns lastSession info for all easee wallboxes (chargers) given user has access to.
*GreenPowerIndexGrnstromIndexApi* | [**gsiBesthour**](docs/GreenPowerIndexGrnstromIndexApi.md#gsiBesthour) | **GET** /gsi/bestHour | Get best hour (with most regional green energy) in a given timeframe.
*GreenPowerIndexGrnstromIndexApi* | [**gsiDispatch**](docs/GreenPowerIndexGrnstromIndexApi.md#gsiDispatch) | **GET** /gsi/dispatch | Dispatch (Green Energy Distribution Schedule)
*GreenPowerIndexGrnstromIndexApi* | [**gsiMarketdata**](docs/GreenPowerIndexGrnstromIndexApi.md#gsiMarketdata) | **GET** /gsi/marketdata | Marketdata
*GreenPowerIndexGrnstromIndexApi* | [**gsiPrediction**](docs/GreenPowerIndexGrnstromIndexApi.md#gsiPrediction) | **GET** /gsi/prediction | Prediction
*MeteringDecoratorApi* | [**meteringGet**](docs/MeteringDecoratorApi.md#meteringGet) | **GET** /metering/reading | Meter Reading
*MeteringDecoratorApi* | [**meteringPost**](docs/MeteringDecoratorApi.md#meteringPost) | **POST** /metering/reading | Meter Reading
*OcppApi* | [**ocppSessions**](docs/OcppApi.md#ocppSessions) | **GET** /alternative/ocpp/lastSessions | Returns lastSession info of OCCP Cloud service for clearing in corrently ecosystem. Might be tested via [OCPP cloud simulator](https://ocpp.corrently.cloud).
*OpenMeterApi* | [**omActivities**](docs/OpenMeterApi.md#omActivities) | **GET** /alternative/openmeter/activities | Public shared smart meters installed in Germany and available for subservices and exploration.
*OpenMeterApi* | [**omMeters**](docs/OpenMeterApi.md#omMeters) | **GET** /alternative/openmeter/meters | Public shared smart meters installed in Germany and available for subservices and exploration.
*OpenMeterApi* | [**omReadings**](docs/OpenMeterApi.md#omReadings) | **GET** /alternative/openmeter/readings | Public shared smart meters installed in Germany and available for subservices and exploration.
*SmartHomeApi* | [**gsiBesthour**](docs/SmartHomeApi.md#gsiBesthour) | **GET** /gsi/bestHour | Get best hour (with most regional green energy) in a given timeframe.
*StromQuittungApi* | [**quittungCreate**](docs/StromQuittungApi.md#quittungCreate) | **POST** /quittung/create | Create a receipt for an energy delivery (only valid in Germany).
*StromkontoLedgerApi* | [**prepareTransaction**](docs/StromkontoLedgerApi.md#prepareTransaction) | **POST** /stromkonto/prepareTransaction | Prepare Transaction
*StromkontoLedgerApi* | [**stromkontoBalances**](docs/StromkontoLedgerApi.md#stromkontoBalances) | **GET** /stromkonto/balances | Balances
*StromkontoLedgerApi* | [**stromkontoChoices**](docs/StromkontoLedgerApi.md#stromkontoChoices) | **GET** /stromkonto/choices | Selectable Choices for customer
*StromkontoLedgerApi* | [**stromkontoLogin**](docs/StromkontoLedgerApi.md#stromkontoLogin) | **POST** /stromkonto/login | Login (via Mail)
*StromkontoLedgerApi* | [**stromkontoRegister**](docs/StromkontoLedgerApi.md#stromkontoRegister) | **POST** /stromkonto/register | Register (new Stromkonto)
*TariffPriceApiApi* | [**tariffSLPH0**](docs/TariffPriceApiApi.md#tariffSLPH0) | **GET** /tariff/slph0 | Energy Tariff information
*TariffPriceApiApi* | [**tariffcomponents**](docs/TariffPriceApiApi.md#tariffcomponents) | **GET** /tariff/components | Energy Tariff price components
*WiMWechselprozesseImMesswesenStromStatusApiApi* | [**wimstatus**](docs/WiMWechselprozesseImMesswesenStromStatusApiApi.md#wimstatus) | **GET** /wim/status | WiM Proess Informtion


## Documentation for Models

 - [Balance](docs/Balance.md)
 - [Componentsh0](docs/Componentsh0.md)
 - [DispatchLocation](docs/DispatchLocation.md)
 - [EaseeCharger](docs/EaseeCharger.md)
 - [ForecastItem](docs/ForecastItem.md)
 - [InlineObject](docs/InlineObject.md)
 - [InlineObject1](docs/InlineObject1.md)
 - [InlineObject2](docs/InlineObject2.md)
 - [InlineObject3](docs/InlineObject3.md)
 - [InlineObject4](docs/InlineObject4.md)
 - [InlineResponse200](docs/InlineResponse200.md)
 - [InlineResponse2001](docs/InlineResponse2001.md)
 - [InlineResponse2001Location](docs/InlineResponse2001Location.md)
 - [InlineResponse2001Matrix](docs/InlineResponse2001Matrix.md)
 - [InlineResponse2001MatrixH0](docs/InlineResponse2001MatrixH0.md)
 - [InlineResponse2002](docs/InlineResponse2002.md)
 - [InlineResponse2002Timeframe](docs/InlineResponse2002Timeframe.md)
 - [InlineResponse2003](docs/InlineResponse2003.md)
 - [InlineResponse2004](docs/InlineResponse2004.md)
 - [InlineResponse2005](docs/InlineResponse2005.md)
 - [InlineResponse2006](docs/InlineResponse2006.md)
 - [MarketData](docs/MarketData.md)
 - [Ommeters](docs/Ommeters.md)
 - [Tariffh0](docs/Tariffh0.md)
 - [Transactions](docs/Transactions.md)


## Documentation for Authorization

All endpoints do not require authorization.
Authentication schemes defined for the API:

## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multithreaded environment to avoid any potential issues.

## Author

dev@stromdao.com

