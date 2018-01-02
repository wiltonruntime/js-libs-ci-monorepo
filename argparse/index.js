define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';

module.exports = require('argparse/lib/argparse');

require = requireOrig;});
