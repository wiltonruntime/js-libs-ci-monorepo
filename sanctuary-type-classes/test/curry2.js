define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';

var eq = require('sanctuary-type-classes/test/eq');


//  curry2 :: ((a, b) -> c) -> (a -> b -> c)
module.exports = function curry2(f) {
  eq(arguments.length, curry2.length);
  return function curry2$1(x) {
    eq(arguments.length, curry2$1.length);
    return function curry2$2(y) {
      eq(arguments.length, curry2$2.length);
      return f(x, y);
    };
  };
};

require = requireOrig;});
