define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var concat = require('concat-stream')
var test = require('tape-compat')

test('array stream', function (t) {
  t.plan(1)
  var arrays = concat({ encoding: 'array' }, function(out) {
    t.deepEqual(out, [1,2,3,4,5,6])
  })
  arrays.write([1,2,3])
  arrays.write([4,5,6])
  arrays.end()
})

require = requireOrig;});
