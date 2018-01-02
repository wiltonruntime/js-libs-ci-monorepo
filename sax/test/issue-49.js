define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
// https://github.com/isaacs/sax-js/issues/49
require("sax/test/index").test({
  xml: '<xml><script>hello world</script></xml>',
  expect: [
    [ 'opentagstart', { name: 'xml', attributes: {} } ],
    [ 'opentag', { name: 'xml', attributes: {}, isSelfClosing: false } ],
    [ 'opentagstart', { name: 'script', attributes: {} } ],
    [ 'opentag', { name: 'script', attributes: {}, isSelfClosing: false } ],
    [ 'text', 'hello world' ],
    [ 'closetag', 'script' ],
    [ 'closetag', 'xml' ]
  ],
  strict: false,
  opt: { lowercasetags: true, noscript: true }
})

require("sax/test/index").test({
  xml: '<xml><script><![CDATA[hello world]]></script></xml>',
  expect: [
    [ 'opentagstart', { name: 'xml', attributes: {} } ],
    [ 'opentag', { name: 'xml', attributes: {}, isSelfClosing: false } ],
    [ 'opentagstart', { name: 'script', attributes: {} } ],
    [ 'opentag', { name: 'script', attributes: {}, isSelfClosing: false } ],
    [ 'opencdata', undefined ],
    [ 'cdata', 'hello world' ],
    [ 'closecdata', undefined ],
    [ 'closetag', 'script' ],
    [ 'closetag', 'xml' ]
  ],
  strict: false,
  opt: { lowercasetags: true, noscript: true }
})

require = requireOrig;});
