var chai = require('chai');
var assert = chai.assert;

var thingController = require('./../src/server/api/things/thing.controller');

describe('things controller', function(){
  describe('functionToTestInExampleSpec', function() {
    it('should return the number 4 for no reason at all', function *(){
      assert.equal(thingController.functionToTestInExampleSpec(), 4);
      assert.equal(4, 4);
    })
  })
})