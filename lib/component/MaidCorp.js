"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class MaidCorp extends skynode_1.DomNode {
    constructor() {
        super(".maid-corp");
        this.append(skynode_1.el("h4", "Maid Corporation"), skynode_1.el(".control", skynode_1.el("a.deposit-button", "Deposit", {
            click: async () => {
                const amount = prompt("How much amount to deposit?", "10");
                if (amount) {
                }
            },
        }), skynode_1.el("a.withdraw-button", "Withdraw", {
            click: async () => {
                const amount = prompt("How much amount to withdraw?", "10");
                if (amount) {
                }
            },
        })));
    }
}
exports.default = MaidCorp;
//# sourceMappingURL=MaidCorp.js.map