/**
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

import * as models from './models';

export interface InlineResponse200 {
    /**
     * Registration status of a user. In case unregistered gets returned use the `register` endpoint to (re-)register.
     */
    status?: InlineResponse200.StatusEnum;

}
export namespace InlineResponse200 {
    export enum StatusEnum {
        Registered = <any> 'registered',
        Unregistered = <any> 'unregistered'
    }
}
