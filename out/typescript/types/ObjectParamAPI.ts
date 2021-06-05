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

import { ObservableDispatchGreenEnergyDistributionAPIApi } from "./ObservableAPI";
import { DispatchGreenEnergyDistributionAPIApiRequestFactory, DispatchGreenEnergyDistributionAPIApiResponseProcessor} from "../apis/DispatchGreenEnergyDistributionAPIApi";

export interface DispatchGreenEnergyDistributionAPIApiGsiDispatchRequest {
    /**
     * Zipcode (Postleitzahl) of a city in Germany.
     * @type string
     * @memberof DispatchGreenEnergyDistributionAPIApigsiDispatch
     */
    zip?: string
    /**
     * Any valid Stromkonto account (address).
     * @type string
     * @memberof DispatchGreenEnergyDistributionAPIApigsiDispatch
     */
    key?: string
}

export class ObjectDispatchGreenEnergyDistributionAPIApi {
    private api: ObservableDispatchGreenEnergyDistributionAPIApi

    public constructor(configuration: Configuration, requestFactory?: DispatchGreenEnergyDistributionAPIApiRequestFactory, responseProcessor?: DispatchGreenEnergyDistributionAPIApiResponseProcessor) {
        this.api = new ObservableDispatchGreenEnergyDistributionAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Dispatch of green energy has two aspects to consider:   - Availability of gerneration facility (depends on weather and installed capacity)   - Demand of energy Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic). 
     * Dispatch (Green Energy Distribution Schedule)
     * @param param the request object
     */
    public gsiDispatch(param: DispatchGreenEnergyDistributionAPIApiGsiDispatchRequest, options?: Configuration): Promise<InlineResponse2002> {
        return this.api.gsiDispatch(param.zip, param.key,  options).toPromise();
    }

}

import { ObservableGreenPowerIndexGrnstromIndexApi } from "./ObservableAPI";
import { GreenPowerIndexGrnstromIndexApiRequestFactory, GreenPowerIndexGrnstromIndexApiResponseProcessor} from "../apis/GreenPowerIndexGrnstromIndexApi";

export interface GreenPowerIndexGrnstromIndexApiGsiBesthourRequest {
    /**
     * Zipcode (Postleitzahl) of a city in Germany.
     * @type string
     * @memberof GreenPowerIndexGrnstromIndexApigsiBesthour
     */
    zip?: string
    /**
     * Any valid Stromkonto account (address).
     * @type string
     * @memberof GreenPowerIndexGrnstromIndexApigsiBesthour
     */
    key?: string
    /**
     * Number of hours to check (default 24 hours from now).
     * @type number
     * @memberof GreenPowerIndexGrnstromIndexApigsiBesthour
     */
    timeframe?: number
    /**
     * How many hours in row do you need the device turned on?
     * @type number
     * @memberof GreenPowerIndexGrnstromIndexApigsiBesthour
     */
    hours?: number
}

export interface GreenPowerIndexGrnstromIndexApiGsiDispatchRequest {
    /**
     * Zipcode (Postleitzahl) of a city in Germany.
     * @type string
     * @memberof GreenPowerIndexGrnstromIndexApigsiDispatch
     */
    zip?: string
    /**
     * Any valid Stromkonto account (address).
     * @type string
     * @memberof GreenPowerIndexGrnstromIndexApigsiDispatch
     */
    key?: string
}

export interface GreenPowerIndexGrnstromIndexApiGsiMarketdataRequest {
    /**
     * Zipcode (Postleitzahl) of a city in Germany.
     * @type string
     * @memberof GreenPowerIndexGrnstromIndexApigsiMarketdata
     */
    zip?: string
}

export interface GreenPowerIndexGrnstromIndexApiGsiPredictionRequest {
    /**
     * Zipcode (Postleitzahl) of a city in Germany.
     * @type string
     * @memberof GreenPowerIndexGrnstromIndexApigsiPrediction
     */
    zip?: string
    /**
     * Any valid Stromkonto account (address).
     * @type string
     * @memberof GreenPowerIndexGrnstromIndexApigsiPrediction
     */
    key?: string
}

