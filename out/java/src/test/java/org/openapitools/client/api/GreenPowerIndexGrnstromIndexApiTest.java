/*
 * Corrently.io
 * *Corrently - from italian corrente, which is energy* # Introduction The Corrently ecosystem gets maintained by [STROMDAO GmbH](https://www.stromdao.de/) to support green energy services for prosumers, grid operators, regulators, integrators or any other party with an emerging need of consensus driven management. As the [energy product Corrently](https://www.corrently.de/) got first launched in Germany parts of this documentation provide simple translations for better understanding. 
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: dev@stromdao.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import org.openapitools.client.model.InlineResponse2001;
import org.openapitools.client.model.InlineResponse2002;
import org.openapitools.client.model.InlineResponse2003;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for GreenPowerIndexGrnstromIndexApi
 */
@Ignore
public class GreenPowerIndexGrnstromIndexApiTest {

    private final GreenPowerIndexGrnstromIndexApi api = new GreenPowerIndexGrnstromIndexApi();

    
    /**
     * Get best hour (with most regional green energy) in a given timeframe.
     *
     * Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state). 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void gsiBesthourTest() throws ApiException {
        String zip = null;
        String key = null;
        Integer timeframe = null;
        Integer hours = null;
        Boolean response = api.gsiBesthour(zip, key, timeframe, hours);

        // TODO: test validations
    }
    
    /**
     * Dispatch (Green Energy Distribution Schedule)
     *
     * Dispatch of green energy has two aspects to consider:   - Availability of gerneration facility (depends on weather and installed capacity)   - Demand of energy Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic). 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void gsiDispatchTest() throws ApiException {
        String zip = null;
        String key = null;
        InlineResponse2002 response = api.gsiDispatch(zip, key);

        // TODO: test validations
    }
    
    /**
     * Marketdata
     *
     * Compatible to awattar (https://api.awattar.de/v1/marketdata) API interface but data comes from GreenPowerIndex instead of EPEXSpot. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void gsiMarketdataTest() throws ApiException {
        String zip = null;
        InlineResponse2003 response = api.gsiMarketdata(zip);

        // TODO: test validations
    }
    
    /**
     * Prediction
     *
     * Retrieval the GreenPowerIndex (GrünstromIndex) for a given city (by zipcode) in Germany. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void gsiPredictionTest() throws ApiException {
        String zip = null;
        String key = null;
        InlineResponse2001 response = api.gsiPrediction(zip, key);

        // TODO: test validations
    }
    
}
