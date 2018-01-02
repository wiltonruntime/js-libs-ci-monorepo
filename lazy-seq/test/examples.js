define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
/* global describe:true */
"use strict";

var lazyseq = require("lazy-seq/index.js");
var jsc = require("jsverify");
var describe = require("tape-compat").describe;

describe("nil", function () {
  jsc.property("ones === ones.tail", function () {
    var ones = lazyseq.cons(1, function () { return ones; });
    return ones === ones.tail();
  });
});

require = requireOrig;});