export class ObjectGreenPowerIndexGrnstromIndexApi {
    private api: ObservableGreenPowerIndexGrnstromIndexApi

    public constructor(configuration: Configuration, requestFactory?: GreenPowerIndexGrnstromIndexApiRequestFactory, responseProcessor?: GreenPowerIndexGrnstromIndexApiResponseProcessor) {
        this.api = new ObservableGreenPowerIndexGrnstromIndexApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state). 
     * Get best hour (with most regional green energy) in a given timeframe.
     * @param param the request object
     */
    public gsiBesthour(param: GreenPowerIndexGrnstromIndexApiGsiBesthourRequest, options?: Configuration): Promise<boolean> {
        return this.api.gsiBesthour(param.zip, param.key, param.timeframe, param.hours,  options).toPromise();
    }

    /**
     * Dispatch of green energy has two aspects to consider:   - Availability of gerneration facility (depends on weather and installed capacity)   - Demand of energy Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic). 
     * Dispatch (Green Energy Distribution Schedule)
     * @param param the request object
     */
    public gsiDispatch(param: GreenPowerIndexGrnstromIndexApiGsiDispatchRequest, options?: Configuration): Promise<InlineResponse2002> {
        return this.api.gsiDispatch(param.zip, param.key,  options).toPromise();
    }

    /**
     * Compatible to awattar (https://api.awattar.de/v1/marketdata) API interface but data comes from GreenPowerIndex instead of EPEXSpot. 
     * Marketdata
     * @param param the request object
     */
    public gsiMarketdata(param: GreenPowerIndexGrnstromIndexApiGsiMarketdataRequest, options?: Configuration): Promise<InlineResponse2003> {
        return this.api.gsiMarketdata(param.zip,  options).toPromise();
    }

    /**
     * Retrieval the GreenPowerIndex (GrünstromIndex) for a given city (by zipcode) in Germany. 
     * Prediction
     * @param param the request object
     */
    public gsiPrediction(param: GreenPowerIndexGrnstromIndexApiGsiPredictionRequest, options?: Configuration): Promise<InlineResponse2001> {
        return this.api.gsiPrediction(param.zip, param.key,  options).toPromise();
    }

}

import { ObservableMeteringDecoratorApi } from "./ObservableAPI";
import { MeteringDecoratorApiRequestFactory, MeteringDecoratorApiResponseProcessor} from "../apis/MeteringDecoratorApi";

export interface MeteringDecoratorApiMeteringGetRequest {
    /**
     * Account/Address (Stromkonto) to retrieve reading for.
     * @type string
     * @memberof MeteringDecoratorApimeteringGet
     */
    account?: string
}

export interface MeteringDecoratorApiMeteringPostRequest {
    /**
     * 
     * @type InlineObject3
     * @memberof MeteringDecoratorApimeteringPost
     */
    inlineObject3: InlineObject3
}

export class ObjectMeteringDecoratorApi {
    private api: ObservableMeteringDecoratorApi

    public constructor(configuration: Configuration, requestFactory?: MeteringDecoratorApiRequestFactory, responseProcessor?: MeteringDecoratorApiResponseProcessor) {
        this.api = new ObservableMeteringDecoratorApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a metered reading using account (Stromkonto). 
     * Meter Reading
     * @param param the request object
     */
    public meteringGet(param: MeteringDecoratorApiMeteringGetRequest, options?: Configuration): Promise<InlineResponse2004> {
        return this.api.meteringGet(param.account,  options).toPromise();
    }

    /**
     * Post meter reading and get it decorated. Best practice is to first create a new Stromkonto with the register method and choose a nice secret to protect updates. Now regularly send updates to get readings (consumption) split into green power (1.8.1) and grey power (1.8.2). 
     * Meter Reading
     * @param param the request object
     */
    public meteringPost(param: MeteringDecoratorApiMeteringPostRequest, options?: Configuration): Promise<InlineResponse2005> {
        return this.api.meteringPost(param.inlineObject3,  options).toPromise();
    }

}

import { ObservableOpenMETERApi } from "./ObservableAPI";
import { OpenMETERApiRequestFactory, OpenMETERApiResponseProcessor} from "../apis/OpenMETERApi";

export interface OpenMETERApiOmActivitiesRequest {
}

export interface OpenMETERApiOmMetersRequest {
}

export interface OpenMETERApiOmReadingsRequest {
}

export class ObjectOpenMETERApi {
    private api: ObservableOpenMETERApi

