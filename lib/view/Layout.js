"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const skyrouter_1 = require("skyrouter");
const Menu_1 = __importDefault(require("../component/Menu"));
const UserInfo_1 = __importDefault(require("../component/UserInfo"));
class Layout {
    constructor() {
        Layout.current = this;
        skynode_1.BodyNode.append(this.container = skynode_1.el("#layout", skynode_1.el("header", skynode_1.el("h1", skynode_1.el("a", skynode_1.el("img.logo", { src: "/images/logo.png" }), { click: () => skyrouter_1.SkyRouter.go("/") })), skynode_1.el("nav", skynode_1.el("a", "Home", { click: () => skyrouter_1.SkyRouter.go("/") }), skynode_1.el("a", "Maid", { click: () => skyrouter_1.SkyRouter.go("/maid") }), skynode_1.el("a", "Nurse", { click: () => skyrouter_1.SkyRouter.go("/nurse") }), skynode_1.el("a", "Earn", { click: () => skyrouter_1.SkyRouter.go("/earn") }), skynode_1.el("a", "Test LP Token", { click: () => skyrouter_1.SkyRouter.go("/test-lp-token") })), new UserInfo_1.default(), skynode_1.el("a.more-button.fas.fa-ellipsis-h", {
            click: (event) => new Menu_1.default({ left: event.x, top: event.y }).appendTo(skynode_1.BodyNode),
        })), this.content = skynode_1.el("main"), skynode_1.el("footer", "All rights reserved, MaidCoin")));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Layout;
//# sourceMappingURL=Layout.js.map