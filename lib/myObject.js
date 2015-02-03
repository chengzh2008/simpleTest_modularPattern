"use strict";

var myObject = exports = module.exports = {};

myObject.greet = function(name) {
    if (name) {
        return "hello " + name;
    } else {
        return "hello there";
    }
}
