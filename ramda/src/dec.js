define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var add = require('ramda/src/add');


/**
 * Decrements its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n - 1
 * @see R.inc
 * @example
 *
 *      R.dec(42); //=> 41
 */
module.exports = add(-1);

require = requireOrig;});
