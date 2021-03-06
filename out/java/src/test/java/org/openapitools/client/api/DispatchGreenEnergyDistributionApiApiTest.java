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
import org.openapitools.client.model.InlineResponse2002;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for DispatchGreenEnergyDistributionApiApi
 */
@Ignore
public class DispatchGreenEnergyDistributionApiApiTest {

    private final DispatchGreenEnergyDistributionApiApi api = new DispatchGreenEnergyDistributionApiApi();

    
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
    
}
