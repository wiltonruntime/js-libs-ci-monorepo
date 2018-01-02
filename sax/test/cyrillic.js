define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
require("sax/test/index").test({
  xml: '<Р>тест</Р>',
  expect: [
    ['opentagstart', {'name': 'Р', attributes: {}}],
    ['opentag', {'name': 'Р', attributes: {}, isSelfClosing: false}],
    ['text', 'тест'],
    ['closetag', 'Р']
  ]
})

require = requireOrig;});
