define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';

const {tagged} = require('daggy');

const fl = require('..');
const {equality} = require('fantasy-land/func');

const Compose = module.exports = tagged('c');
Compose[fl.of] = Compose;
Compose.prototype[fl.ap] = function(f) {
  return Compose(this.c[fl.ap](f.c[fl.map](u => y => y[fl.ap](u))));
};
Compose.prototype[fl.map] = function(f) {
  return Compose(this.c[fl.map](y => y[fl.map](f)));
};
Compose.prototype[fl.equals] = function(x) {
  return equality(this.c, x.c);
};

require = requireOrig;});