    public constructor(configuration: Configuration, requestFactory?: OpenMETERApiRequestFactory, responseProcessor?: OpenMETERApiResponseProcessor) {
        this.api = new ObservableOpenMETERApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery. 
     * Public shared smart meters installed in Germany and available for subservices and exploration.
     * @param param the request object
     */
    public omActivities(param: OpenMETERApiOmActivitiesRequest, options?: Configuration): Promise<Array<Ommeters>> {
        return this.api.omActivities( options).toPromise();
    }

    /**
     * Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery. 
     * Public shared smart meters installed in Germany and available for subservices and exploration.
     * @param param the request object
     */
    public omMeters(param: OpenMETERApiOmMetersRequest, options?: Configuration): Promise<Array<Ommeters>> {
        return this.api.omMeters( options).toPromise();
    }

    /**
     * Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery. 
     * Public shared smart meters installed in Germany and available for subservices and exploration.
     * @param param the request object
     */
    public omReadings(param: OpenMETERApiOmReadingsRequest, options?: Configuration): Promise<Array<Ommeters>> {
        return this.api.omReadings( options).toPromise();
    }

}

import { ObservableSmartHomeApi } from "./ObservableAPI";
import { SmartHomeApiRequestFactory, SmartHomeApiResponseProcessor} from "../apis/SmartHomeApi";

export interface SmartHomeApiGsiBesthourRequest {
    /**
     * Zipcode (Postleitzahl) of a city in Germany.
     * @type string
     * @memberof SmartHomeApigsiBesthour
     */
    zip?: string
    /**
     * Any valid Stromkonto account (address).
     * @type string
     * @memberof SmartHomeApigsiBesthour
     */
    key?: string
    /**
     * Number of hours to check (default 24 hours from now).
     * @type number
     * @memberof SmartHomeApigsiBesthour
     */
    timeframe?: number
    /**
     * How many hours in row do you need the device turned on?
     * @type number
     * @memberof SmartHomeApigsiBesthour
     */
    hours?: number
}

export class ObjectSmartHomeApi {
    private api: ObservableSmartHomeApi

    public constructor(configuration: Configuration, requestFactory?: SmartHomeApiRequestFactory, responseProcessor?: SmartHomeApiResponseProcessor) {
        this.api = new ObservableSmartHomeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state). 
     * Get best hour (with most regional green energy) in a given timeframe.
     * @param param the request object
     */
    public gsiBesthour(param: SmartHomeApiGsiBesthourRequest, options?: Configuration): Promise<boolean> {
        return this.api.gsiBesthour(param.zip, param.key, param.timeframe, param.hours,  options).toPromise();
    }

}

import { ObservableStromkontoLedgerApi } from "./ObservableAPI";
import { StromkontoLedgerApiRequestFactory, StromkontoLedgerApiResponseProcessor} from "../apis/StromkontoLedgerApi";

export interface StromkontoLedgerApiPrepareTransactionRequest {
    /**
     * 
     * @type InlineObject2
     * @memberof StromkontoLedgerApiprepareTransaction
     */
    inlineObject2: InlineObject2
}

export interface StromkontoLedgerApiStromkontoBalancesRequest {
    /**
     * Ethereum style address referencing a valid account (AKA Stromkonto).
     * @type string
     * @memberof StromkontoLedgerApistromkontoBalances
     */
    account?: string
}

export interface StromkontoLedgerApiStromkontoChoicesRequest {
    /**
     * Ethereum style address referencing a valid account alias (never use Stromkonto directly!).
     * @type string
     * @memberof StromkontoLedgerApistromkontoChoices
     */
    account?: string
}

export interface StromkontoLedgerApiStromkontoLoginRequest {
    /**
     * 
     * @type InlineObject1
     * @memberof StromkontoLedgerApistromkontoLogin
     */
    inlineObject1: InlineObject1
}

export interface StromkontoLedgerApiStromkontoRegisterRequest {
    /**
     * 
     * @type InlineObject
     * @memberof StromkontoLedgerApistromkontoRegister
     */
    inlineObject: InlineObject
}

export class ObjectStromkontoLedgerApi {
    private api: ObservableStromkontoLedgerApi

