define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
/* jshint node:true */
/* global describe */
"use strict";

var jsc = require("jsverify/lib/jsverify.js");
var describe = require("tape-compat").describe;
var it = require("tape-compat").it;

describe("throws", function () {
  jsc.property("example 1", "bool", function (b) {
    var block = function () {
      if (b) { throw new Error("foo"); }
    };

    return jsc.throws(block) === b;
  });

  jsc.property("class", "bool", function (b) {
    var block = function () {
      throw (b ? new Error("foo") : "foo");
    };

    return jsc.throws(block, Error) === b;
  });

  jsc.property("message", "bool", "string", function (b, msg) {
    var block = function () {
      throw (b ? new Error(msg) : "other-error");
    };

    return jsc.throws(block, Error, msg) === b;
  });
});

require = requireOrig;});
