define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
// https://github.com/isaacs/sax-js/issues/35
require("sax/test/index").test({
  xml: '<xml>&#Xd;&#X0d;\n</xml>',
  expect: [
    [ 'opentagstart', { name: 'xml', attributes: {} } ],
    [ 'opentag', { name: 'xml', attributes: {}, isSelfClosing: false } ],
    [ 'text', '\r\r\n' ],
    [ 'closetag', 'xml' ]
  ],
  strict: true,
  opt: {}
})

require = requireOrig;});
