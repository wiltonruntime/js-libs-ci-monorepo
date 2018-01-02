define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
"use strict";

var arbitraryAssert = require("jsverify/lib/arbitraryAssert.js");
var arbitraryBless = require("jsverify/lib/arbitraryBless.js");
var generator = require("jsverify/lib/generator.js");
var show = require("jsverify/lib/show.js");
var shrink = require("jsverify/lib/shrink.js");
var utils = require("jsverify/lib/utils.js");

function pair(a, b) {
  a = utils.force(a);
  b = utils.force(b);

  arbitraryAssert(a);
  arbitraryAssert(b);

  return arbitraryBless({
    generator: generator.pair(a.generator, b.generator),
    shrink: shrink.pair(a.shrink, b.shrink),
    show: show.pair(a.show, b.show),
  });
}

module.exports = {
  pair: pair,
};

require = requireOrig;});
