# OpenAPIClient-php

*Corrently - from italian corrente, which is energy*
# Introduction
The Corrently ecosystem gets maintained by [STROMDAO GmbH](https://www.stromdao.de/) to support green energy services for prosumers, grid operators, regulators, integrators or any other party with an emerging need of consensus driven management.
As the [energy product Corrently](https://www.corrently.de/) got first launched in Germany parts of this documentation provide simple translations for better understanding.
[Released SKDs for Download](https://github.com/energychain/corrently-api/releases)


For more information, please visit [https://stromdao.de/kontakt](https://stromdao.de/kontakt).

## Installation & Usage

### Requirements

PHP 7.2 and later.

### Composer

To install the bindings via [Composer](https://getcomposer.org/), add the following to `composer.json`:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/GIT_USER_ID/GIT_REPO_ID.git"
    }
  ],
  "require": {
    "GIT_USER_ID/GIT_REPO_ID": "*@dev"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/OpenAPIClient-php/vendor/autoload.php');
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');




$apiInstance = new OpenAPI\Client\Api\DispatchGreenEnergyDistributionAPIApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$zip = 'zip_example'; // string | Zipcode (Postleitzahl) of a city in Germany.
$key = 'key_example'; // string | Any valid Stromkonto account (address).

try {
    $result = $apiInstance->gsiDispatch($zip, $key);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DispatchGreenEnergyDistributionAPIApi->gsiDispatch: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to *https://api.corrently.io/v2.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DispatchGreenEnergyDistributionAPIApi* | [**gsiDispatch**](docs/Api/DispatchGreenEnergyDistributionAPIApi.md#gsidispatch) | **GET** /gsi/dispatch | Dispatch (Green Energy Distribution Schedule)
*EaseeApi* | [**easeeSessions**](docs/Api/EaseeApi.md#easeesessions) | **GET** /alternative/easee/lastSessions | Returns lastSession info for all easee wallboxes (chargers) given user has access to.
*GreenPowerIndexGrnstromIndexApi* | [**gsiBesthour**](docs/Api/GreenPowerIndexGrnstromIndexApi.md#gsibesthour) | **GET** /gsi/bestHour | Get best hour (with most regional green energy) in a given timeframe.
*GreenPowerIndexGrnstromIndexApi* | [**gsiDispatch**](docs/Api/GreenPowerIndexGrnstromIndexApi.md#gsidispatch) | **GET** /gsi/dispatch | Dispatch (Green Energy Distribution Schedule)
*GreenPowerIndexGrnstromIndexApi* | [**gsiMarketdata**](docs/Api/GreenPowerIndexGrnstromIndexApi.md#gsimarketdata) | **GET** /gsi/marketdata | Marketdata
*GreenPowerIndexGrnstromIndexApi* | [**gsiPrediction**](docs/Api/GreenPowerIndexGrnstromIndexApi.md#gsiprediction) | **GET** /gsi/prediction | Prediction
*MeteringDecoratorApi* | [**meteringGet**](docs/Api/MeteringDecoratorApi.md#meteringget) | **GET** /metering/reading | Meter Reading
*MeteringDecoratorApi* | [**meteringPost**](docs/Api/MeteringDecoratorApi.md#meteringpost) | **POST** /metering/reading | Meter Reading
*OpenMETERApi* | [**omActivities**](docs/Api/OpenMETERApi.md#omactivities) | **GET** /alternative/openmeter/activities | Public shared smart meters installed in Germany and available for subservices and exploration.
*OpenMETERApi* | [**omMeters**](docs/Api/OpenMETERApi.md#ommeters) | **GET** /alternative/openmeter/meters | Public shared smart meters installed in Germany and available for subservices and exploration.
*OpenMETERApi* | [**omReadings**](docs/Api/OpenMETERApi.md#omreadings) | **GET** /alternative/openmeter/readings | Public shared smart meters installed in Germany and available for subservices and exploration.
*SmartHomeApi* | [**gsiBesthour**](docs/Api/SmartHomeApi.md#gsibesthour) | **GET** /gsi/bestHour | Get best hour (with most regional green energy) in a given timeframe.
*StromQuittungApi* | [**quittungCreate**](docs/Api/StromQuittungApi.md#quittungcreate) | **POST** /quittung/create | Create a receipt for an energy delivery (only valid in Germany).
*StromkontoLedgerApi* | [**prepareTransaction**](docs/Api/StromkontoLedgerApi.md#preparetransaction) | **POST** /stromkonto/prepareTransaction | Prepare Transaction
*StromkontoLedgerApi* | [**stromkontoBalances**](docs/Api/StromkontoLedgerApi.md#stromkontobalances) | **GET** /stromkonto/balances | Balances
*StromkontoLedgerApi* | [**stromkontoChoices**](docs/Api/StromkontoLedgerApi.md#stromkontochoices) | **GET** /stromkonto/choices | Selectable Choices for customer
*StromkontoLedgerApi* | [**stromkontoLogin**](docs/Api/StromkontoLedgerApi.md#stromkontologin) | **POST** /stromkonto/login | Login (via Mail)
*StromkontoLedgerApi* | [**stromkontoRegister**](docs/Api/StromkontoLedgerApi.md#stromkontoregister) | **POST** /stromkonto/register | Register (new Stromkonto)
*TariffPriceAPIApi* | [**tariffSLPH0**](docs/Api/TariffPriceAPIApi.md#tariffslph0) | **GET** /tariff/slph0 | Energy Tariff information
*TariffPriceAPIApi* | [**tariffcomponents**](docs/Api/TariffPriceAPIApi.md#tariffcomponents) | **GET** /tariff/components | Energy Tariff price components
*WiMWechselprozesseImMesswesenStromStatusAPIApi* | [**wimstatus**](docs/Api/WiMWechselprozesseImMesswesenStromStatusAPIApi.md#wimstatus) | **GET** /wim/status | WiM Proess Informtion

## Models

- [Balance](docs/Model/Balance.md)
- [Componentsh0](docs/Model/Componentsh0.md)
- [DispatchLocation](docs/Model/DispatchLocation.md)
- [EaseeCharger](docs/Model/EaseeCharger.md)
- [ForecastItem](docs/Model/ForecastItem.md)
- [InlineObject](docs/Model/InlineObject.md)
- [InlineObject1](docs/Model/InlineObject1.md)
- [InlineObject2](docs/Model/InlineObject2.md)
- [InlineObject3](docs/Model/InlineObject3.md)
- [InlineObject4](docs/Model/InlineObject4.md)
- [InlineResponse200](docs/Model/InlineResponse200.md)
- [InlineResponse2001](docs/Model/InlineResponse2001.md)
- [InlineResponse2001Location](docs/Model/InlineResponse2001Location.md)
- [InlineResponse2001Matrix](docs/Model/InlineResponse2001Matrix.md)
- [InlineResponse2001MatrixH0](docs/Model/InlineResponse2001MatrixH0.md)
- [InlineResponse2002](docs/Model/InlineResponse2002.md)
- [InlineResponse2002Timeframe](docs/Model/InlineResponse2002Timeframe.md)
- [InlineResponse2003](docs/Model/InlineResponse2003.md)
- [InlineResponse2004](docs/Model/InlineResponse2004.md)
- [InlineResponse2005](docs/Model/InlineResponse2005.md)
- [InlineResponse2006](docs/Model/InlineResponse2006.md)
- [MarketData](docs/Model/MarketData.md)
- [Ommeters](docs/Model/Ommeters.md)
- [Tariffh0](docs/Model/Tariffh0.md)
- [Transactions](docs/Model/Transactions.md)

## Authorization
All endpoints do not require authorization.
## Tests

To run the tests, use:

```bash
composer install
vendor/bin/phpunit
```

## Author

dev@stromdao.com

## About this package

This PHP package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `2.0.0`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`
