define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
/* jshint node:true */
/* global describe, it */
"use strict";

var jsc = require("jsverify/../lib/jsverify.js");

function intersectionTests(lib) {
  var _ = require(lib);

  describe(lib + " intersection", function () {
    it("intersects", function () {
      function contains(arr, x) {
        return arr.indexOf(x) !== -1;
      }

      function intersects(a, b) {
        return a.some(function (x) {
          return contains(b, x);
        });
      }

      var prop = jsc.forall(jsc.array(), function (a) {
        return jsc.forall(jsc.array(), function (b) {
          return intersects(a, b) === (_.intersection(a, b).length !== 0);
        });
      });

      jsc.assert(prop);
    });
  });
}

intersectionTests("underscore");
intersectionTests("lodash");

require = requireOrig;});
