define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
/* jshint node:true */
/* global describe, it */
"use strict";

var jsc = require("jsverify/lib/jsverify.js");
var _ = require("lodash");
var describe = require("tape-compat").describe;
var it = require("tape-compat").it;
_.contains = _.includes;

describe("generator combinators", function () {
  describe("pair", function () {
    it("generates array of two elements", function () {
      jsc.assert(jsc.forall(jsc.pair(jsc.integer(), jsc.integer()), function (p) {
        return _.isArray(p) && p.length === 2 &&
          typeof p[0] === "number" && typeof p[1] === "number";
      }));
    });

/* // slow in duktape
    it("without parameters generates pair of values", function () {
      jsc.assert(jsc.forall(jsc.pair(), function (p) {
        return _.isArray(p) && p.length === 2;
      }));
    });
*/
  });

  describe("dict", function () {
    it("generates objects with properties of given type", function () {
      jsc.assert(jsc.forall(jsc.dict(jsc.integer()), function (m) {
        return _.isObject(m) && _.every(m, _.isNumber);
      }));
    });

/* // slow in duktape
    it("generates objects with properties of values, if type omitted", function () {
      jsc.assert(jsc.forall(jsc.dict(), function (m) {
        return _.isObject(m);
      }));
    });
*/
  });
});

require = requireOrig;});
