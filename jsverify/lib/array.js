define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
"use strict";

var arbitraryAssert = require("jsverify/lib/arbitraryAssert.js");
var arbitraryBless = require("jsverify/lib/arbitraryBless.js");
var generator = require("jsverify/lib/generator.js");
var show = require("jsverify/lib/show.js");
var shrink = require("jsverify/lib/shrink.js");
var utils = require("jsverify/lib/utils.js");

function makeArray(flavour) {
  return function arrayImpl(arb) {
    arb = utils.force(arb);

    arbitraryAssert(arb);

    return arbitraryBless({
      generator: generator[flavour](arb.generator),
      shrink: shrink[flavour](arb.shrink),
      show: show.array(arb.show),
    });
  };
}

var array = makeArray("array");
var nearray = makeArray("nearray");

module.exports = {
  array: array,
  nearray: nearray,
};

require = requireOrig;});
