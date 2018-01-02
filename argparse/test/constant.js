define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
/*global describe, it, beforeEach*/

'use strict';

var test = require('tape-compat');
var describe = test.describe;
var it = test.it;
var assert = require('assert');

var ArgumentParser = require('argparse/lib/argparse').ArgumentParser;

describe('constant actions', function () {
  var parser;
  var args;

  var beforeEach = function () {
    parser = new ArgumentParser({ debug: true });
  };

  beforeEach();
  it('storeConst should store constant as given', function () {
    parser.addArgument([ '-a' ], { action: 'storeConst', dest:   'answer',
          help:   'store constant', constant: 42 });
    args = parser.parseArgs('-a'.split(' '));
    assert.equal(args.answer, '42');
  });

  beforeEach();
  it('storeConst should give error if constant not given (or misspelled)', function () {
    assert.throws(
      function () {
        parser.addArgument(
          [ '-a' ],
          {
            action: 'storeConst',
            dest:   'answer',
            help:   'store constant',
            const:  42
          }
        );
      },
      /constant option is required for storeAction/
    );
  });

  beforeEach();
  it('appendConst should append constant as given', function () {
    parser.addArgument([ '--str' ], { action: 'appendConst', dest:   'types',
      help:   'append constant "str" to types', constant: 'str' });
    parser.addArgument([ '--int' ], { action: 'appendConst', dest:   'types',
      help:   'append constant "int" to types', constant: 'int' });
    args = parser.parseArgs('--str --int'.split(' '));
    assert.deepEqual(args.types, [ 'str', 'int' ]);
  });

  beforeEach();
  it('appendConst should give error if constant not given (or misspelled)', function () {
    assert.throws(
      function () {
        parser.addArgument([ '-a' ], { action: 'appendConst', dest:   'answer',
            help:   'store constant', const: 42 });
      },
      /constant option is required for appendAction/
    );
  });
});

require = requireOrig;});
