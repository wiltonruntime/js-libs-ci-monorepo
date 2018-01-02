define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
/* global describe:true */
"use strict";

var lazySeq = require("lazy-seq/index.js");
var jsc = require("jsverify");
var describe = require("tape-compat").describe;

describe("nil", function () {
  jsc.property(".isNil === true", function () {
    return lazySeq.nil.isNil;
  });

  jsc.property(".toString() === 'nil'", function () {
    return "" + lazySeq.nil === "nil";
  });
});

require = requireOrig;});
