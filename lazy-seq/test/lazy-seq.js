define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
/* global describe:true, it:true */
"use strict";
var describe = require("tape-compat").describe;
var it = require("tape-compat").it;

describe("lazy-seq", function () {
  it("loads", function () {
    require("lazy-seq/index.js");
  });
});

require = requireOrig;});
