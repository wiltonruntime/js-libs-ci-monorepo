define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var ieee754 = require('ieee754')
var test = require('tape-compat')

var EPSILON = 0.00001

test('read float', function (t) {
  var buf = new Buffer(4)
  buf.writeFloatLE(42.42, 0)
  var num = ieee754.read(buf, 0, true, 23, 4)
  t.ok(Math.abs(num - 42.42) < EPSILON)

  t.end()
})

test('write float', function (t) {
  var buf = new Buffer(4)
  ieee754.write(buf, 42.42, 0, true, 23, 4)

  var num = buf.readFloatLE(0)
  t.ok(Math.abs(num - 42.42) < EPSILON)

  t.end()
})

require = requireOrig;});
