import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { Balance } from '../models/Balance';
import { Componentsh0 } from '../models/Componentsh0';
import { DispatchLocation } from '../models/DispatchLocation';
import { ForecastItem } from '../models/ForecastItem';
import { InlineObject } from '../models/InlineObject';
import { InlineObject1 } from '../models/InlineObject1';
import { InlineObject2 } from '../models/InlineObject2';
import { InlineObject3 } from '../models/InlineObject3';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse2001Location } from '../models/InlineResponse2001Location';
import { InlineResponse2001Matrix } from '../models/InlineResponse2001Matrix';
import { InlineResponse2001MatrixH0 } from '../models/InlineResponse2001MatrixH0';
import { InlineResponse2002 } from '../models/InlineResponse2002';
import { InlineResponse2002Timeframe } from '../models/InlineResponse2002Timeframe';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { InlineResponse2004 } from '../models/InlineResponse2004';
import { InlineResponse2005 } from '../models/InlineResponse2005';
import { InlineResponse2006 } from '../models/InlineResponse2006';
import { MarketData } from '../models/MarketData';
import { Ommeters } from '../models/Ommeters';
import { Tariffh0 } from '../models/Tariffh0';
import { Transactions } from '../models/Transactions';
import { ObservableDispatchGreenEnergyDistributionAPIApi } from './ObservableAPI';

import { DispatchGreenEnergyDistributionAPIApiRequestFactory, DispatchGreenEnergyDistributionAPIApiResponseProcessor} from "../apis/DispatchGreenEnergyDistributionAPIApi";
export class PromiseDispatchGreenEnergyDistributionAPIApi {
    private api: ObservableDispatchGreenEnergyDistributionAPIApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DispatchGreenEnergyDistributionAPIApiRequestFactory,
        responseProcessor?: DispatchGreenEnergyDistributionAPIApiResponseProcessor
    ) {
        this.api = new ObservableDispatchGreenEnergyDistributionAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Dispatch of green energy has two aspects to consider:   - Availability of gerneration facility (depends on weather and installed capacity)   - Demand of energy Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic). 
     * Dispatch (Green Energy Distribution Schedule)
     * @param zip Zipcode (Postleitzahl) of a city in Germany.
     * @param key Any valid Stromkonto account (address).
     */
    public gsiDispatch(zip?: string, key?: string, _options?: Configuration): Promise<InlineResponse2002> {
        const result = this.api.gsiDispatch(zip, key, _options);
        return result.toPromise();
    }


}



import { ObservableGreenPowerIndexGrnstromIndexApi } from './ObservableAPI';

import { GreenPowerIndexGrnstromIndexApiRequestFactory, GreenPowerIndexGrnstromIndexApiResponseProcessor} from "../apis/GreenPowerIndexGrnstromIndexApi";
export class PromiseGreenPowerIndexGrnstromIndexApi {
    private api: ObservableGreenPowerIndexGrnstromIndexApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GreenPowerIndexGrnstromIndexApiRequestFactory,
        responseProcessor?: GreenPowerIndexGrnstromIndexApiResponseProcessor
    ) {
        this.api = new ObservableGreenPowerIndexGrnstromIndexApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state). 
     * Get best hour (with most regional green energy) in a given timeframe.
     * @param zip Zipcode (Postleitzahl) of a city in Germany.
     * @param key Any valid Stromkonto account (address).
     * @param timeframe Number of hours to check (default 24 hours from now).
     * @param hours How many hours in row do you need the device turned on?
     */
    public gsiBesthour(zip?: string, key?: string, timeframe?: number, hours?: number, _options?: Configuration): Promise<boolean> {
        const result = this.api.gsiBesthour(zip, key, timeframe, hours, _options);
        return result.toPromise();
    }

    /**
     * Dispatch of green energy has two aspects to consider:   - Availability of gerneration facility (depends on weather and installed capacity)   - Demand of energy Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic). 
     * Dispatch (Green Energy Distribution Schedule)
     * @param zip Zipcode (Postleitzahl) of a city in Germany.
     * @param key Any valid Stromkonto account (address).
     */
    public gsiDispatch(zip?: string, key?: string, _options?: Configuration): Promise<InlineResponse2002> {
        const result = this.api.gsiDispatch(zip, key, _options);
        return result.toPromise();
    }

    /**
     * Compatible to awattar (https://api.awattar.de/v1/marketdata) API interface but data comes from GreenPowerIndex instead of EPEXSpot. 
     * Marketdata
     * @param zip Zipcode (Postleitzahl) of a city in Germany.
     */
    public gsiMarketdata(zip?: string, _options?: Configuration): Promise<InlineResponse2003> {
        const result = this.api.gsiMarketdata(zip, _options);
        return result.toPromise();
    }

    /**
     * Retrieval the GreenPowerIndex (GrünstromIndex) for a given city (by zipcode) in Germany. 
     * Prediction
     * @param zip Zipcode (Postleitzahl) of a city in Germany.
     * @param key Any valid Stromkonto account (address).
     */
    public gsiPrediction(zip?: string, key?: string, _options?: Configuration): Promise<InlineResponse2001> {
        const result = this.api.gsiPrediction(zip, key, _options);
        return result.toPromise();
    }


}



