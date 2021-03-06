/*
 * Corrently.io
 * *Corrently - from italian corrente, which is energy* # Introduction The Corrently ecosystem gets maintained by [STROMDAO GmbH](https://www.stromdao.de/) to support green energy services for prosumers, grid operators, regulators, integrators or any other party with an emerging need of consensus driven management. As the [energy product Corrently](https://www.corrently.de/) got first launched in Germany parts of this documentation provide simple translations for better understanding. [Released SKDs for Download](https://github.com/energychain/corrently-api/releases) 
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
import org.openapitools.client.model.EaseeCharger;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for EaseeApi
 */
@Ignore
public class EaseeApiTest {

    private final EaseeApi api = new EaseeApi();

    
    /**
     * Returns lastSession info for all easee wallboxes (chargers) given user has access to.
     *
     * Refer to easee.cloud API for details. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void easeeSessionsTest() throws ApiException {
        String username = null;
        String password = null;
        List<EaseeCharger> response = api.easeeSessions(username, password);

        // TODO: test validations
    }
    
}
