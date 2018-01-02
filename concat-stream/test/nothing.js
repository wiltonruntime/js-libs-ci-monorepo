define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var concat = require('concat-stream')
var test = require('tape-compat')

test('no callback stream', function (t) {
  var stream = concat()
  stream.write('space')
  stream.end(' cats')
  t.end()
})

test('no encoding set, no data', function (t) {
  var stream = concat(function(data) {
    t.deepEqual(data, [])
    t.end()
  })
  stream.end()
})

test('encoding set to string, no data', function (t) {
  var stream = concat({ encoding: 'string' }, function(data) {
    t.deepEqual(data, '')
    t.end()
  })
  stream.end()
})

require = requireOrig;});
