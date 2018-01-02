define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = {
  server: {
    options: {
      hostname: 'localhost',
      port: 3210,
      base: '.'
    }
  }
};

require = requireOrig;});
