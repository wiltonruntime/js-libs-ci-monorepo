define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
// test import
var describe = require('tape-compat').describe;
var it = require('tape-compat').it;
var assert = require('assert');
var mathjs = require('../../index');
var approx = require('../../tools/approx');
var assert_throws_orig = assert.throws;
assert.throws = function(fun) { assert_throws_orig(fun); }

describe('import', function() {
  var math = null;

  function beforeEach() {
    math = mathjs.create();
    math.import({
      myvalue: 42,
      hello: function (name) {
        return 'hello, ' + name + '!';
      }
    }, {override: true});
  };

  function afterEach() {
    math = null;
  };

  it('should import a custom member', function() {
    beforeEach();
    assert.equal(math.myvalue * 2, 84);
    assert.equal(math.hello('user'), 'hello, user!');
    afterEach();
  });

  it('should not override existing functions', function() {
    beforeEach();
    assert.throws(function () {math.import({myvalue: 10})},
        /Error: Cannot import "myvalue": already exists/);
    assert.equal(math.myvalue, 42);
    afterEach();
  });

  it('should throw no errors when silent:true', function() {
    beforeEach();
    math.import({myvalue: 10}, {silent: true});
    assert.strictEqual(math.myvalue, 42);
    afterEach();
  });

  it('should override existing functions if forced', function() {
    beforeEach();
    math.import({myvalue: 10}, {override: true});
    assert.strictEqual(math.myvalue, 10);
    afterEach();
  });

  it('should parse the user defined members', function() {
    beforeEach();
    if (math.parser) {
      var parser = math.parser();
      math.add(math.myvalue, 10);
      parser.eval('myvalue + 10');    // 52
      parser.eval('hello("user")');   // 'hello, user!'
    }
    afterEach();
  });

  var getSize = function (array) {
    return array.length;
  };

  it('shouldn\'t wrap custom functions by default', function () {
    beforeEach();
    math.import({ getSizeNotWrapped: getSize });
    assert.strictEqual(math.getSizeNotWrapped([1,2,3]), 3);
    assert.strictEqual(math.getSizeNotWrapped(math.matrix([1,2,3])), undefined);
    afterEach();
  });

  it('should wrap custom functions if wrap = true', function () {
    beforeEach();
    math.import({ getSizeWrapped: getSize }, { wrap: true});
    assert.strictEqual(math.getSizeWrapped([1,2,3]), 3);
    assert.strictEqual(math.getSizeWrapped(math.matrix([1,2,3])), 3);
    afterEach();
  });

  it('wrapped imported functions should accept undefined and null', function () {
    beforeEach();
    math.import({
      isNull: function (obj) {
        return obj === null;
      }
    }, { wrap: true });
    assert.equal(math.isNull(null), true);
    assert.equal(math.isNull(0), false);

    math.import({
      isUndefined: function (obj) {
        return obj === undefined;
      }
    }, { wrap: true });
    assert.equal(math.isUndefined(undefined), true);
    assert.equal(math.isUndefined(0), false);
    assert.equal(math.isUndefined(null), false);
    afterEach();

  });

  it('should throw an error in case of wrong number of arguments', function () {
    beforeEach();
    assert.throws (function () {math.import()}, /ArgumentsError/);
    assert.throws (function () {math.import('', {}, 3)}, /ArgumentsError/);
    afterEach();
  });

  it('should throw an error in case of wrong type of arguments', function () {
    beforeEach();
    assert.throws(function () {math.import(2)}, /TypeError: Factory, Object, or Array expected/);
    assert.throws(function () {math.import(function () {})}, /TypeError: Factory, Object, or Array expected/);
    afterEach();
  });

  it('should ignore properties on Object', function () {
    beforeEach();
    Object.prototype.foo = 'bar';

    math.import({bar: 456});

    assert(!math.hasOwnProperty('foo'));
    assert(math.hasOwnProperty('bar'));

    delete Object.prototype.foo;
    afterEach();
  });

  it('should return the imported object', function () {
    beforeEach();
    math.import({a: 24});
    assert.deepEqual(math.a, 24);

    math.import({pi: 24}, {silent: true});
    approx.equal(math.pi, Math.PI); // pi was ignored
    afterEach();
  });

  it('should import a boolean', function () {
    beforeEach();
    math.import({a: true});
    assert.strictEqual(math.a, true);
    afterEach();
  });

  it('should merge typed functions with the same name', function () {
    beforeEach();
    math.import({
      'foo': math.typed('foo', {
        'number': function (x) {
          return 'foo(number)';
        }
      })
    });

    math.import({
      'foo': math.typed('foo', {
        'string': function (x) {
          return 'foo(string)';
        }
      })
    });

    assert.deepEqual(Object.keys(math.foo.signatures).sort(), ['number', 'string']);
    assert.equal(math.foo(2), 'foo(number)');
    assert.equal(math.foo('bar'), 'foo(string)');
    assert.throws(function () {
      math.foo(new Date())
    }, /TypeError: Unexpected type of argument in function foo/);
    afterEach();

  });

  it('should override existing typed functions', function () {
    beforeEach();
    math.import({
      'foo': math.typed('foo', {
        'Date': function (x) {
          return 'foo(Date)';
        }
      })
    });

    assert.equal(math.foo(new Date()), 'foo(Date)');

    math.import({
      'foo': math.typed('foo', {
        'string': function (x) {
          return 'foo(string)';
        }
      })
    }, {override: true});

    assert.deepEqual(Object.keys(math.foo.signatures).sort(), ['string']);
    assert.equal(math.foo('bar'), 'foo(string)');
    assert.throws(function () {
      math.foo(new Date())
    }, /TypeError: Unexpected type of argument in function foo/);
    assert.throws(function () {
      math.foo(new Date())
    }, /TypeError: Unexpected type of argument in function foo/);
    afterEach();

  });

  it('should merge typed functions coming from a factory', function () {
    beforeEach();
    math.import({
      'foo': math.typed('foo', {
        'number': function (x) {
          return 'foo(number)';
        }
      })
    });

    math.import({
      'name': 'foo',
      'factory': function () {
        return math.typed('foo', {
          'string': function (x) {
            return 'foo(string)';
          }
        })
      }
    });

    assert.deepEqual(Object.keys(math.foo.signatures).sort(), ['number', 'string']);
    assert.equal(math.foo(2), 'foo(number)');
    assert.equal(math.foo('bar'), 'foo(string)');
    assert.throws(function () {
      math.foo(new Date())
    }, /TypeError: Unexpected type of argument in function foo/);
    afterEach();

  });

  it('should import a boolean', function () {
    beforeEach();
    math.import({a: true});
    assert.strictEqual(math.a, true);
    afterEach();
  });

  it('should import a function with transform', function() {
    beforeEach();
    function foo (text) {
      return text.toLowerCase();
    }

    foo.transform = function foo(text) {
      return text.toUpperCase();
    };

    math.import({foo: foo});

    assert(math.hasOwnProperty('foo'));
    assert.strictEqual(math.foo, foo);
    assert(math.expression.transform.hasOwnProperty('foo'));
    assert.strictEqual(math.expression.transform.foo, foo.transform);
    afterEach();
  });

  it('should override a function with transform for one without', function() {
    beforeEach();
    function mean () {
      return 'test'
    }

    math.import({mean: mean}, {override: true});

    assert(math.hasOwnProperty('mean'));
    assert.strictEqual(math.mean, mean);
    assert.strictEqual(math.expression.transform.mean, undefined);
    assert.strictEqual(math.expression.mathWithTransform.mean, mean);
    afterEach();
  });

  it('should throw an error when a factory function has a transform', function() {
    beforeEach();
    assert.throws(function () {
      math.import({
        name: 'foo2',
        factory: function () {
          var fn = function () {};
          fn.transform = function () {};
          return fn;
        }
      });

      math.foo2(); // as soon as we use it, it will resolve the factory function

    }, /Transforms cannot be attached to factory functions/);
    afterEach();
  });

  it.skip('should import a factory with name', function () {
    // TODO: unit test importing a factory
  });

  it.skip('should import a factory with path', function () {
    // TODO: unit test importing a factory
  });

  it.skip('should import a factory without name', function () {
    // TODO: unit test importing a factory
  });

  it.skip('should pass the namespace to a factory function', function () {
    // TODO: unit test importing a factory
  });

  it.skip('should import an Array', function () {
    // TODO: unit test importing an Array containing stuff
  });

  it('should LaTeX import', function () {
    beforeEach();
    var expression = math.parse('import(object)');
    assert.equal(expression.toTex(), '\\mathrm{import}\\left( object\\right)');
    afterEach();
  });

});

require = requireOrig;});
