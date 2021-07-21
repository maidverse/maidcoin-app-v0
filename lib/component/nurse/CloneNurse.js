"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const superagent_1 = __importDefault(require("superagent"));
const CloneNurseContract_1 = __importDefault(require("../../contracts/CloneNurseContract"));
const TheMasterContract_1 = __importDefault(require("../../contracts/TheMasterContract"));
const Wallet_1 = __importDefault(require("../../ethereum/Wallet"));
class CloneNurse extends skynode_1.DomNode {
    constructor(nurseId) {
        super(".clone-nurse");
        this.nurseId = nurseId;
        this.append(skynode_1.el(".loading", "Loading..."));
        this.load();
    }
    async load() {
        const nurse = await CloneNurseContract_1.default.getNurse(this.nurseId);
        const nurseOwner = await CloneNurseContract_1.default.ownerOf(this.nurseId);
        const result = await superagent_1.default.post(`https://api.maidcoin.org/clonenurse/${this.nurseId}`);
        const tokenInfo = result.body;
        let control;
        let reward;
        let supporterReward;
        this.empty().append(skynode_1.el("img.image", { src: tokenInfo.image }), skynode_1.el(".info", skynode_1.el(".property", `Clone Nurse #${this.nurseId}`), skynode_1.el(".property", `Owner: ${nurseOwner}`), skynode_1.el(".property", `Type: ${nurse.nurseType}`), skynode_1.el(".property", `Supported Power: ${ethers_1.utils.formatEther(await CloneNurseContract_1.default.getSupportedPower(this.nurseId))}`), reward = skynode_1.el(".property"), supporterReward = skynode_1.el(".property"), control = skynode_1.el(".control")));
        const owner = await Wallet_1.default.loadAddress();
        if (owner !== undefined) {
            if (owner === nurseOwner) {
                skynode_1.el("a.claim-button", "Claim", {
                    click: async () => {
                        await CloneNurseContract_1.default.claim(this.nurseId);
                    },
                }).appendTo(control);
                reward.appendText(`Reward: ${ethers_1.utils.formatEther(await CloneNurseContract_1.default.getPendigReward(this.nurseId))} $MAID`);
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
                reward.appendText(`Supporter Reward: ${ethers_1.utils.formatEther(await TheMasterContract_1.default.getPendingReward(3, owner))} $MAID`);
            }
        }
    }
}
exports.default = CloneNurse;
//# sourceMappingURL=CloneNurse.js.map