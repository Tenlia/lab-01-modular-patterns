'use strict';

const greet = require('../lib/greet');
const assert = require('assert');

describe('testing greet.js module', function(){
  it('should return hello liz', function(){
    var result = greet('liz');
    assert.equal(result, 'hello liz', 'expected "hello liz"');
  });
});
