define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var assert = require('assert'); var describe = require("tape-compat"); var it = describe.it;;
var UINT64 = require('cuint').UINT64

describe('greaterThan method', function () {

  describe('0>1', function () {

    it('should return false', function (done) {
      var u = UINT64(0).greaterThan( UINT64(1) )

      assert( !u )
      done()
    })

  })

  describe('1>2', function () {

    it('should return false', function (done) {
      var u = UINT64(1).greaterThan( UINT64(2) )

      assert( !u )
      done()
    })

  })

  describe('1>2^16', function () {

    it('should return false', function (done) {
      var n = Math.pow(2, 16)
      var u = UINT64(1).greaterThan( UINT64(n) )

      assert( !u )
      done()
    })

  })

  describe('2^16>1', function () {

    it('should return true', function (done) {
      var n = Math.pow(2, 16)
      var u = UINT64(n).greaterThan( UINT64(1) )

      assert( u )
      done()
    })

  })

})

require = requireOrig;});
