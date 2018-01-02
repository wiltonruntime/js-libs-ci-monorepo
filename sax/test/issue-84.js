define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
// https://github.com/isaacs/sax-js/issues/49
require("sax/test/index").test({
  xml: '<?has unbalanced "quotes?><xml>body</xml>',
  expect: [
    [ 'processinginstruction', { name: 'has', body: 'unbalanced "quotes' } ],
    [ 'opentagstart', { name: 'xml', attributes: {} } ],
    [ 'opentag', { name: 'xml', attributes: {}, isSelfClosing: false } ],
    [ 'text', 'body' ],
    [ 'closetag', 'xml' ]
  ],
  strict: false,
  opt: { lowercasetags: true, noscript: true }
})

require = requireOrig;});
