define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
/* jshint node:true */
/* global describe, it */
"use strict";

var jsc = require("jsverify/lib/jsverify.js");
var arbitraryAssert = require("jsverify/lib/arbitraryAssert.js");
var describe = require("tape-compat").describe;
var it = require("tape-compat").it;

describe("suchthat", function () {
  var arb = jsc.suchthat(jsc.integer, function (v) {
    return v % 2 === 0;
  });

  it("should construct valid arbitrary", function () {
    arbitraryAssert(arb);
  });

  it("should support smap", function () {
    var arbAsString = arb.smap(
      function (v) { return v.toString(); },
      function (v) { return parseInt(v, 10); }
    );

    jsc.assert(jsc.forall(arbAsString, function (value) {
      return typeof value === "string";
    }));

    jsc.assert(jsc.forall(arbAsString, function (value) {
      return parseInt(value, 10) % 2 === 0;
    }));
  });
});

require = requireOrig;});