import { ObservableMeteringDecoratorApi } from './ObservableAPI';

import { MeteringDecoratorApiRequestFactory, MeteringDecoratorApiResponseProcessor} from "../apis/MeteringDecoratorApi";
export class PromiseMeteringDecoratorApi {
    private api: ObservableMeteringDecoratorApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MeteringDecoratorApiRequestFactory,
        responseProcessor?: MeteringDecoratorApiResponseProcessor
    ) {
        this.api = new ObservableMeteringDecoratorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a metered reading using account (Stromkonto). 
     * Meter Reading
     * @param account Account/Address (Stromkonto) to retrieve reading for.
     */
    public meteringGet(account?: string, _options?: Configuration): Promise<InlineResponse2004> {
        const result = this.api.meteringGet(account, _options);
        return result.toPromise();
    }

    /**
     * Post meter reading and get it decorated. Best practice is to first create a new Stromkonto with the register method and choose a nice secret to protect updates. Now regularly send updates to get readings (consumption) split into green power (1.8.1) and grey power (1.8.2). 
     * Meter Reading
     * @param inlineObject3 
     */
    public meteringPost(inlineObject3: InlineObject3, _options?: Configuration): Promise<InlineResponse2005> {
        const result = this.api.meteringPost(inlineObject3, _options);
        return result.toPromise();
    }


}



import { ObservableOpenMETERApi } from './ObservableAPI';

import { OpenMETERApiRequestFactory, OpenMETERApiResponseProcessor} from "../apis/OpenMETERApi";
export class PromiseOpenMETERApi {
    private api: ObservableOpenMETERApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OpenMETERApiRequestFactory,
        responseProcessor?: OpenMETERApiResponseProcessor
    ) {
        this.api = new ObservableOpenMETERApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery. 
     * Public shared smart meters installed in Germany and available for subservices and exploration.
     */
    public omActivities(_options?: Configuration): Promise<Array<Ommeters>> {
        const result = this.api.omActivities(_options);
        return result.toPromise();
    }

    /**
     * Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery. 
     * Public shared smart meters installed in Germany and available for subservices and exploration.
     */
    public omMeters(_options?: Configuration): Promise<Array<Ommeters>> {
        const result = this.api.omMeters(_options);
        return result.toPromise();
    }

    /**
     * Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery. 
     * Public shared smart meters installed in Germany and available for subservices and exploration.
     */
    public omReadings(_options?: Configuration): Promise<Array<Ommeters>> {
        const result = this.api.omReadings(_options);
        return result.toPromise();
    }


}



import { ObservableSmartHomeApi } from './ObservableAPI';

import { SmartHomeApiRequestFactory, SmartHomeApiResponseProcessor} from "../apis/SmartHomeApi";
export class PromiseSmartHomeApi {
    private api: ObservableSmartHomeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SmartHomeApiRequestFactory,
        responseProcessor?: SmartHomeApiResponseProcessor
    ) {
        this.api = new ObservableSmartHomeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state). 
     * Get best hour (with most regional green energy) in a given timeframe.
     * @param zip Zipcode (Postleitzahl) of a city in Germany.
     * @param key Any valid Stromkonto account (address).
     * @param timeframe Number of hours to check (default 24 hours from now).
     * @param hours How many hours in row do you need the device turned on?
     */
    public gsiBesthour(zip?: string, key?: string, timeframe?: number, hours?: number, _options?: Configuration): Promise<boolean> {
        const result = this.api.gsiBesthour(zip, key, timeframe, hours, _options);
        return result.toPromise();
    }


}



import { ObservableStromkontoLedgerApi } from './ObservableAPI';

