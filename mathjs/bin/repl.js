define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
#!/usr/bin/env node

/*
 * This simply preloads mathjs and drops you into a REPL to
 * help interactive debugging.
 **/
math = require('../index');
var repl = require('repl');

repl.start({useGlobal: true});

require = requireOrig;});
