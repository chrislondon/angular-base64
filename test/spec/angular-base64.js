'use strict';

describe("Anugular Base64", function() {
    beforeEach(module('ngBase64'));

    var Base64;

    beforeEach(inject(function(_Base64_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        Base64 = _Base64_;
    }));

    it("encodes to Base64", function() {
        expect(Base64.encode('Hello, World!')).toEqual('SGVsbG8sIFdvcmxkIQ==');
    });

    it("decodes from Base64", function() {
        expect(Base64.decode('SGVsbG8sIFdvcmxkIQ==')).toEqual('Hello, World!');
    });
});