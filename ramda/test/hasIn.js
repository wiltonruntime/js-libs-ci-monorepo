define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('hasIn', function() {
  var fred = {name: 'Fred', age: 23};
  var anon = {age: 99};

  it('returns a function that checks the appropriate property', function() {
    var nm = R.hasIn('name');
    eq(typeof nm, 'function');
    eq(nm(fred), true);
    eq(nm(anon), false);
  });

  it('checks properties from the prototype chain', function() {
    var Person = function() {};
    Person.prototype.age = function() {};

    var bob = new Person();
    eq(R.hasIn('age', bob), true);
  });

  it('works properly when called with two arguments', function() {
    eq(R.hasIn('name', fred), true);
    eq(R.hasIn('name', anon), false);
  });

});

require = requireOrig;});
