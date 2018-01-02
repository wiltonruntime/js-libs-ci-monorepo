define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('min', function() {

  it('returns the smaller of its two arguments', function() {
    eq(R.min(-7, 7), -7);
    eq(R.min(7, -7), -7);
  });

  it('works for any orderable type', function() {
    var d1 = new Date('2001-01-01');
    var d2 = new Date('2002-02-02');

    eq(R.min(d1, d2), d1);
    eq(R.min(d2, d1), d1);
    eq(R.min('a', 'b'), 'a');
    eq(R.min('b', 'a'), 'a');
  });

});

require = requireOrig;});
