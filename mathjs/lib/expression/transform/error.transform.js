define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
var IndexError = require('../../error/IndexError');

/**
 * Transform zero-based indices to one-based indices in errors
 * @param {Error} err
 * @returns {Error} Returns the transformed error
 */
exports.transform = function (err) {
  if (err && err.isIndexError) {
    return new IndexError(
        err.index + 1,
        err.min + 1,
        err.max !== undefined ? err.max + 1 : undefined);
  }

  return err;
};

require = requireOrig;});
