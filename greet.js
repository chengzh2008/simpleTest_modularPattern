"use strict";

var greetObject = require("./lib/greetObject"),
    args = process.argv;
if (args.length >= 3) {
    console.log(greetObject.greet(args[2]));
} else {
    console.log(greetObject.greet());
}
