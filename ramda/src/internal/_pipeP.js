define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = function _pipeP(f, g) {
  return function() {
    var ctx = this;
    return f.apply(ctx, arguments).then(function(x) {
      return g.call(ctx, x);
    });
  };
};

require = requireOrig;});
