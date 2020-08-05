"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoGenDoc = void 0;
var sample_code_gen_1 = require("./sample-code-gen");
var AutoGenDoc = /** @class */ (function () {
    function AutoGenDoc() {
        this.creation = new sample_code_gen_1.DocsCreation();
    }
    AutoGenDoc.prototype.generateDocs = function (filePath) {
        try {
            this.creation.HtmlDocCreate(filePath);
            this.creation.ReactDocCreate(filePath);
        }
        catch (e) {
            console.log("this wsa an error while sample genaration" + e);
        }
    };
    return AutoGenDoc;
}());
exports.AutoGenDoc = AutoGenDoc;
