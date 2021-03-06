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
    instance = new CorrentlyIo.InlineObject3();
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

  describe('InlineObject3', function() {
    it('should create an instance of InlineObject3', function() {
      // uncomment below and update the code to test InlineObject3
      //var instane = new CorrentlyIo.InlineObject3();
      //expect(instance).to.be.a(CorrentlyIo.InlineObject3);
    });

    it('should have the property account (base name: "account")', function() {
      // uncomment below and update the code to test the property account
      //var instance = new CorrentlyIo.InlineObject3();
      //expect(instance).to.be();
    });

    it('should have the property secret (base name: "secret")', function() {
      // uncomment below and update the code to test the property secret
      //var instance = new CorrentlyIo.InlineObject3();
      //expect(instance).to.be();
    });

    it('should have the property _180 (base name: "1.8.0")', function() {
      // uncomment below and update the code to test the property _180
      //var instance = new CorrentlyIo.InlineObject3();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instance = new CorrentlyIo.InlineObject3();
      //expect(instance).to.be();
    });

    it('should have the property energy (base name: "energy")', function() {
      // uncomment below and update the code to test the property energy
      //var instance = new CorrentlyIo.InlineObject3();
      //expect(instance).to.be();
    });

    it('should have the property zip (base name: "zip")', function() {
      // uncomment below and update the code to test the property zip
      //var instance = new CorrentlyIo.InlineObject3();
      //expect(instance).to.be();
    });

  });

}));
