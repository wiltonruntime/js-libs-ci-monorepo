define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';

var errorTransform = require('./error.transform').transform;

/**
 * Attach a transform function to math.subset
 * Adds a property transform containing the transform function.
 *
 * This transform creates a range which includes the end value
 */
function factory (type, config, load, typed) {
  var subset = load(require('mathjs/lib/function/matrix/subset'));

  return typed('subset', {
    '...any': function (args) {
      try {
        return subset.apply(null, args);
      }
      catch (err) {
        throw errorTransform(err);
      }
    }
  });
}

exports.name = 'subset';
exports.path = 'expression.transform';
exports.factory = factory;

require = requireOrig;});
