define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var BrowserBuffer = require('buffer').Buffer // (this module)
var util = require('buffer/util')
var suite = util.suite()

var LENGTH = 160

var browserBuffer = new BrowserBuffer(LENGTH)
var typedarray = new Uint8Array(LENGTH)
var nodeBuffer = new Buffer(LENGTH)

suite
  .add('BrowserBuffer#slice', function () {
    var x = browserBuffer.slice(4)
  })
  .add('Uint8Array#subarray', function () {
    var x = typedarray.subarray(4)
  })

if (!process.browser) suite
  .add('NodeBuffer#slice', function () {
    var x = nodeBuffer.slice(4)
  })

require = requireOrig;});
