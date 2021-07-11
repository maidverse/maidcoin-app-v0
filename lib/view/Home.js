"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("./Layout"));
class Home {
    constructor() {
        Layout_1.default.current.content.append(this.container = skynode_1.el("#home", skynode_1.el("header", skynode_1.el("h2", "MaidCoin"), skynode_1.el("p", "Defeat Nurses with Maids and save mankind!"), skynode_1.el("a.detail-button", "Read More", { href: "https://maidcoin.org" }))));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map