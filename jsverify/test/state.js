define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
/* jshint node:true */
/* global describe, it */
"use strict";

var jsc = require("jsverify/lib/jsverify.js");
var assert = require("assert");
var describe = require("tape-compat").describe;
var it = require("tape-compat").it;

describe("state", function () {
  it("error has state value", function () {
    var prop = jsc.forall(jsc.nat(), function (n) {
      return n < 90;
    });

    var r = jsc.check(prop, { size: 100, rngState: "000123456789abcdfe" });

    assert(r !== true, "property should not hold");
    assert(r.tests > 2, "there should be more than one test");

    var r2 = jsc.check(prop, {
      size: 100,
      rngState: r.rngState,
    });

    assert(r2 !== true, "property should still not hold");
    assert(r2.tests === 1, "should fail after first test");
  });
});

require = requireOrig;});
