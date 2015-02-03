"use strict";

var expect = require("chai").expect,
    myObject = require("../lib/myObject");

describe("myObject test", function() {
    it("should greet with input name", function() {
        expect(myObject.greet("javascript")).to.eql("hello javascript");
    });

    it("should greet without input name", function() {
        expect(myObject.greet()).to.eql("hello there");
    });
});
