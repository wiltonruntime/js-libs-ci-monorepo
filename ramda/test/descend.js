define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;

describe('descend', function() {
  it('builds a descending comparator function out of the identity function', function() {
    eq([3, 1, 8, 1, 2, 5].sort(R.descend(R.identity)), [8, 5, 3, 2, 1, 1]);
  });
});

require = requireOrig;});
