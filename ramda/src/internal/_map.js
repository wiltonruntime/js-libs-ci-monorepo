define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
};

require = requireOrig;});
