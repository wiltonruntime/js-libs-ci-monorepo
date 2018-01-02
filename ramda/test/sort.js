define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var R = require('ramda');
var eq = require('ramda/test/shared/eq');var describe = require("tape-compat").describe;var it = require("tape-compat").it;


describe('sort', function() {
  it('sorts the elements of a list', function() {
    eq(R.sort(function(a, b) {return a - b;}, [3, 1, 8, 1, 2, 5]), [1, 1, 2, 3, 5, 8]);
  });

  it('does not affect the list passed supplied', function() {
    var list = [3, 1, 8, 1, 2, 5];
    eq(R.sort(function(a, b) {return a - b;}, list), [1, 1, 2, 3, 5, 8]);
    eq(list, [3, 1, 8, 1, 2, 5]);
  });

/* // broken in Duktape
  it('is curried', function() {
    var sortByLength = R.sort(function(a, b) {return a.length - b.length;});
    eq(sortByLength(['one', 'two', 'three', 'four', 'five', 'six']),
       ['one', 'two', 'six', 'four', 'five', 'three']);
  });
*/

});

require = requireOrig;});
