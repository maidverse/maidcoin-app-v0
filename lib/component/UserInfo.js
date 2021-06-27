"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const MaidCoinContract_1 = __importDefault(require("../contracts/MaidCoinContract"));
const Wallet_1 = __importDefault(require("../ethereum/Wallet"));
class UserInfo extends skynode_1.DomNode {
    constructor() {
        super(".user-info");
        this.connectHandler = () => {
            this.loadUserInfo();
            this.loadMaidCoin();
        };
        this.transferHandler = async (from, to, amount) => {
            const address = await Wallet_1.default.loadAddress();
            if (from === address || to === address) {
                this.loadMaidCoin();
            }
        };
        this.append(this.userInfo = skynode_1.el(".user-info", "Loading..."), this.maidCoinInfo = skynode_1.el(".maid-coin"));
        this.loadUserInfo();
        this.loadMaidCoin();
        Wallet_1.default.on("connect", this.connectHandler);
        MaidCoinContract_1.default.on("Transfer", this.transferHandler);
    }
    async loadUserInfo() {
        const owner = await Wallet_1.default.loadAddress();
        if (owner === undefined) {
            this.userInfo.empty().append(skynode_1.el("a.connect-button", "Connect", {
                click: () => Wallet_1.default.connect(),
            }));
        }
        else {
            this.userInfo.empty().append(skynode_1.el(".address", owner));
        }
    }
    async loadMaidCoin() {
        const owner = await Wallet_1.default.loadAddress();
        if (owner !== undefined) {
            const balance = await MaidCoinContract_1.default.balanceOf(owner);
            this.maidCoinInfo.empty().append(skynode_1.el(".balance", `Your Balance: ${ethers_1.utils.formatEther(balance)}`));
        }
    }
    delete() {
        Wallet_1.default.off("connect", this.connectHandler);
        MaidCoinContract_1.default.off("Transfer", this.transferHandler);
        super.delete();
    }
}
exports.default = UserInfo;
//# sourceMappingURL=UserInfo.js.map