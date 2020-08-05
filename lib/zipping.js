"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zipper = void 0;
var adm_zip_1 = __importDefault(require("adm-zip"));
var Zipper = /** @class */ (function () {
    function Zipper() {
        this.zip = new adm_zip_1.default;
    }
    Zipper.prototype.zipping = function () {
        var downloadName = process.argv[3] + ".zip";
        this.zip.addLocalFolder("my-app");
        this.zip.writeZip(process.argv[4] + "/" + downloadName);
    };
    return Zipper;
}());
exports.Zipper = Zipper;
