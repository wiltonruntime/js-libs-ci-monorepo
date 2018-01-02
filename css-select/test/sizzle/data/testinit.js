define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
var assert = require("assert"),
    util = require("util"),
    helper = require("css-select/test/tools/helper.js"),
    CSSselect = helper.CSSselect,
    docPath = "sizzle/data/index.html",
    document = null;


//in this module, the only use-case is to compare arrays of
function deepEqual(a, b, msg){
	try {
		assert.deepEqual(a, b, msg);
	} catch(e) {
		function getId(n){return n && n.attribs.id; }
		e.actual = JSON.stringify(a.map(getId), 0, 2);
		e.expected = JSON.stringify(b.map(getId), 0, 2);
		throw e;
	}
}

function loadDoc(){
	return document = helper.getDocument(docPath);
}

module.exports = {
	q: q,
	t: t,
	loadDoc: loadDoc,
	createWithFriesXML: createWithFriesXML
};

/**
 * Returns an array of elements with the given IDs
 * @example q("main", "foo", "bar")
 * @result [<div id="main">, <span id="foo">, <input id="bar">]
 */
function q() {
	var r = [],
		i = 0;

	for ( ; i < arguments.length; i++ ) {
		r.push( document.getElementById( arguments[i] ) );
	}
	return r;
}

/**
 * Asserts that a select matches the given IDs
 * @param {String} a - Assertion name
 * @param {String} b - Sizzle selector
 * @param {String} c - Array of ids to construct what is expected
 * @example t("Check for something", "//[a]", ["foo", "baar"]);
 * @result returns true if "//[a]" return two elements with the IDs 'foo' and 'baar'
 */
function t( a, b, c ) {
	var f = CSSselect(b, document),
		s = "",
		i = 0;
        
	for ( ; i < f.length; i++ ) {
		s += ( s && "," ) + '"' + f[ i ].id + '"';
	}
        function getId(n) {
            return n && n.attribs.id;
        }
        function compId(first, second) {
            var fid = getId(first);
            var sid = getId(second);
            if (fid === sid) {
                return 0;
            }
            return fid > sid ? 1 : -1;
        }
        f.sort(compId);
        var cw = q.apply(q, c);
        cw.sort(compId);
	deepEqual(f, cw, a + " (" + b + ")");
}

/**
 * Add random number to url to stop caching
 *
 * @example url("data/test.html")
 * @result "data/test.html?10538358428943"
 *
 * @example url("data/test.php?foo=bar")
 * @result "data/test.php?foo=bar&10538358345554"
 */
function url( value ) {
	return value + (/\?/.test(value) ? "&" : "?") + new Date().getTime() + "" + parseInt(Math.random()*100000);
}

var xmlDoc = helper.getDOMFromPath("sizzle/data/fries.xml", { xmlMode: true });
var filtered = xmlDoc.filter(function(t){return t.type === "tag"});
xmlDoc.lastChild = filtered[filtered.length - 1];

function createWithFriesXML() {
	return xmlDoc;
}

require = requireOrig;});