    public constructor(configuration: Configuration, requestFactory?: StromkontoLedgerApiRequestFactory, responseProcessor?: StromkontoLedgerApiResponseProcessor) {
        this.api = new ObservableStromkontoLedgerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Prepares and inques a transaction (transfer) between two accounts (Stromkonten). This might be used to send any balanced entity. Using this endpoint will only prepare the transaction and enques it for signing and countersigning. This is done from within the user UI using validation process. Note: This API method does not validate any transations. In other words authentication, authorization, validation and actual transfer of value is done using a smart contract during processing in the energy blockchain. 
     * Prepare Transaction
     * @param param the request object
     */
    public prepareTransaction(param: StromkontoLedgerApiPrepareTransactionRequest, options?: Configuration): Promise<void> {
        return this.api.prepareTransaction(param.inlineObject2,  options).toPromise();
    }

    /**
     * Stromkonto represents a core component of the Corrently Ecosystem. It is a ledger for green energy related transactions and gets heavily used by the public Web-UI on www.stromkonto.net . Beside of some decoration and reformating operations all data is backed by the [Energychain blockchain](https://github.com/energychain/) to provide consensus of balances and transactions. Use this API Endppoint if you prefere not to work with low level Distributed Ledger Technology (Blockchain). 
     * Balances
     * @param param the request object
     */
    public stromkontoBalances(param: StromkontoLedgerApiStromkontoBalancesRequest, options?: Configuration): Promise<Array<Balance>> {
        return this.api.stromkontoBalances(param.account,  options).toPromise();
    }

    /**
     * Signable choices (contract changes) for customer. 
     * Selectable Choices for customer
     * @param param the request object
     */
    public stromkontoChoices(param: StromkontoLedgerApiStromkontoChoicesRequest, options?: Configuration): Promise<Array<Balance>> {
        return this.api.stromkontoChoices(param.account,  options).toPromise();
    }

    /**
     * Sends a mail to a given email address to login this user. This function makes life a bit easier in order to not having to deal with private key protection on the user side as a shared key is used to sign transactions onbehalf of a particular account.  However viewing consensus information (balances) are public and *might move* from account to account without prior notification. Best practice for third party uses is to always start a session with the login RESP call and only create a user in case the response indicates an `unregistered` status. 
     * Login (via Mail)
     * @param param the request object
     */
    public stromkontoLogin(param: StromkontoLedgerApiStromkontoLoginRequest, options?: Configuration): Promise<InlineResponse200> {
        return this.api.stromkontoLogin(param.inlineObject1,  options).toPromise();
    }

    /**
     * Calling this method with an unregistered (new) email will create a new account (Stromkonto) with all balances having a value of `0` and no transaction history. In addition some basic properties like region and zipcode are set to allow further operation of account. 
     * Register (new Stromkonto)
     * @param param the request object
     */
    public stromkontoRegister(param: StromkontoLedgerApiStromkontoRegisterRequest, options?: Configuration): Promise<void> {
        return this.api.stromkontoRegister(param.inlineObject,  options).toPromise();
    }

}

import { ObservableTariffPriceAPIApi } from "./ObservableAPI";
import { TariffPriceAPIApiRequestFactory, TariffPriceAPIApiResponseProcessor} from "../apis/TariffPriceAPIApi";

export interface TariffPriceAPIApiTariffSLPH0Request {
    /**
     * Zipcode (Postzleitzahl) of a city in Germany.
     * @type string
     * @memberof TariffPriceAPIApitariffSLPH0
     */
    zipcode?: string
}

export interface TariffPriceAPIApiTariffcomponentsRequest {
    /**
     * Zipcode (Postzleitzahl) of a city in Germany.
     * @type string
     * @memberof TariffPriceAPIApitariffcomponents
     */
    zipcode?: string
    /**
     * Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time
     * @type string
     * @memberof TariffPriceAPIApitariffcomponents
     */
    email?: string
    /**
     * Total amount of energy in kilo-watt-hours per year. (sample 2100)
     * @type number
     * @memberof TariffPriceAPIApitariffcomponents
     */
    kwha?: number
    /**
     * If provided all results will be scaled to this timeframe
     * @type number
     * @memberof TariffPriceAPIApitariffcomponents
     */
    milliseconds?: number
    /**
     * If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created.
     * @type number
     * @memberof TariffPriceAPIApitariffcomponents
     */
    wh?: number
}

export class ObjectTariffPriceAPIApi {
    private api: ObservableTariffPriceAPIApi

