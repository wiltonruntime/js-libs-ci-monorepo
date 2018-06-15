define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
// test the contents of index.js
var describe = require('tape-compat').describe;
var it = require('tape-compat').it;
var assert = require('assert');
var index = require('../../../lib/expression/node/index');

describe('node/index', function() {

  it('should contain all nodes', function() {
    assert.equal(index.length, 16);
  });

});

require = requireOrig;});
