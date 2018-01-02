define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var take = require('ramda/src/take');

module.exports = function dropLast(n, xs) {
  return take(n < xs.length ? xs.length - n : 0, xs);
};

require = requireOrig;});
