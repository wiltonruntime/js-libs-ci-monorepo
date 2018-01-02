define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';

exports.decode = exports.parse = require('querystring/decode');
exports.encode = exports.stringify = require('querystring/encode');

require = requireOrig;});
