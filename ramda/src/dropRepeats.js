define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var _curry1 = require('ramda/src/internal/_curry1');
var _dispatchable = require('ramda/src/internal/_dispatchable');
var _xdropRepeatsWith = require('ramda/src/internal/_xdropRepeatsWith');
var dropRepeatsWith = require('ramda/src/dropRepeatsWith');
var equals = require('ramda/src/equals');


/**
 * Returns a new list without any consecutively repeating elements.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
 */
module.exports = _curry1(_dispatchable([], _xdropRepeatsWith(equals), dropRepeatsWith(equals)));

require = requireOrig;});
