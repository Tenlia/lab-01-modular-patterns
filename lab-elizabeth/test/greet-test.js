'use strict';

const greet = require('../lib/greet');
const assert = require('assert');

describe('testing greet.js module', function(){
  it('should return hello lizzie', function(){
    var result = greet('lizzie');
    assert.equal(result, 'hello lizzie', 'expected "hello lizzie"');
  });
  it('should throw error for missing input', function(){
    assert.throws(function(){
      greet();
    }, 'expected missing name error');
  });
});
