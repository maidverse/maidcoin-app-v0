"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const superagent_1 = __importDefault(require("superagent"));
const NurseRaidContract_1 = __importDefault(require("../../contracts/NurseRaidContract"));
const Wallet_1 = __importDefault(require("../../ethereum/Wallet"));
class NurseRaid extends skynode_1.DomNode {
    constructor(raidId) {
        super(".nurse-raid");
        this.raidId = raidId;
        this.append(skynode_1.el(".loading", "Loading..."));
        this.load();
        this.loadChallenger();
    }
    async load() {
        const raid = await NurseRaidContract_1.default.getRaid(this.raidId);
        const result = await superagent_1.default.post(`https://api.maidcoin.org/nursetype/${raid.nursePart}`);
        const tokenInfo = result.body;
        this.empty().append(skynode_1.el("img.image", { src: tokenInfo.image }), skynode_1.el(".info", skynode_1.el(".property", `Raid #${this.raidId}`), skynode_1.el(".property", `Entrance Fee: ${ethers_1.utils.formatEther(raid.entranceFee)}`), skynode_1.el(".property", `Nurse Part: ${raid.nursePart}`), skynode_1.el(".property", `Max Reward Count: ${raid.maxRewardCount}`), skynode_1.el(".property", `Duration: ${raid.duration}`), skynode_1.el(".property", `End Block: ${raid.endBlock}`), skynode_1.el(".control", skynode_1.el("a.enter-button", "Enter", {
            click: async () => {
                await NurseRaidContract_1.default.enter(this.raidId);
            },
        }), skynode_1.el("a.exit-button", "Exit", {
            click: async () => {
                await NurseRaidContract_1.default.exit(this.raidId);
            },
        }))));
    }
    async loadChallenger() {
        const owner = await Wallet_1.default.loadAddress();
        if (owner !== undefined) {
            console.log(this.raidId, await NurseRaidContract_1.default.getChallenger(this.raidId, owner));
            console.log(this.raidId, await NurseRaidContract_1.default.checkDone(this.raidId));
        }
    }
}
exports.default = NurseRaid;
//# sourceMappingURL=NurseRaid.js.map