import { StromkontoLedgerApiRequestFactory, StromkontoLedgerApiResponseProcessor} from "../apis/StromkontoLedgerApi";
export class PromiseStromkontoLedgerApi {
    private api: ObservableStromkontoLedgerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StromkontoLedgerApiRequestFactory,
        responseProcessor?: StromkontoLedgerApiResponseProcessor
    ) {
        this.api = new ObservableStromkontoLedgerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Prepares and inques a transaction (transfer) between two accounts (Stromkonten). This might be used to send any balanced entity. Using this endpoint will only prepare the transaction and enques it for signing and countersigning. This is done from within the user UI using validation process. Note: This API method does not validate any transations. In other words authentication, authorization, validation and actual transfer of value is done using a smart contract during processing in the energy blockchain. 
     * Prepare Transaction
     * @param inlineObject2 
     */
    public prepareTransaction(inlineObject2: InlineObject2, _options?: Configuration): Promise<void> {
        const result = this.api.prepareTransaction(inlineObject2, _options);
        return result.toPromise();
    }

    /**
     * Stromkonto represents a core component of the Corrently Ecosystem. It is a ledger for green energy related transactions and gets heavily used by the public Web-UI on www.stromkonto.net . Beside of some decoration and reformating operations all data is backed by the [Energychain blockchain](https://github.com/energychain/) to provide consensus of balances and transactions. Use this API Endppoint if you prefere not to work with low level Distributed Ledger Technology (Blockchain). 
     * Balances
     * @param account Ethereum style address referencing a valid account (AKA Stromkonto).
     */
    public stromkontoBalances(account?: string, _options?: Configuration): Promise<Array<Balance>> {
        const result = this.api.stromkontoBalances(account, _options);
        return result.toPromise();
    }

    /**
     * Signable choices (contract changes) for customer. 
     * Selectable Choices for customer
     * @param account Ethereum style address referencing a valid account alias (never use Stromkonto directly!).
     */
    public stromkontoChoices(account?: string, _options?: Configuration): Promise<Array<Balance>> {
        const result = this.api.stromkontoChoices(account, _options);
        return result.toPromise();
    }

    /**
     * Sends a mail to a given email address to login this user. This function makes life a bit easier in order to not having to deal with private key protection on the user side as a shared key is used to sign transactions onbehalf of a particular account.  However viewing consensus information (balances) are public and *might move* from account to account without prior notification. Best practice for third party uses is to always start a session with the login RESP call and only create a user in case the response indicates an `unregistered` status. 
     * Login (via Mail)
     * @param inlineObject1 
     */
    public stromkontoLogin(inlineObject1: InlineObject1, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.stromkontoLogin(inlineObject1, _options);
        return result.toPromise();
    }

    /**
     * Calling this method with an unregistered (new) email will create a new account (Stromkonto) with all balances having a value of `0` and no transaction history. In addition some basic properties like region and zipcode are set to allow further operation of account. 
     * Register (new Stromkonto)
     * @param inlineObject 
     */
    public stromkontoRegister(inlineObject: InlineObject, _options?: Configuration): Promise<void> {
        const result = this.api.stromkontoRegister(inlineObject, _options);
        return result.toPromise();
    }


}



import { ObservableTariffPriceAPIApi } from './ObservableAPI';

import { TariffPriceAPIApiRequestFactory, TariffPriceAPIApiResponseProcessor} from "../apis/TariffPriceAPIApi";
export class PromiseTariffPriceAPIApi {
    private api: ObservableTariffPriceAPIApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TariffPriceAPIApiRequestFactory,
        responseProcessor?: TariffPriceAPIApiResponseProcessor
    ) {
        this.api = new ObservableTariffPriceAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Provides pricing data for private households with standard load profiles (Standardlastprofil H0). 
     * Energy Tariff information
     * @param zipcode Zipcode (Postzleitzahl) of a city in Germany.
     */
    public tariffSLPH0(zipcode?: string, _options?: Configuration): Promise<Array<Tariffh0>> {
        const result = this.api.tariffSLPH0(zipcode, _options);
        return result.toPromise();
    }

    /**
     * Provides insides into the different cost components of energy for a private household. Sample Request: https://api.corrently.io/v2.0/tariff/components?email=demo%40corrently.io&zip=69168&kwha=3300 
     * Energy Tariff price components
     * @param zipcode Zipcode (Postzleitzahl) of a city in Germany.
     * @param email Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time
     * @param kwha Total amount of energy in kilo-watt-hours per year. (sample 2100)
     * @param milliseconds If provided all results will be scaled to this timeframe
     * @param wh If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created.
     */
    public tariffcomponents(zipcode?: string, email?: string, kwha?: number, milliseconds?: number, wh?: number, _options?: Configuration): Promise<Componentsh0> {
        const result = this.api.tariffcomponents(zipcode, email, kwha, milliseconds, wh, _options);
        return result.toPromise();
    }


}



import { ObservableWiMWechselprozesseImMesswesenStromStatusAPIApi } from './ObservableAPI';

import { WiMWechselprozesseImMesswesenStromStatusAPIApiRequestFactory, WiMWechselprozesseImMesswesenStromStatusAPIApiResponseProcessor} from "../apis/WiMWechselprozesseImMesswesenStromStatusAPIApi";
export class PromiseWiMWechselprozesseImMesswesenStromStatusAPIApi {
    private api: ObservableWiMWechselprozesseImMesswesenStromStatusAPIApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WiMWechselprozesseImMesswesenStromStatusAPIApiRequestFactory,
        responseProcessor?: WiMWechselprozesseImMesswesenStromStatusAPIApiResponseProcessor
    ) {
        this.api = new ObservableWiMWechselprozesseImMesswesenStromStatusAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Access to status information of an existing metering change and allocation process. 
     * WiM Proess Informtion
     * @param vid VID key of the process.
     */
    public wimstatus(vid?: string, _options?: Configuration): Promise<InlineResponse2006> {
        const result = this.api.wimstatus(vid, _options);
        return result.toPromise();
    }


}



