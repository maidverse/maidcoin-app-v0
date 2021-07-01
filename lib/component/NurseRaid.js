"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const NurseRaidContract_1 = __importDefault(require("../contracts/NurseRaidContract"));
const Wallet_1 = __importDefault(require("../ethereum/Wallet"));
class NurseRaid extends skynode_1.DomNode {
    constructor(raidId) {
        super(".nurse-raid");
        this.raidId = raidId;
        this.append(skynode_1.el("", "Loading..."));
        this.loadChallenger();
    }
    set raid(raid) {
        this.empty().append(skynode_1.el("", `Raid #${this.raidId}`), skynode_1.el("", `Entrance Fee: ${ethers_1.utils.formatEther(raid.entranceFee)}`), skynode_1.el("", `Nurse Part: ${raid.nursePart}`), skynode_1.el("", `Max Reward Count: ${raid.maxRewardCount}`), skynode_1.el("", `Duration: ${raid.duration}`), skynode_1.el("", `End Block: ${raid.endBlock}`), skynode_1.el("a.enter-button", "Enter", {
            click: async () => {
                await NurseRaidContract_1.default.enter(this.raidId);
            },
        }), skynode_1.el("a.exit-button", "Exit", {
            click: async () => {
                await NurseRaidContract_1.default.exit(this.raidId);
            },
        }));
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