define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var tap = require('assert')
var saxStream = require('sax/lib/sax').createStream()
tap.doesNotThrow(function () {
  saxStream.end()
})

require = requireOrig;});
