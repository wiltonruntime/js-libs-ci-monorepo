define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
try {
  var util = require('util');
  if (typeof util.inherits !== 'function') throw '';
  module.exports = util.inherits;
} catch (e) {
  module.exports = require('inherits/inherits_browser.js');
}

require = requireOrig;});
