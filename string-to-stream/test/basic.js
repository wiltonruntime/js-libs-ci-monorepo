define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var concat = require('concat-stream')
var str = require('string-to-stream')
var test = require('tape-compat')

test('basic tests', function (t) {
  t.plan(2)
  str('hi there').pipe(concat(function (data) {
    t.equal(data.toString(), 'hi there')
  }))
  str('').pipe(concat(function (data) {
    t.equal(data.toString(), '')
  }))
})

require = requireOrig;});
