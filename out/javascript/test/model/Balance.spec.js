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
    instance = new CorrentlyIo.Balance();
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

  describe('Balance', function() {
    it('should create an instance of Balance', function() {
      // uncomment below and update the code to test Balance
      //var instane = new CorrentlyIo.Balance();
      //expect(instance).to.be.a(CorrentlyIo.Balance);
    });

    it('should have the property soll (base name: "soll")', function() {
      // uncomment below and update the code to test the property soll
      //var instance = new CorrentlyIo.Balance();
      //expect(instance).to.be();
    });

    it('should have the property haben (base name: "haben")', function() {
      // uncomment below and update the code to test the property haben
      //var instance = new CorrentlyIo.Balance();
      //expect(instance).to.be();
    });

    it('should have the property balance (base name: "balance")', function() {
      // uncomment below and update the code to test the property balance
      //var instance = new CorrentlyIo.Balance();
      //expect(instance).to.be();
    });

    it('should have the property txs (base name: "txs")', function() {
      // uncomment below and update the code to test the property txs
      //var instance = new CorrentlyIo.Balance();
      //expect(instance).to.be();
    });

    it('should have the property variation (base name: "variation")', function() {
      // uncomment below and update the code to test the property variation
      //var instance = new CorrentlyIo.Balance();
      //expect(instance).to.be();
    });

  });

}));
