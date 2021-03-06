define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
'use strict';
var Buffer = require('buffer/../').Buffer;

// Flags: --zero-fill-buffers

// when using --zero-fill-buffers, every Buffer and SlowBuffer
// instance must be zero filled upon creation


var SlowBuffer = require('buffer/../').SlowBuffer;
var assert = require('assert');

function isZeroFilled(buf) {
  for (var n = 0; n < buf.length; n++)
    if (buf[n] > 0) return false;
  return true;
}

// This can be somewhat unreliable because the
// allocated memory might just already happen to
// contain all zeroes. The test is run multiple
// times to improve the reliability.
for (var i = 0; i < 50; i++) {
  var bufs = [
    Buffer.alloc(20),
    Buffer.allocUnsafe(20),
    SlowBuffer(20),
    Buffer(20),
    new SlowBuffer(20)
  ];
  for (var buf of bufs) {
    assert(isZeroFilled(buf));
  }
}


require = requireOrig;});
