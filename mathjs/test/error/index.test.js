define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var describe = require('tape-compat').describe;
var it = require('tape-compat').it;
var assert = require('assert');
var error = require('../../lib/error/index');

describe('index.js', function () {

  it('should contain error factory functions', function () {
    assert(Array.isArray(error));
    assert(error[0].name, 'ArgumentsError');
    assert(error[1].name, 'DimensionError');
    assert(error[2].name, 'IndexError');
  });

});

require = requireOrig;});
