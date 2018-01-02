define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
require("sax/test/index").test({
  xml: '<xml:root/>',
  expect: [
    [
      'opentagstart',
      {
        name: 'xml:root',
        attributes: {},
        ns: {}
      }
    ],
    [
      'opentag',
      {
        name: 'xml:root',
        uri: 'http://www.w3.org/XML/1998/namespace',
        prefix: 'xml',
        local: 'root',
        attributes: {},
        ns: {},
        isSelfClosing: true
      }
    ],
    [
      'closetag',
      'xml:root'
    ]
  ],
  strict: true,
  opt: { xmlns: true }
})

require = requireOrig;});
