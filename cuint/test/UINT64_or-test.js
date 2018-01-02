define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var assert = require('assert'); var describe = require("tape-compat"); var it = describe.it;;
var UINT64 = require('cuint').UINT64

describe('or method', function () {

  describe('0|1', function () {

    it('should return 1', function (done) {
      var u = UINT64(0).or( UINT64(1) )

      assert.equal( u.toNumber(), 1 )
      done()
    })

  })

  describe('1|2', function () {

    it('should return 3', function (done) {
      var u = UINT64(1).or( UINT64(2) )

      assert.equal( u.toNumber(), 3 )
      done()
    })

  })

  describe('1|2^16', function () {

    it('should return n+1', function (done) {
      var n = Math.pow(2, 16)
      var u = UINT64(1).or( UINT64(n) )

      assert.equal( u.toNumber(), n+1 )
      done()
    })

  })

  describe('2^16|1', function () {

    it('should return n+1', function (done) {
      var n = Math.pow(2, 16)
      var u = UINT64(n).or( UINT64(1) )

      assert.equal( u.toNumber(), n+1 )
      done()
    })

  })

})

require = requireOrig;});
