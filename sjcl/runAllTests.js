
define([
    "lodash/forEach",
    "sjcl",
    "sjcl/test/test"
], function(forEach, sjcl) {

    // prng init
    sjcl.random.addEntropy(42, 1024);

    require(["sjcl/test/aes_test"], function(tests) {
        forEach(tests, function(ts) { ts.run(); });
    });

    require(["sjcl/test/bitArray_test"], function(tests) {
        forEach(tests, function(ts) { ts.run(); });
    });

    require(["sjcl/test/cbc_test"], function(tests) {
        forEach(tests, function(ts) { ts.run(); });
    });

    require(["sjcl/test/ctr_test"], function(tests) {
        forEach(tests, function(ts) { ts.run(); });
    });

    require(["sjcl/test/gcm_test"], function(tests) {
        forEach(tests, function(ts) { ts.run(); });
    });

    require(["sjcl/test/hkdf_test"], function(tests) {
        forEach(tests, function(ts) { ts.run(); });
    });

    require(["sjcl/test/hmac_test"], function(tests) {
        forEach(tests, function(ts) { ts.run(); });
    });

    require(["sjcl/test/json_test"], function(tests) {
        forEach(tests, function(ts) { ts.run(); });
    });

    require(["sjcl/test/ocb2_test"], function(tests) {
        forEach(tests, function(ts) { ts.run(); });
    });

    require(["sjcl/test/ocb2progressive_test"], function(tests) {
        forEach(tests, function(ts) { ts.run(); });
    });

    require(["sjcl/test/ripemd160_test"], function(tests) {
        forEach(tests, function(ts) { ts.run(); });
    });

    /* // slow
    require(["sjcl/test/scrypt_test"], function(tests) {
        forEach(tests, function(ts) { ts.run(); });
    });
    */
    
    require(["sjcl/test/srp_test"], function(tests) {
        forEach(tests, function(ts) { ts.run(); });
    });

    require(["sjcl/test/sha1_test"], function(tests) {
        forEach(tests, function(ts) { ts.run(); });
    });

    require(["sjcl/test/sha256_test"], function(tests) {
        forEach(tests, function(ts) { ts.run(); });
    });

    require(["sjcl/test/sha512_test"], function(tests) {
        forEach(tests, function(ts) { ts.run(); });
    });

    // JIT-only

    var browser = "undefined" === typeof(WILTON_wiltoncall);

    if (browser || "jsc" === WILTON_requiresync("wilton/misc").wiltonConfig().defaultScriptEngine) {

        require(["sjcl/test/bn_test"], function(tests) {
            forEach(tests, function(ts) { ts.run(); });
        });

        require(["sjcl/test/ccm_test"], function(tests) {
            forEach(tests, function(ts) { ts.run(); });
        });

        require(["sjcl/test/ecc_test"], function(tests) {
            forEach(tests, function(ts) { ts.run(); });
        });

        require(["sjcl/test/ecdsa_test"], function(tests) {
            forEach(tests, function(ts) { ts.run(); });
        });

        require(["sjcl/test/pbkdf2_test"], function(tests) {
            forEach(tests, function(ts) { ts.run(); });
        });


        // ArrayBuffer

        if ("undefined" !== typeof(ArrayBuffer)) {

            require(["sjcl/test/ccm_arraybuffer_test"], function(tests) {
                forEach(tests, function(ts) { ts.run(); });
            });

            require(["sjcl/test/codec_arraybuffer_test"], function(tests) {
                forEach(tests, function(ts) { ts.run(); });
            });

            require(["sjcl/test/ecc_conv"], function(tests) {
                forEach(tests, function(ts) { ts.run(); });
            });

            require(["sjcl/test/ecdh_test"], function(tests) {
                forEach(tests, function(ts) { ts.run(); });
            });

        }

    }
});
