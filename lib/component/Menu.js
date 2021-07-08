"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class Menu extends skynode_1.ClosableFloatingDomNode {
    constructor(position) {
        super(position, ".menu");
        this.append(skynode_1.el("", "Menu"));
        this.putInsideWindow();
    }
}
exports.default = Menu;
//# sourceMappingURL=Menu.js.map