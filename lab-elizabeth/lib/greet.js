'use strict';

module.exports = function greet(name) {
  if(!name) throw new Error('expected name');
  return `hello ${name}`;
};
