/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(["bluebird/js/browser/bluebird"], function(Promise) {
    Promise.onPossiblyUnhandledRejection(function() {
        /* Due to wiltons sync nature these BB warnings are misleading */
    });
    return Promise;
});
