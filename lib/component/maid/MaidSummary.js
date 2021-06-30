"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const MaidContract_1 = __importDefault(require("../../contracts/MaidContract"));
class MaidSummary extends skynode_1.DomNode {
    constructor(maidId) {
        super(".maid-summary");
        this.maidId = maidId;
        this.append(skynode_1.el("", "Loading..."));
    }
    set maid(maid) {
        this.empty().append(skynode_1.el("", `Maid #${this.maidId}`), skynode_1.el("", `Origin Power: ${maid.originPower}`), skynode_1.el("", `Supported LP Token Amount: ${ethers_1.utils.formatEther(maid.supportedLPTokenAmount)}`), skynode_1.el("a.support-button", "Support", {
            click: async () => {
                const amount = prompt("How much amount to support?", "10");
                if (amount) {
                    await MaidContract_1.default.support(this.maidId, ethers_1.utils.parseEther(amount));
                }
            },
        }));
    }
}
exports.default = MaidSummary;
//# sourceMappingURL=MaidSummary.js.map