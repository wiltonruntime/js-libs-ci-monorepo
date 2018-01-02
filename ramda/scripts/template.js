define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
;(function() {

  'use strict';

  /* global R */
  /* eslint-env amd */

  /* TEST_ENTRY_POINT */

  if (typeof exports === 'object') {
    module.exports = R;
  } else if (typeof define === 'function' && define.amd) {
    define(function() { return R; });
  } else {
    this.R = R;
  }

}.call(this));

require = requireOrig;});
