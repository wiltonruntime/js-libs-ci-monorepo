define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
/* jshint node:true */
/* global describe, it */
"use strict";

var jsc = require("jsverify/lib/jsverify.js");
var assert = require("assert");
var describe = require("tape-compat").describe;
var it = require("tape-compat").it;

describe("checkForall function", function () {

  it("returns true if property holds", function () {
    var result = jsc.checkForall(jsc.integer(), function (/* i */) {
      return true;
    });
    assert(result);
  });

/*
  it("returns false if property does not hold", function () {
    var result = jsc.checkForall(jsc.nat(), function () {
      return false;
    });

    assert(result !== true);
  });
*/
});

require = requireOrig;});
