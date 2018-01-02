define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var test = require("tape-compat");
var describe = test.describe;
var it = test.it;    
var makeDom = require("domutils/test/utils").makeDom;
var traversal = require("domutils");
var assert = require("assert");

describe("traversal", function() {
  describe("hasAttrib", function() {
    var hasAttrib = traversal.hasAttrib;

    it("doesn't throw on text nodes", function() {
      var dom = makeDom("textnode");
      assert.doesNotThrow(function() {
        hasAttrib(dom[0], "some-attrib");
      });
    });

  });
});

require = requireOrig;});
