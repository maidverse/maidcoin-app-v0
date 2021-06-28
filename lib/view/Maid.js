"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const MaidContract_1 = __importDefault(require("../contracts/MaidContract"));
const Layout_1 = __importDefault(require("./Layout"));
class Maid {
    constructor() {
        Layout_1.default.current.content.append(this.container = skynode_1.el("#maid", "Maid!"));
        this.loadMaids();
    }
    async loadMaids() {
        console.log((await MaidContract_1.default.getTotalSupply()).toString());
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Maid;
//# sourceMappingURL=Maid.js.map