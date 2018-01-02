/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(["validator/lib/isAlphanumeric", "assert"], function(isAlphanumeric, assert) {   
    print("test: validator sanity");
    assert(isAlphanumeric("foo42"));
    assert(!isAlphanumeric("foo42$"));
    
    return {
        main: function() {
        }
    };
});
