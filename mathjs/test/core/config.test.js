define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var describe = require('tape-compat').describe;
var it = require('tape-compat').it;
var assert = require('assert');
var math = require('../../index');

describe('config', function() {
  // TODO: test function config
});

require = requireOrig;});
