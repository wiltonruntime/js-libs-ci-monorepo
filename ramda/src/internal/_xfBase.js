define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  init: function() {
    return this.xf['@@transducer/init']();
  },
  result: function(result) {
    return this.xf['@@transducer/result'](result);
  }
};

require = requireOrig;});
