"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const superagent_1 = __importDefault(require("superagent"));
const MaidContract_1 = __importDefault(require("../../contracts/MaidContract"));
const Sound_1 = __importDefault(require("./Sound"));
class MaidDetail extends skynode_1.Popup {
    constructor(maidId) {
        super(".maid-detail");
        this.maidId = maidId;
        this.append(this.content = skynode_1.el(".content", skynode_1.el(".loading", "Loading...")), skynode_1.el("a.close-button.fas.fa-times", {
            click: () => this.delete(),
        }));
        this.load();
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max + 1 - min)) + min;
    }
    async load() {
        const maid = await MaidContract_1.default.getMaid(this.maidId);
        const result = await superagent_1.default.post(`https://api.maidcoin.org/maid/${this.maidId}`);
        const tokenInfo = result.body;
        this.content.empty().append(skynode_1.el(".image", skynode_1.el("img", { src: tokenInfo.image })), skynode_1.el(".info", skynode_1.el("h4.name", tokenInfo.name), skynode_1.el(".property", `Origin Power: ${maid.originPower}`), skynode_1.el(".property", `Supported LP Token Amount: ${ethers_1.utils.formatEther(maid.supportedLPTokenAmount)}`), skynode_1.el("a.voice-button", skynode_1.el("img", { src: "/images/voice-button.png", srcSet: "/images/voice-button@2x.png 2x" }), {
            click: () => {
                new Sound_1.default({
                    wav: `https://storage.googleapis.com/maidcoin/Voice/${tokenInfo.name}/${tokenInfo.name}LobbyTap${this.getRandomInt(1, 2)}.wav`,
                }).play();
            },
        })));
    }
}
exports.default = MaidDetail;
//# sourceMappingURL=MaidDetail.js.map