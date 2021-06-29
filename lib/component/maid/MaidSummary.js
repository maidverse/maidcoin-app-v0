"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
class MaidSummary extends skynode_1.DomNode {
    constructor() {
        super(".maid-summary");
        this.append(skynode_1.el("", "Loading..."));
    }
    set maid(maid) {
        this.empty().append(skynode_1.el("", `Origin Power: ${maid.originPower}`), skynode_1.el("", `Supported LP Token Amount: ${maid.supportedLPTokenAmount}`));
    }
}
exports.default = MaidSummary;
//# sourceMappingURL=MaidSummary.js.map