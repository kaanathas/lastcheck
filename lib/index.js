"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auto_gen_1 = require("./auto-gen");
var env;
process.argv.forEach(function (val, index) {
    console.log(val + "  " + index + "    in node");
    // env[index]=val;
});
var startCreataion = new auto_gen_1.AutoGenDoc();
var filelocation = process.argv[2];
startCreataion.generateDocs(filelocation);
