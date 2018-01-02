define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
/* global describe:true */
"use strict";

var lazyseq = require("lazy-seq/index.js");
var jsc = require("jsverify");
var describe = require("tape-compat").describe;

describe("singleton", function () {
  jsc.property("length is 1", "nat", function (n) {
    return lazyseq.singleton(n).length() === 1;
  });
});

require = requireOrig;});
