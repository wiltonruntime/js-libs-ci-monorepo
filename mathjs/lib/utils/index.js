define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';

exports.array = require('./array');
exports['boolean'] = require('./boolean');
exports['function'] = require('./function');
exports.number = require('./number');
exports.object = require('./object');
exports.string = require('./string');
exports.emitter = require('./emitter');

require = requireOrig;});
