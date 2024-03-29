define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
"use strict";

var assert = require("assert");

var arbitraryBless = require("jsverify/lib/arbitraryBless.js");
var dict = require("jsverify/lib/dict.js");
var generator = require("jsverify/lib/generator.js");
var primitive = require("jsverify/lib/primitive.js");
var show = require("jsverify/lib/show.js");
var shrink = require("jsverify/lib/shrink.js");
var string = require("jsverify/lib/string.js");
var utils = require("jsverify/lib/utils.js");

var nullArb = primitive.constant(null);

var generateInteger = primitive.integer.generator;
var generateNumber = primitive.number.generator;
var generateBool = primitive.bool.generator;
var generateString = string.string.generator;
var generateNull = nullArb.generator;

var generateJson = generator.recursive(
  generator.oneof([
    generateInteger,
    generateNumber,
    generateBool,
    generateString,
    generateNull,
  ]),
  function (gen) {
    return generator.oneof([generator.array(gen), dict.generator(gen)]);
  });

// Forward declaration
var shrinkDictJson;
var shrinkJson;

function shrinkRecJson(json) {
  if (Array.isArray(json)) {
    return shrink.array(shrinkJson, json);
  } else {
    return shrinkDictJson(json);
  }
}

shrinkJson = shrink.bless(function (json) {
  assert(typeof json !== "function");

  if (json === null) {
    return nullArb.shrink(json);
  }

  switch (typeof json) {
    case "boolean": return primitive.bool.shrink(json);
    case "number": return primitive.number.shrink(json);
    case "string": return string.string.shrink(json);
    default: return shrinkRecJson(json);
  }
});

shrinkDictJson = (function () {
  var pairShrink = shrink.pair(string.string.shrink, shrinkJson);
  var arrayShrink = shrink.array(pairShrink);

  return arrayShrink.smap(utils.pairArrayToDict, utils.dictToPairArray);
}());

var json = arbitraryBless({
  generator: generateJson,
  shrink: shrinkJson,
  show: show.def,
});

module.exports = {
  json: json,
};

require = requireOrig;});
