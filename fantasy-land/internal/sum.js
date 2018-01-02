define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';

const {tagged} = require('daggy');

const fl = require('..');
const {equality} = require('fantasy-land/func');

const Sum = module.exports = tagged('v');

Sum[fl.of] = Sum;
Sum[fl.empty] = () => Sum(0);
Sum.prototype[fl.map] = function(f) {
  return Sum(f(this.v));
};
Sum.prototype[fl.concat] = function(x) {
  return Sum(this.v + x.v);
};
Sum.prototype[fl.equals] = function(x) {
  return equality(this.v, x.v);
};
Sum.prototype[fl.invert] = function() {
  return Sum(this.v >= 0 ? -Math.abs(this.v) : Math.abs(this.v));
};

require = requireOrig;});
