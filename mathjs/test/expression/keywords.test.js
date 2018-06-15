define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
// test keywords
var describe = require('tape-compat').describe;
var it = require('tape-compat').it;
var assert = require('assert'),
    keywords = require('../../lib/expression/keywords');

describe('keywords', function() {

  it('should return a map with reserved keywords', function() {
    assert.deepEqual(Object.keys(keywords).sort(), ['end'].sort());
  });

});

require = requireOrig;});
