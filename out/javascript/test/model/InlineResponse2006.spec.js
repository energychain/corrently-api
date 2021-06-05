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
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CorrentlyIo);
  }
}(this, function(expect, CorrentlyIo) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CorrentlyIo.InlineResponse2006();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse2006', function() {
    it('should create an instance of InlineResponse2006', function() {
      // uncomment below and update the code to test InlineResponse2006
      //var instane = new CorrentlyIo.InlineResponse2006();
      //expect(instance).to.be.a(CorrentlyIo.InlineResponse2006);
    });

    it('should have the property wimStatus (base name: "wim_status")', function() {
      // uncomment below and update the code to test the property wimStatus
      //var instance = new CorrentlyIo.InlineResponse2006();
      //expect(instance).to.be();
    });

    it('should have the property wimStarted (base name: "wim_started")', function() {
      // uncomment below and update the code to test the property wimStarted
      //var instance = new CorrentlyIo.InlineResponse2006();
      //expect(instance).to.be();
    });

  });

}));
