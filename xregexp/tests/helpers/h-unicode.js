define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;

var expect = require("tape-compat").expect;
var XRegExp = require("xregexp");
/*
 * Runs a series of `expect` assertions, given a Unicode token name and arrays of code points that
 * should or should not be matched.
 */
function testUnicodeToken(name, options) {
    var pattern = '^\\p{' + name + '}$';
    var negated = '^\\P{' + name + '}$';
    var astralRegex = XRegExp(pattern, 'A');
    var negatedAstralRegex = XRegExp(negated, 'A');
    var bmpRegex;
    var negatedBmpRegex;
    var isBmpChar;

    if (options.isAstralOnly) {
        expect(function() {XRegExp(pattern);}).toThrowError(SyntaxError);
        expect(function() {XRegExp(negated);}).toThrowError(SyntaxError);
    } else {
        bmpRegex = XRegExp(pattern);
        negatedBmpRegex = XRegExp(negated);
    }

    if (options.valid) {
        options.valid.forEach(function(chr) {
            expect(astralRegex.test(chr)).toBe(true);
            expect(negatedAstralRegex.test(chr)).toBe(false);
            if (!options.isAstralOnly) {
                isBmpChar = chr.length === 1; //chr.codePointAt(0) === chr.charCodeAt(0)
                expect(bmpRegex.test(chr)).toBe(isBmpChar);
                expect(negatedBmpRegex.test(chr)).toBe(false);
            }
        });
    }

    if (options.invalid) {
        options.invalid.forEach(function(chr) {
            expect(astralRegex.test(chr)).toBe(false);
            expect(negatedAstralRegex.test(chr)).toBe(true);
            if (!options.isAstralOnly) {
                isBmpChar = chr.length === 1; //chr.codePointAt(0) === chr.charCodeAt(0)
                expect(bmpRegex.test(chr)).toBe(false);
                expect(negatedBmpRegex.test(chr)).toBe(isBmpChar);
            }
        });
    }
}

exports.testUnicodeToken = testUnicodeToken;

require = requireOrig;});
