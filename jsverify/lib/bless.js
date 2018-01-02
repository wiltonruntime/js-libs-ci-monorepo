define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
"use strict";

var assert = require("assert");

var arbitraryBless = require("jsverify/lib/arbitraryBless.js");
var generator = require("jsverify/lib/generator.js");
var show = require("jsverify/lib/show.js");
var shrink = require("jsverify/lib/shrink.js");

/**
  - `bless(arb: {...}): arbitrary a`

    Bless almost arbitrary structure to be proper arbitrary. *Note*: this function mutates argument.

    #### Example:

    ```js
    var arbTokens = jsc.bless({
      generator: function () {
        switch (jsc.random(0, 2)) {
          case 0: return "foo";
          case 1: return "bar";
          case 2: return "quux";
        }
      }
    });
    ```
*/
function bless(arb) {
  assert(arb !== null && typeof arb === "object", "bless: arb should be an object");
  assert(typeof arb.generator === "function", "bless: arb.generator should be a function");

  // default shrink
  if (typeof arb.shrink !== "function") {
    arb.shrink = shrink.noop;
  }

  // default show
  if (typeof arb.show !== "function") {
    arb.show = show.def;
  }

  generator.bless(arb.generator);
  shrink.bless(arb.shrink);

  arbitraryBless(arb);
  return arb;
}

module.exports = bless;

require = requireOrig;});