    public constructor(configuration: Configuration, requestFactory?: TariffPriceAPIApiRequestFactory, responseProcessor?: TariffPriceAPIApiResponseProcessor) {
        this.api = new ObservableTariffPriceAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Provides pricing data for private households with standard load profiles (Standardlastprofil H0). 
     * Energy Tariff information
     * @param param the request object
     */
    public tariffSLPH0(param: TariffPriceAPIApiTariffSLPH0Request, options?: Configuration): Promise<Array<Tariffh0>> {
        return this.api.tariffSLPH0(param.zipcode,  options).toPromise();
    }

    /**
     * Provides insides into the different cost components of energy for a private household. Sample Request: https://api.corrently.io/v2.0/tariff/components?email=demo%40corrently.io&zip=69168&kwha=3300 
     * Energy Tariff price components
     * @param param the request object
     */
    public tariffcomponents(param: TariffPriceAPIApiTariffcomponentsRequest, options?: Configuration): Promise<Componentsh0> {
        return this.api.tariffcomponents(param.zipcode, param.email, param.kwha, param.milliseconds, param.wh,  options).toPromise();
    }

}

import { ObservableWiMWechselprozesseImMesswesenStromStatusAPIApi } from "./ObservableAPI";
import { WiMWechselprozesseImMesswesenStromStatusAPIApiRequestFactory, WiMWechselprozesseImMesswesenStromStatusAPIApiResponseProcessor} from "../apis/WiMWechselprozesseImMesswesenStromStatusAPIApi";

export interface WiMWechselprozesseImMesswesenStromStatusAPIApiWimstatusRequest {
    /**
     * VID key of the process.
     * @type string
     * @memberof WiMWechselprozesseImMesswesenStromStatusAPIApiwimstatus
     */
    vid?: string
}

export class ObjectWiMWechselprozesseImMesswesenStromStatusAPIApi {
    private api: ObservableWiMWechselprozesseImMesswesenStromStatusAPIApi

    public constructor(configuration: Configuration, requestFactory?: WiMWechselprozesseImMesswesenStromStatusAPIApiRequestFactory, responseProcessor?: WiMWechselprozesseImMesswesenStromStatusAPIApiResponseProcessor) {
        this.api = new ObservableWiMWechselprozesseImMesswesenStromStatusAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Access to status information of an existing metering change and allocation process. 
     * WiM Proess Informtion
     * @param param the request object
     */
    public wimstatus(param: WiMWechselprozesseImMesswesenStromStatusAPIApiWimstatusRequest, options?: Configuration): Promise<InlineResponse2006> {
        return this.api.wimstatus(param.vid,  options).toPromise();
    }

}
