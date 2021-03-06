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
import org.openapitools.client.model.Componentsh0;
import org.openapitools.client.model.Tariffh0;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for TariffPriceApiApi
 */
@Ignore
public class TariffPriceApiApiTest {

    private final TariffPriceApiApi api = new TariffPriceApiApi();

    
    /**
     * Energy Tariff information
     *
     * Provides pricing data for private households with standard load profiles (Standardlastprofil H0). 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void tariffSLPH0Test() throws ApiException {
        String zipcode = null;
        List<Tariffh0> response = api.tariffSLPH0(zipcode);

        // TODO: test validations
    }
    
    /**
     * Energy Tariff price components
     *
     * Provides insides into the different cost components of energy for a private household. Sample Request: https://api.corrently.io/v2.0/tariff/components?email&#x3D;demo%40corrently.io&amp;zip&#x3D;69168&amp;kwha&#x3D;3300 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void tariffcomponentsTest() throws ApiException {
        String zipcode = null;
        String email = null;
        Integer kwha = null;
        Integer milliseconds = null;
        Integer wh = null;
        Componentsh0 response = api.tariffcomponents(zipcode, email, kwha, milliseconds, wh);

        // TODO: test validations
    }
    
}
