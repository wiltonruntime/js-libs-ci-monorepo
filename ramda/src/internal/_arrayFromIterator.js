define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
};

require = requireOrig;});
