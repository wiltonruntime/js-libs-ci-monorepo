define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
/* @flow weak */
"use strict";

var arbitrary = require("jsverify/lib/arbitrary.js");
var fn = require("jsverify/lib/fn.js");
var primitive = require("jsverify/lib/primitive.js");
var small = require("jsverify/lib/small.js");
var string = require("jsverify/lib/string.js");
var utils = require("jsverify/lib/utils.js");

var environment = utils.merge(primitive, string, {
  pair: arbitrary.pair,
  unit: arbitrary.unit,
  either: arbitrary.either,
  dict: arbitrary.dict,
  array: arbitrary.array,
  nearray: arbitrary.nearray,
  json: arbitrary.json,
  fn: fn.fn,
  fun: fn.fn,
  nonshrink: arbitrary.nonshrink,
  small: small.arbitrary,
});

module.exports = environment;

require = requireOrig;});
