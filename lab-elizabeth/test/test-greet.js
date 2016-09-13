'use strict';

const greet = require('../lib/greet');
const assert = require('assert');

describe('testing greet.js module', function(){
  it('should return hello lizzie', function(){
    var result = greet('lizzie');
    assert.equal(result, 'hello lizzie', 'expected "hello lizzie"');
  });
});
