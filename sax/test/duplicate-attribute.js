define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
require("sax/test/index").test({
  xml: '<span id="hello" id="there"></span>',
  expect: [
    [ 'opentagstart', {
      name: 'SPAN',
      attributes: {}
    } ],
    [ 'attribute', { name: 'ID', value: 'hello' } ],
    [ 'opentag', {
      name: 'SPAN',
      attributes: { ID: 'hello' },
      isSelfClosing: false
    } ],
    [ 'closetag', 'SPAN' ]
  ],
  strict: false,
  opt: {}
})

require = requireOrig;});
