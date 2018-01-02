define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('max', function() {

  it('returns the larger of its two arguments', function() {
    eq(R.max(-7, 7), 7);
    eq(R.max(7, -7), 7);
  });

  it('works for any orderable type', function() {
    var d1 = new Date('2001-01-01');
    var d2 = new Date('2002-02-02');

    eq(R.max(d1, d2), d2);
    eq(R.max(d2, d1), d2);
    eq(R.max('a', 'b'), 'b');
    eq(R.max('b', 'a'), 'b');
  });

});

require = requireOrig;});
