define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';

// Reserved keywords not allowed to use in the parser
module.exports = {
  end: true
};

require = requireOrig;});
