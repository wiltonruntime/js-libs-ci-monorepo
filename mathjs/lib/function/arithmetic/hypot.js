define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';

var flatten = require('../../utils/array').flatten;

function factory (type, config, load, typed) {
  var abs = load(require('mathjs/lib/function/arithmetic/abs'));
  var add = load(require('mathjs/lib/function/arithmetic/addScalar'));
  var divide = load(require('mathjs/lib/function/arithmetic/divideScalar'));
  var multiply = load(require('mathjs/lib/function/arithmetic/multiplyScalar'));
  var sqrt = load(require('mathjs/lib/function/arithmetic/sqrt'));
  var smaller = load(require('mathjs/lib/function/relational/smaller'));
  var isPositive = load(require('mathjs/lib/function/utils/isPositive'));

  /**
   * Calculate the hypotenusa of a list with values. The hypotenusa is defined as:
   *
   *     hypot(a, b, c, ...) = sqrt(a^2 + b^2 + c^2 + ...)
   *
   * For matrix input, the hypotenusa is calculated for all values in the matrix.
   *
   * Syntax:
   *
   *     math.hypot(a, b, ...)
   *     math.hypot([a, b, c, ...])
   *
   * Examples:
   *
   *     math.hypot(3, 4);      // 5
   *     math.hypot(3, 4, 5);   // 7.0710678118654755
   *     math.hypot([3, 4, 5]); // 7.0710678118654755
   *     math.hypot(-2);        // 2
   *
   * See also:
   *
   *     abs, norm
   *
   * @param {... number | BigNumber | Array | Matrix} args    A list with numeric values or an Array or Matrix.
   *                                                          Matrix and Array input is flattened and returns a
   *                                                          single number for the whole matrix.
   * @return {number | BigNumber} Returns the hypothenusa of the input values.
   */
  var hypot = typed('hypot', {
    '... number | BigNumber': _hypot,

    'Array': function (x) {
      return hypot.apply(hypot, flatten(x));
    },

    'Matrix': function (x) {
      return hypot.apply(hypot, flatten(x.toArray()));
    }
  });

  /**
   * Calculate the hypotenusa for an Array with values
   * @param {Array.<number | BigNumber>} args
   * @return {number | BigNumber} Returns the result
   * @private
   */
  function _hypot (args) {
    // code based on `hypot` from es6-shim:
    // https://github.com/paulmillr/es6-shim/blob/master/es6-shim.js#L1619-L1633
    var result = 0;
    var largest = 0;

    for (var i = 0; i < args.length; i++) {
      var value = abs(args[i]);
      if (smaller(largest, value)) {
        result = multiply(result, multiply(divide(largest, value), divide(largest, value)));
        result = add(result, 1);
        largest = value;
      } else {
        result = add(result, isPositive(value) ? multiply(divide(value, largest), divide(value, largest)) : value);
      }
    }

    return multiply(largest, sqrt(result));
  }

  hypot.toTex = '\\hypot\\left(${args}\\right)';

  return hypot;
}

exports.name = 'hypot';
exports.factory = factory;

require = requireOrig;});
