define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = function _pipe(f, g) {
  return function() {
    return g.call(this, f.apply(this, arguments));
  };
};

require = requireOrig;});
