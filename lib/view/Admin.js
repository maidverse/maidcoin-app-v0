"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const MaidContract_1 = __importDefault(require("../contracts/MaidContract"));
const Layout_1 = __importDefault(require("./Layout"));
class Admin {
    constructor() {
        Layout_1.default.current.content.append(this.container = skynode_1.el("#admin", skynode_1.el("h2", "Admin Console"), skynode_1.el(".control", skynode_1.el("a.mint-maid-button", "Mint Maid", {
            click: async () => {
                const power = prompt("Please enter the maid's power", "50");
                if (power) {
                    await MaidContract_1.default.mint(power);
                }
            },
        }))));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Admin;
//# sourceMappingURL=Admin.js.map