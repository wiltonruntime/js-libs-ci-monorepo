define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = function(str) {
  return str.replace(/./g, function(c) {
    return "\\u" + ('000' + c.charCodeAt(0).toString(16)).substr(-4);
  });
};

require = requireOrig;});
