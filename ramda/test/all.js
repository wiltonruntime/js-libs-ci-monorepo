define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var listXf = require('ramda/test/helpers/listXf');

var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('all', function() {
  var even = function(n) {return n % 2 === 0;};
  var T = function() {return true;};
  var isFalse = function(x) { return x === false; };
  var intoArray = R.into([]);

  it('returns true if all elements satisfy the predicate', function() {
    eq(R.all(even, [2, 4, 6, 8, 10, 12]), true);
    eq(R.all(isFalse, [false, false, false]), true);
  });

  it('returns false if any element fails to satisfy the predicate', function() {
    eq(R.all(even, [2, 4, 6, 8, 9, 10]), false);
  });

  it('returns true for an empty list', function() {
    eq(R.all(T, []), true);
  });

  it('returns true into array if all elements satisfy the predicate', function() {
    eq(intoArray(R.all(even), [2, 4, 6, 8, 10, 12]), [true]);
    eq(intoArray(R.all(isFalse), [false, false, false]), [true]);
  });

  it('returns false into array if any element fails to satisfy the predicate', function() {
    eq(intoArray(R.all(even), [2, 4, 6, 8, 9, 10]), [false]);
  });

  it('returns true into array for an empty list', function() {
    eq(intoArray(R.all(T), []), [true]);
  });

  it('works with more complex objects', function() {
    var xs = [{x: 'abc'}, {x: 'ade'}, {x: 'fghiajk'}];
    function len3(o) { return o.x.length === 3; }
    function hasA(o) { return o.x.indexOf('a') > -1; }
    eq(R.all(len3, xs), false);
    eq(R.all(hasA, xs), true);
  });

  it('dispatches when given a transformer in list position', function() {
    eq(R.all(even, listXf), {
      all: true,
      f: even,
      xf: listXf
    });
  });

  it('is curried', function() {
    var count = 0;
    var test = function(n) {count += 1; return even(n);};
    eq(R.all(test)([2, 4, 6, 7, 8, 10]), false);
  });

});

require = requireOrig;});
