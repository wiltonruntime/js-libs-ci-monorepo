define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var _arity = require('ramda/src/internal/_arity');
var _curry2 = require('ramda/src/internal/_curry2');


module.exports = function _createPartialApplicator(concat) {
  return _curry2(function(fn, args) {
    return _arity(Math.max(0, fn.length - args.length), function() {
      return fn.apply(this, concat(args, arguments));
    });
  });
};

require = requireOrig;});
