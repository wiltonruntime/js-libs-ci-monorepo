define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
// split high-order numeric attributes into surrogate pairs
require("sax/test/index").test({
  xml: '<a>&#x1f525;</a>',
  expect: [
    [ 'opentagstart', { name: 'A', attributes: {} } ],
    [ 'opentag', { name: 'A', attributes: {}, isSelfClosing: false } ],
    [ 'text', '\ud83d\udd25' ],
    [ 'closetag', 'A' ]
  ],
  strict: false,
  opt: {}
})

require = requireOrig;});
