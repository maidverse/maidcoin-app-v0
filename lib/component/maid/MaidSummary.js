"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const superagent_1 = __importDefault(require("superagent"));
const MaidContract_1 = __importDefault(require("../../contracts/MaidContract"));
const MaidDetail_1 = __importDefault(require("./MaidDetail"));
class MaidSummary extends skynode_1.DomNode {
    constructor(maidId) {
        super(".maid-summary");
        this.maidId = maidId;
        this.append(skynode_1.el(".loading", "Loading..."));
        this.load();
        this.onDom("click", () => new MaidDetail_1.default(maidId));
    }
    async load() {
        const maid = await MaidContract_1.default.getMaid(this.maidId);
        const result = await superagent_1.default.post(`https://api.maidcoin.org/maid/${this.maidId}`);
        const tokenInfo = result.body;
        this.empty().append(skynode_1.el("img.image", { src: `https://storage.googleapis.com/maidcoin/Catalog/${tokenInfo.name}Catalog.png` }), skynode_1.el(".info", skynode_1.el("h4.name", tokenInfo.name), skynode_1.el(".property", `Origin Power: ${maid.originPower}`), skynode_1.el(".property", `Supported LP Token Amount: ${ethers_1.utils.formatEther(maid.supportedLPTokenAmount)}`), skynode_1.el(".control", skynode_1.el("a.support-button", "Support", {
            click: async (event) => {
                event.stopPropagation();
                const amount = prompt("How much amount to support?", "10");
                if (amount) {
                    await MaidContract_1.default.support(this.maidId, ethers_1.utils.parseEther(amount));
                }
            },
        }))));
    }
}
exports.default = MaidSummary;
//# sourceMappingURL=MaidSummary.js.map