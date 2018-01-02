define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
module.exports = StringStream

var inherits = require('inherits')
var stream = require('readable-stream')
var nextTick = require("process-nextick-args")

inherits(StringStream, stream.Readable)

function StringStream (str) {
  if (!(this instanceof StringStream)) return new StringStream(str)
  if ("string" !== typeof(str)) {
      throw new Error("Invalid non-string contents specified: [" + str + "]");
  }
  stream.Readable.call(this)
  this._str = str
}

StringStream.prototype._read = function () {
  if (null !== this._str) {
    var self = this;
    var str = self._str;
    self._str = null;
    nextTick(function () {
      self.push(new Buffer(str))
      self.push(null)
    });
  }
}

require = requireOrig;});
