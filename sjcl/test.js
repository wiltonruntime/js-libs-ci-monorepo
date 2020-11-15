/*
 * Copyright 2020, alex at staticlibs.net
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define([
    "is-in-browser",
    "sjcl",
    // a - b
    "./test/aes_test",
    "./test/bitArray_test",
    "./test/bn_test",
    // c
    "./test/cbc_test",
    "./test/ccm_test",
    "./test/ccm_arraybuffer_test",
    "./test/codec_arraybuffer_test",
    "./test/ctr_test",
    // e - g
    "./test/ecc_conv",
    "./test/ecc_test",
    "./test/ecdh_test",
    "./test/ecdsa_test",
    "./test/gcm_test",
    // h - o
    "./test/hkdf_test",
    "./test/hmac_test",
    "./test/json_test",
    "./test/ocb2_test",
    "./test/ocb2progressive_test",
    // p - s
    "./test/pbkdf2_test",
    "./test/ripemd160_test",
    "./test/scrypt_test",
    "./test/srp_test",
    // sha1
    "./test/sha1_huge_test",
    "./test/sha1_test",
    "./test/sha1_test_long_messages",
    // sha256
    "./test/sha256_huge_test",
    "./test/sha256_test",
    "./test/sha256_test_brute_force",
    "./test/sha256_test_long_messages",
    // sha512
    "./test/sha512_huge_test",
    "./test/sha512_test",
    "./test/sha512_test_brute_force",
    "./test/sha512_test_long_messages"
], function(
        isInBrowser, sjcl,
        // a - b
        aes_test, bitArray_test, bn_test,
        // c
        cbc_test, ccm_test, ccm_arraybuffer_test, codec_arraybuffer_test, ctr_test,
        // e - g
        ecc_conv, ecc_test, ecdh_test, ecdsa_test, gcm_test,
        // h - o
        hkdf_test, hmac_test, json_test, ocb2_test, ocb2progressive_test,
        // p - s
        pbkdf2_test, ripemd160_test, scrypt_test, srp_test,
        // sha1
        sha1_huge_test, sha1_test, sha1_test_long_messages,
        // sha256
        sha256_huge_test, sha256_test, sha256_test_brute_force, sha256_test_long_messages,
        // sha512
        sha512_huge_test, sha512_test, sha512_test_brute_force, sha512_test_long_messages
) {

    // helpers

    var isJIT = isInBrowser
            || "jsc" === WILTON_requiresync("wilton/misc").wiltonConfig().defaultScriptEngine
            || "chakra" === WILTON_requiresync("wilton/misc").wiltonConfig().defaultScriptEngine
            || "chakracore" === WILTON_requiresync("wilton/misc").wiltonConfig().defaultScriptEngine
            || "mozjs" === WILTON_requiresync("wilton/misc").wiltonConfig().defaultScriptEngine
            || "v8" === WILTON_requiresync("wilton/misc").wiltonConfig().defaultScriptEngine;

    var enableLongRunning = false;

    // prng init
    sjcl.random.addEntropy(42, 1024);

    // aes_test
    aes_test.forEach(function(ts) { ts.run(); });

    // bitArray_test
    bitArray_test.forEach(function(ts) { ts.run(); });

    if (isJIT) {
        // bn_test
        bn_test.forEach(function(ts) { ts.run(); });
    }

    // cbc_test
    cbc_test.forEach(function(ts) { ts.run(); });

    if (isJIT) {
        // ccm_test
        ccm_test.forEach(function(ts) { ts.run(); });

        if ("undefined" !== typeof(ArrayBuffer)) {
            // ccm_arraybuffer_test
            ccm_arraybuffer_test.forEach(function(ts) { ts.run(); });

            // codec_arraybuffer_test
            codec_arraybuffer_test.forEach(function(ts) { ts.run(); });
        }
    }

    // ctr_test
    ctr_test.forEach(function(ts) { ts.run(); });

    if ("undefined" !== typeof(ArrayBuffer)) {
        // ecc_conv
        ecc_conv.forEach(function(ts) { ts.run(); });
    }

    if (isJIT) {
        // ecc_test
        ecc_test.forEach(function(ts) { ts.run(); });

        if ("undefined" !== typeof(ArrayBuffer)) {
            // ecdh_test
            ecdh_test.forEach(function(ts) { ts.run(); });
        }

        // ecdsa_test
        ecdsa_test.forEach(function(ts) { ts.run(); });
    }

    // gcm_test
    gcm_test.forEach(function(ts) { ts.run(); });

    // hkdf_test
    hkdf_test.forEach(function(ts) { ts.run(); });

    // hmac_test
    hmac_test.forEach(function(ts) { ts.run(); });

    // json_test
    json_test.forEach(function(ts) { ts.run(); });

    // ocb2_test
    ocb2_test.forEach(function(ts) { ts.run(); });

    // ocb2progressive_test
    ocb2progressive_test.forEach(function(ts) { ts.run(); });

    // pbkdf2_test
    pbkdf2_test.forEach(function(ts) { ts.run(); });

    // ripemd160_test
    ripemd160_test.forEach(function(ts) { ts.run(); });

    if (enableLongRunning) {
        // scrypt_test
        // test: scrypt: pass, passed all 22 tests. (6632 ms)
        scrypt_test.forEach(function(ts) { ts.run(); });
    }

    // srp_test
    srp_test.forEach(function(ts) { ts.run(); });

    if (enableLongRunning) {
        // sha1_huge_test
        // test: SHA1 huge zero vector test: pass, passed all 7 tests. (15939 ms)
        sha1_huge_test.forEach(function(ts) { ts.run(); });
    }

    // sha1_test
    sha1_test.forEach(function(ts) { ts.run(); });

    if (isJIT) {
        // sha1_test_long_messages
        sha1_test_long_messages.forEach(function(ts) { ts.run(); });
    }

    if (enableLongRunning) {
        // sha256_huge_test
        // test: SHA-256 huge zero vector test: pass, passed all 7 tests. (17445 ms)
        sha256_huge_test.forEach(function(ts) { ts.run(); });
    }

    // sha256_test
    sha256_test.forEach(function(ts) { ts.run(); });

    if (isJIT) {
        // sha256_test_brute_force
        sha256_test_brute_force.forEach(function(ts) { ts.run(); });

        // sha256_test_long_messages
        sha256_test_long_messages.forEach(function(ts) { ts.run(); });
    }

    if (enableLongRunning) {
        // sha512_huge_test
        // test: SHA - 512 huge zero vector test: pass, passed all 7 tests.(36513 ms)
        sha512_huge_test.forEach(function(ts) { ts.run(); });
    }

    // sha512_test
    sha512_test.forEach(function(ts) { ts.run(); });

    if (isJIT) {
        // sha512_test_brute_force
        sha512_test_brute_force.forEach(function(ts) { ts.run(); });

        // sha512_test_long_messages
        sha512_test_long_messages.forEach(function(ts) { ts.run(); });
    }
});
