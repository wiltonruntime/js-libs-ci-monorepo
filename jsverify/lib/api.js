define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
"use strict";

var arbitrary = require("jsverify/lib/arbitrary.js");
var bless = require("jsverify/lib/bless.js");
var dict = require("jsverify/lib/dict.js");
var generator = require("jsverify/lib/generator.js");
var json = require("jsverify/lib/json.js");
var primitive = require("jsverify/lib/primitive.js");
var record = require("jsverify/lib/record.js");
var recordWithEnv = require("jsverify/lib/recordWithEnv.js");
var shrink = require("jsverify/lib/shrink.js");
var small = require("jsverify/lib/small.js");
var string = require("jsverify/lib/string.js");

var api = {
  arbitrary: {
    small: small.arbitrary,
    bless: bless,
    record: recordWithEnv,
    nonshrink: arbitrary.nonshrink,
    pair: arbitrary.pair,
    either: arbitrary.either,
    unit: arbitrary.unit,
    dict: arbitrary.dict,
    json: arbitrary.json,
    nearray: arbitrary.nearray,
    array: arbitrary.array,
    tuple: arbitrary.tuple,
    sum: arbitrary.sum,
    oneof: arbitrary.oneof,
    recursive: arbitrary.recursive,
    letrec: arbitrary.letrec,
  },
  generator: {
    dict: dict.generator,
    json: json.json.generator,
    small: small.generator,
    record: record.generator,
  },
  shrink: {
    record: record.shrink,
  },
};

// Re-export stuff from internal modules
/* eslint-disable guard-for-in */
var k;
for (k in primitive) {
  api.arbitrary[k] = primitive[k];
}
for (k in string) {
  api.arbitrary[k] = string[k];
}
for (k in shrink) {
  api.shrink[k] = shrink[k];
}
for (k in generator) {
  api.generator[k] = generator[k];
}
module.exports = api;

require = requireOrig;});
