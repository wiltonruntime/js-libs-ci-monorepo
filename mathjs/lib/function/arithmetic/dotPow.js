define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';

function factory (type, config, load, typed) {

  var matrix = load(require('mathjs/lib/type/matrix/function/matrix'));
  var pow = load(require('mathjs/lib/function/arithmetic/pow'));
  var latex = require('mathjs/lib/utils/latex');

  var algorithm03 = load(require('mathjs/lib/type/matrix/utils/algorithm03'));
  var algorithm07 = load(require('mathjs/lib/type/matrix/utils/algorithm07'));
  var algorithm11 = load(require('mathjs/lib/type/matrix/utils/algorithm11'));
  var algorithm12 = load(require('mathjs/lib/type/matrix/utils/algorithm12'));
  var algorithm13 = load(require('mathjs/lib/type/matrix/utils/algorithm13'));
  var algorithm14 = load(require('mathjs/lib/type/matrix/utils/algorithm14'));

  /**
   * Calculates the power of x to y element wise.
   *
   * Syntax:
   *
   *    math.dotPow(x, y)
   *
   * Examples:
   *
   *    math.dotPow(2, 3);            // returns number 8
   *
   *    var a = [[1, 2], [4, 3]];
   *    math.dotPow(a, 2);            // returns Array [[1, 4], [16, 9]]
   *    math.pow(a, 2);               // returns Array [[9, 8], [16, 17]]
   *
   * See also:
   *
   *    pow, sqrt, multiply
   *
   * @param  {number | BigNumber | Complex | Unit | Array | Matrix} x  The base
   * @param  {number | BigNumber | Complex | Unit | Array | Matrix} y  The exponent
   * @return {number | BigNumber | Complex | Unit | Array | Matrix}                     The value of `x` to the power `y`
   */
  var dotPow = typed('dotPow', {
    
    'any, any': pow,

    'SparseMatrix, SparseMatrix': function(x, y) {
      return algorithm07(x, y, pow, false);
    },

    'SparseMatrix, DenseMatrix': function(x, y) {
      return algorithm03(y, x, pow, true);
    },

    'DenseMatrix, SparseMatrix': function(x, y) {
      return algorithm03(x, y, pow, false);
    },

    'DenseMatrix, DenseMatrix': function(x, y) {
      return algorithm13(x, y, pow);
    },

    'Array, Array': function (x, y) {
      // use matrix implementation
      return dotPow(matrix(x), matrix(y)).valueOf();
    },

    'Array, Matrix': function (x, y) {
      // use matrix implementation
      return dotPow(matrix(x), y);
    },

    'Matrix, Array': function (x, y) {
      // use matrix implementation
      return dotPow(x, matrix(y));
    },

    'SparseMatrix, any': function (x, y) {
      return algorithm11(x, y, dotPow, false);
    },

    'DenseMatrix, any': function (x, y) {
      return algorithm14(x, y, dotPow, false);
    },

    'any, SparseMatrix': function (x, y) {
      return algorithm12(y, x, dotPow, true);
    },

    'any, DenseMatrix': function (x, y) {
      return algorithm14(y, x, dotPow, true);
    },

    'Array, any': function (x, y) {
      // use matrix implementation
      return algorithm14(matrix(x), y, dotPow, false).valueOf();
    },

    'any, Array': function (x, y) {
      // use matrix implementation
      return algorithm14(matrix(y), x, dotPow, true).valueOf();
    }
  });

  dotPow.toTex = {
    2: '\\left(${args[0]}' + latex.operators['dotPow'] + '${args[1]}\\right)'
  };
  
  return dotPow;
}

exports.name = 'dotPow';
exports.factory = factory;

require = requireOrig;});
