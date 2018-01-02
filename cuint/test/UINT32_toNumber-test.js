define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var assert = require('assert'); var describe = require("tape-compat"); var it = describe.it;;
var UINT32 = require('cuint').UINT32

describe('toNumber method', function () {

  describe('from 0', function () {

    it('should return 0', function (done) {
      var u = UINT32(0).toNumber()

      assert.equal( u, 0 )
      done()
    })

  })

  describe('from low bit number', function () {

    it('should return the number', function (done) {
      var u = UINT32(123).toNumber()

      assert.equal( u, 123 )
      done()
    })

  })

  describe('from high bit number', function () {

    it('should return the number', function (done) {
      var n = Math.pow(2,17)
      var u = UINT32(n).toNumber()

      assert.equal( u, n )
      done()
    })

  })

  describe('from high and low bit number', function () {

    it('should return the number', function (done) {
      var n = Math.pow(2,17) + 123
      var u = UINT32(n).toNumber()

      assert.equal( u, n )
      done()
    })

  })

  describe('toNumber and toString', function () {

    it('should return the same result for 100 random numbers', function () {
      for (var i=0; i<100; i++) {
        var u = UINT32(Math.floor(Math.random() * 0xffffffff));
        assert.equal(u.toNumber(), parseInt(u.toString()));
      }
    })

  })

})

require = requireOrig;});
