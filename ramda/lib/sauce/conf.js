define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var envvar = require('envvar');
var browsers = require('ramda/browsers');
module.exports = {
  all: {
    options: {
      urls: ['localhost:3210/test/index.html'],
      build: envvar.number('CI_BUILD_NUMBER', 0),
      testname: 'Ramda Sauce Unit Test',
      browsers: browsers
    }
  }
};

require = requireOrig;});
