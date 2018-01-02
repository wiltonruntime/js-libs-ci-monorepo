define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
/*global describe, it*/


'use strict';

var test = require('tape-compat');
var describe = test.describe;
var it = test.it;
var assert = require('assert');

var ArgumentParser = require('argparse/lib/argparse').ArgumentParser;

describe('choices', function () {
  var parser;
  var args;

  it('should store correct choice(choices defined as string)', function () {
    parser = new ArgumentParser({ debug: true });
    parser.addArgument([ '--foo' ], { choices: 'abc' });

    args = parser.parseArgs('--foo a'.split(' '));
    assert.equal(args.foo, 'a');
  });

  it("should drop down with 'Invalid choice' error for incorrect choices(choices defined as string)", function () {
    parser = new ArgumentParser({ debug: true });
    parser.addArgument([ '--foo' ], { choices: 'abc' });

    assert.throws(
      function () {
        args = parser.parseArgs('--foo e'.split(' '));
        // console.dir(args);
      },
      /Invalid choice:/
    );
    assert.throws(
      function () {
        args = parser.parseArgs('--foo 0'.split(' '));
        // console.dir(args);
      },
      /Invalid choice:/
    );
  });


  it('should store correct choice(choices defined as array)', function () {
    parser = new ArgumentParser({ debug: true });
    parser.addArgument([ '--foo' ], { choices: [ 'a', 'abc', 'd' ] });

    args = parser.parseArgs('--foo abc'.split(' '));
    assert.equal(args.foo, 'abc');
  });

  it("should drop down with 'Invalid choice' error for incorrect choices(choices defined as array)", function () {
    parser = new ArgumentParser({ debug: true });
    parser.addArgument([ '--foo' ], { choices: [ 'a', 'abc', 'd' ] });

    assert.throws(
      function () {
        args = parser.parseArgs('--foo e'.split(' '));
        // console.dir(args);
      },
      /Invalid choice:/
    );
    assert.throws(
      function () {
        args = parser.parseArgs('--foo 0'.split(' '));
        // console.dir(args);
      },
      /Invalid choice:/
    );
  });
});

require = requireOrig;});
