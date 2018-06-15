define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
// test error messages for deprecated functions
var describe = require('tape-compat').describe;
var it = require('tape-compat').it;
var assert = require('assert');
var math = require('../index');

describe('deprecated stuff', function() {

  it('should throw a deprecation error when using UpdateNode', function () {

    assert.throws(function () {
      new math.expression.node.UpdateNode();
    }, /UpdateNode is deprecated/);

  })
});

require = requireOrig;});
