define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
/* @flow weak */
"use strict";

var arbitraryAssert = require("jsverify/lib/arbitraryAssert.js");
var array = require("jsverify/lib/array.js");
var generator = require("jsverify/lib/generator.js");
var pair = require("jsverify/lib/pair.js");
var string = require("jsverify/lib/string.js");
var utils = require("jsverify/lib/utils.js");

function makeMapShow(elShow) {
  return function (m) {
    return "{" + Object.keys(m).map(function (k) {
      return k + ": " + elShow(m[k]);
    }).join(", ") + "}";
  };
}

/**
  - `dict.generator(gen: generator a): generator (dict a)`
*/
function generateDict(gen) {
  var pairGen = generator.pair(string.string.generator, gen);
  var arrayGen = generator.array(pairGen);
  var result = arrayGen.map(utils.pairArrayToDict);

  return utils.curried2(result, arguments);
}

function dict(arb) {
  arb = utils.force(arb);
  arbitraryAssert(arb);

  var pairArbitrary = pair.pair(string.string, arb);
  var arrayArbitrary = array.array(pairArbitrary);

  return arrayArbitrary.smap(utils.pairArrayToDict, utils.dictToPairArray, makeMapShow(arb.show));
}

module.exports = {
  arbitrary: dict,
  generator: generateDict,
};

require = requireOrig;});
