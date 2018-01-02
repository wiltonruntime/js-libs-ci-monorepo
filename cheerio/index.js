define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
/**
 * Export cheerio (with )
 */

exports = module.exports = require('cheerio/lib/cheerio');

/*
  Export the version
*/

exports.version = "0.22.0";//require('cheerio/lib/package.json').version;

require = requireOrig;});
