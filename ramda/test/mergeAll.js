define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('mergeAll', function() {
  it('merges a list of objects together into one object', function() {
    eq(R.mergeAll([{foo:1}, {bar:2}, {baz:3}]), {foo:1, bar:2, baz:3});
  });

  it('gives precedence to later objects in the list', function() {
    eq(R.mergeAll([{foo:1}, {foo:2}, {bar:2}]), {foo:2, bar:2});
  });

  it('ignores inherited properties', function() {
    function Foo() {}
    Foo.prototype.bar = 42;
    var foo = new Foo();
    var res = R.mergeAll([foo, {fizz: 'buzz'}]);
    eq(res, {fizz: 'buzz'});
  });

});

require = requireOrig;});
