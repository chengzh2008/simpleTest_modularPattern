"use strict";

var myObject = require("./lib/myObject"),
    args = process.argv;
if (args.length >= 3) {
    console.log(myObject.greet(args[2]));
} else {
    console.log(myObject.greet());
}
