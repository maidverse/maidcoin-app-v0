"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const TheMasterContract_1 = __importDefault(require("../contracts/TheMasterContract"));
const Wallet_1 = __importDefault(require("../ethereum/Wallet"));
class MaidCorp extends skynode_1.DomNode {
    constructor() {
        super(".maid-corp");
        this.depositHandler = async (userId, pid) => {
            const owner = await Wallet_1.default.loadAddress();
            if (owner?.toLowerCase() === userId.toHexString().toLowerCase() &&
                pid.eq(1) === true) {
                this.reward.empty().appendText("Reward: 0 $MAID");
            }
        };
        this.append(skynode_1.el("h4", "Maid Corporation"), this.reward = skynode_1.el(".reward"), this.control = skynode_1.el(".control", skynode_1.el("a.deposit-button", "Deposit", {
            click: async () => {
                const amount = prompt("How much amount to deposit?", "10");
                if (amount) {
                    await TheMasterContract_1.default.deposit(1, ethers_1.utils.parseEther(amount));
                }
            },
        }), skynode_1.el("a.withdraw-button", "Withdraw", {
            click: async () => {
                const amount = prompt("How much amount to withdraw?", "10");
                if (amount) {
                    await TheMasterContract_1.default.withdraw(1, ethers_1.utils.parseEther(amount));
                }
            },
        })));
        this.load();
        TheMasterContract_1.default.on("Deposit", this.depositHandler);
    }
    async load() {
        const owner = await Wallet_1.default.loadAddress();
        if (owner !== undefined) {
            skynode_1.el("a.claim-button", "Claim", {
                click: async () => {
                    await TheMasterContract_1.default.deposit(1, 0);
                },
            }).appendTo(this.control);
            this.reward.empty().appendText(`Reward: ${ethers_1.utils.formatEther(await TheMasterContract_1.default.getPendingReward(1, owner))} $MAID`);
        }
    }
    delete() {
        TheMasterContract_1.default.off("Deposit", this.depositHandler);
        super.delete();
    }
}
exports.default = MaidCorp;
//# sourceMappingURL=MaidCorp.js.map