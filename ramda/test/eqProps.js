define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('eqProps', function() {
  it('reports whether two objects have the same value for a given property', function() {
    eq(R.eqProps('name', {name: 'fred', age: 10}, {name: 'fred', age: 12}), true);
    eq(R.eqProps('name', {name: 'fred', age: 10}, {name: 'franny', age: 10}), false);
  });

  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };

    eq(R.eqProps('value', {value: 0}, {value: -0}), false);
    eq(R.eqProps('value', {value: -0}, {value: 0}), false);
    eq(R.eqProps('value', {value: NaN}, {value: NaN}), true);
    eq(R.eqProps('value', {value: new Just([42])}, {value: new Just([42])}), true);
  });

  it('is curried', function() {
    var sameName = R.eqProps('name');
    eq(sameName({name: 'fred', age: 10}, {name: 'fred', age: 12}), true);
  });

});

require = requireOrig;});
