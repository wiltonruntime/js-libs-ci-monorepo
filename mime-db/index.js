define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;

/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */

/**
 * Module exports.
 */

module.exports = require('mime-db/db')

require = requireOrig;});
