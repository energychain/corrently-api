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
    instance = new CorrentlyIo.InlineResponse2002();
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

  describe('InlineResponse2002', function() {
    it('should create an instance of InlineResponse2002', function() {
      // uncomment below and update the code to test InlineResponse2002
      //var instane = new CorrentlyIo.InlineResponse2002();
      //expect(instance).to.be.a(CorrentlyIo.InlineResponse2002);
    });

    it('should have the property premix (base name: "premix")', function() {
      // uncomment below and update the code to test the property premix
      //var instance = new CorrentlyIo.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property postmix (base name: "postmix")', function() {
      // uncomment below and update the code to test the property postmix
      //var instance = new CorrentlyIo.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property dispatchFrom (base name: "dispatch_from")', function() {
      // uncomment below and update the code to test the property dispatchFrom
      //var instance = new CorrentlyIo.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property dispatchTarget (base name: "dispatch_target")', function() {
      // uncomment below and update the code to test the property dispatchTarget
      //var instance = new CorrentlyIo.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property timeframe (base name: "timeframe")', function() {
      // uncomment below and update the code to test the property timeframe
      //var instance = new CorrentlyIo.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property avgDistanceKm (base name: "avg_distance_km")', function() {
      // uncomment below and update the code to test the property avgDistanceKm
      //var instance = new CorrentlyIo.InlineResponse2002();
      //expect(instance).to.be();
    });

  });

}));