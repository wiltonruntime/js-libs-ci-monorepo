define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
/* global describe:true */
"use strict";

var lazyseq = require("lazy-seq/index.js");
var jsc = require("jsverify");
var _ = require("lodash");
_.contains = _.includes;
var describe = require("tape-compat").describe;

describe("contains", function () {
  jsc.property("≡ !containsNot", "array nat", "nat", function (arr, n) {
    var seq = lazyseq.fromArray(arr);
    var lhs = seq.contains(n);
    var rhs = !seq.containsNot(n);
    return lhs === rhs;
  });

  jsc.property("similar to _.contains", "array nat", "nat", function (arr, n) {
    var lhs = _.contains(arr, n);
    var rhs = lazyseq.fromArray(arr).contains(n);
    return lhs === rhs;
  });
});

require = requireOrig;});
