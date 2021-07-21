"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const superagent_1 = __importDefault(require("superagent"));
const CommonUtil_1 = __importDefault(require("../../CommonUtil"));
const CloneNurseContract_1 = __importDefault(require("../../contracts/CloneNurseContract"));
const TheMasterContract_1 = __importDefault(require("../../contracts/TheMasterContract"));
const Wallet_1 = __importDefault(require("../../ethereum/Wallet"));
class CloneNurse extends skynode_1.DomNode {
    constructor(nurseId) {
        super(".clone-nurse");
        this.nurseId = nurseId;
        this.claimHandler = async (id, claimer, reward) => {
            if (id.eq(this.nurseId) === true) {
                this.reward?.appendText("Reward: 0 $MAID");
            }
        };
        this.changeSupportedPowerHandler = async (id, power) => {
            if (id.eq(this.nurseId) === true) {
                this.reward?.appendText("Reward: 0 $MAID");
                this.supportedPower?.appendText(`Supported Power: ${ethers_1.utils.formatEther(power)}`);
            }
        };
        this.supportHandler = async (supporter, pid) => {
            const owner = await Wallet_1.default.loadAddress();
            if (owner === supporter && pid.eq(3) === true) {
                this.supporterReward?.appendText("Supporter Reward: 0 $MAID");
            }
        };
        this.desupportHandler = async (supporter, pid) => {
            const owner = await Wallet_1.default.loadAddress();
            if (owner === supporter && pid.eq(3) === true) {
                this.supporterReward?.appendText("Supporter Reward: 0 $MAID");
            }
        };
        this.append(skynode_1.el(".loading", "Loading..."));
        this.load();
        CloneNurseContract_1.default.on("Claim", this.claimHandler);
        CloneNurseContract_1.default.on("ChangeSupportedPower", this.changeSupportedPowerHandler);
        TheMasterContract_1.default.on("Support", this.supportHandler);
        TheMasterContract_1.default.on("Desupport", this.desupportHandler);
    }
    async load() {
        const nurse = await CloneNurseContract_1.default.getNurse(this.nurseId);
        const nurseOwner = await CloneNurseContract_1.default.ownerOf(this.nurseId);
        const result = await superagent_1.default.post(`https://api.maidcoin.org/clonenurse/${this.nurseId}`);
        const tokenInfo = result.body;
        let control;
        this.empty().append(skynode_1.el("img.image", { src: tokenInfo.image }), skynode_1.el(".info", skynode_1.el(".property", `Clone Nurse #${this.nurseId}`), skynode_1.el(".property", `Owner: ${CommonUtil_1.default.shortenAddress(nurseOwner)}`), skynode_1.el(".property", `Type: ${nurse.nurseType}`), this.supportedPower = skynode_1.el(".property", `Supported Power: ${ethers_1.utils.formatEther(await CloneNurseContract_1.default.getSupportedPower(this.nurseId))}`), this.reward = skynode_1.el(".property"), this.supporterReward = skynode_1.el(".property"), control = skynode_1.el(".control")));
        this.supportedPower.on("delete", () => this.supportedPower = undefined);
        this.reward.on("delete", () => this.reward = undefined);
        this.supporterReward.on("delete", () => this.supporterReward = undefined);
        const owner = await Wallet_1.default.loadAddress();
        if (owner !== undefined) {
            if (owner === nurseOwner) {
                skynode_1.el("a.claim-button", "Claim", {
                    click: async () => {
                        await CloneNurseContract_1.default.claim(this.nurseId);
                    },
                }).appendTo(control);
                this.reward.appendText(`Reward: ${ethers_1.utils.formatEther(await CloneNurseContract_1.default.getPendigReward(this.nurseId))} $MAID`);
            }
            const supportingAmount = await TheMasterContract_1.default.getSupportingAmount(owner);
            const supportingTo = (await CloneNurseContract_1.default.getSupportingTo(owner)).toNumber();
            if (supportingAmount.eq(0) === true) {
                skynode_1.el("a.support-button", "Support", {
                    click: async () => {
                        const amount = prompt("How much amount to support?", "10");
                        if (amount) {
                            await TheMasterContract_1.default.support(3, ethers_1.utils.parseEther(amount), this.nurseId);
                        }
                    },
                }).appendTo(control);
            }
            else if (supportingTo === this.nurseId) {
                skynode_1.el("a.desupport-button", "Desupport", {
                    click: async () => {
                        const amount = prompt("How much amount to desupport?", "10");
                        if (amount) {
                            await TheMasterContract_1.default.desupport(3, ethers_1.utils.parseEther(amount));
                        }
                    },
                }).appendTo(control);
                skynode_1.el("a.claim-button", "Supporter Claim", {
                    click: async () => {
                        await TheMasterContract_1.default.support(3, 0, this.nurseId);
                    },
                }).appendTo(control);
                this.reward.appendText(`Supporter Reward: ${ethers_1.utils.formatEther(await TheMasterContract_1.default.getPendingReward(3, owner))} $MAID`);
            }
        }
    }
    delete() {
        CloneNurseContract_1.default.off("Claim", this.claimHandler);
        CloneNurseContract_1.default.off("ChangeSupportedPower", this.changeSupportedPowerHandler);
        TheMasterContract_1.default.off("Support", this.supportHandler);
        TheMasterContract_1.default.off("Desupport", this.desupportHandler);
        super.delete();
    }
}
exports.default = CloneNurse;
//# sourceMappingURL=CloneNurse.js.map