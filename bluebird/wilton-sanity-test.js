/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(["bluebird", "assert"], function(Promise, assert) {
    function guess(variant) {
        if (42 === variant) {
            return Promise.resolve(42);
        } else {
            return Promise.reject(new Error(variant));
        }
    }

    function attempt(variant) {
        return guess(variant).then(function(result) {
            return "success: " + result;
        }, function(err) {
            return "fail: " + err;
        }).value();
    }

    console.log("test: bluebird sanity");
    assert.equal(attempt(41), "fail: Error: 41");
    assert.equal(attempt(42), "success: 42");
    assert.equal(attempt(43), "fail: Error: 43");
    
    return {
        main: function() {
        }
    };
});

