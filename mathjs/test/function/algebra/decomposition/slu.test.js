define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var describe = require('tape-compat').describe;
var it = require('tape-compat').it;
var approx = require('../../../../tools/approx'),
    math = require('../../../../index');

describe('slu', function () {

  /**
   * C = A(p,q) where p is the row permutation vector and q the column permutation vector.
   */
  var _permute = function (A, pinv, q) {
    // matrix arrays
    var values = A._values;
    var index = A._index;
    var ptr = A._ptr;
    var size = A._size;
    // columns
    var n = size[1];
    // c arrays
    var cvalues = [];
    var cindex = [];
    var cptr = [];
    // loop columns
    for (var k = 0 ; k < n ; k++) {
      cptr[k] = cindex.length;
      // column in C
      var j = q ? (q[k]) : k;
      // values in column j
      for (var t = ptr[j]; t < ptr[j + 1]; t++) {
        cvalues.push(values[t]);
        cindex.push(pinv ? (pinv[index[t]]) : index[t]);
      }
    }
    cptr[n] = cindex.length;
    // return matrix
    return new math.type.SparseMatrix({
      values: cvalues,
      index: cindex,
      ptr: cptr,
      size: size,
      datatype: A._datatype
    });
  };

  it('should decompose matrix, 4 x 4, natural ordering (order=0), partial pivoting', function () {

    var m = math.sparse(
      [
        [4.5,   0, 3.2,   0],
        [3.1, 2.9,   0, 0.9],
        [0,   1.7,   3,   0],
        [3.5, 0.4,   0,   1]
      ]);

    // partial pivoting
    var r = math.slu(m, 0, 1);

    // verify M[p,q]=L*U
    approx.deepEqual(_permute(m, r.p, r.q).valueOf(), math.multiply(r.L, r.U).valueOf());
  });

  it('should decompose matrix, 4 x 4, amd(A+A\') (order=1)', function () {

    var m = math.sparse(
      [
        [4.5,   0, 3.2,   0],
        [3.1, 2.9,   0, 0.9],
        [0,   1.7,   3,   0],
        [3.5, 0.4,   0,   1]
      ]);

    // partial pivoting
    var r = math.slu(m, 1, 1);

    // verify M[p,q]=L*U
    approx.deepEqual(_permute(m, r.p, r.q).valueOf(), math.multiply(r.L, r.U).valueOf());
  });

  it('should decompose matrix, 4 x 4, amd(A\'*A) (order=2), partial pivoting', function () {

    var m = math.sparse(
      [
        [4.5,   0, 3.2,   0],
        [3.1, 2.9,   0, 0.9],
        [0,   1.7,   3,   0],
        [3.5, 0.4,   0,   1]
      ]);

    // partial pivoting
    var r = math.slu(m, 2, 1);

    // verify M[p,q]=L*U
    approx.deepEqual(_permute(m, r.p, r.q).valueOf(), math.multiply(r.L, r.U).valueOf());
  });

  it('should decompose matrix, 4 x 4, amd(A\'*A) (order=3), partial pivoting', function () {

    var m = math.sparse(
      [
        [4.5,   0, 3.2,   0],
        [3.1, 2.9,   0, 0.9],
        [0,   1.7,   3,   0],
        [3.5, 0.4,   0,   1]
      ]);

    // partial pivoting
    var r = math.slu(m, 3, 1);

    // verify M[p,q]=L*U
    approx.deepEqual(_permute(m, r.p, r.q).valueOf(), math.multiply(r.L, r.U).valueOf());
  });

});

require = requireOrig;});
