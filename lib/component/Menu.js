"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class Menu extends skynode_1.ClosableFloatingDomNode {
    constructor(position) {
        super(position, ".menu");
        this.append(skynode_1.el("a.menu-item", "Open Source", { href: "https://github.com/maidcoingit", target: "_blank" }), skynode_1.el("a.menu-item", "Discord", { href: "https://discord.gg/ZMWNjs6F3V", target: "_blank" }), skynode_1.el("a.menu-item", "Telegram", { href: "https://t.me/maidcoingroup", target: "_blank" }), skynode_1.el("a.menu-item", "Twitter", { href: "https://twitter.com/maid_coin", target: "_blank" }));
        this.putInsideWindow();
    }
}
exports.default = Menu;
//# sourceMappingURL=Menu.js.map