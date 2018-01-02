define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
exports.UINT32 = require('cuint/lib/uint32')
exports.UINT64 = require('cuint/lib/uint64')

require = requireOrig;});
