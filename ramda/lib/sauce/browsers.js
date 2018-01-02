define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var windows = require('ramda/windows');
var apple = require('ramda/apple');
var linux = require('ramda/linux');
var android = require('ramda/android');
var ios = require('ramda/ios');

module.exports = windows.concat(apple, android, ios, linux);

require = requireOrig;});
