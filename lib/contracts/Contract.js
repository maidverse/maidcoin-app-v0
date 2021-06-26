"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const eventcontainer_1 = __importDefault(require("eventcontainer"));
const NetworkProvider_1 = __importDefault(require("../ethereum/NetworkProvider"));
const Wallet_1 = __importDefault(require("../ethereum/Wallet"));
class Contract extends eventcontainer_1.default {
    constructor(address, abi) {
        super();
        this.address = address;
        this.abi = abi;
        this.contract = new ethers_1.ethers.Contract(address, abi, NetworkProvider_1.default.provider).connect(NetworkProvider_1.default.signer);
    }
    async loadWalletContract() {
        if (this.walletContract === undefined && Wallet_1.default.signer !== undefined) {
            this.walletContract = new ethers_1.ethers.Contract(this.address, this.abi, Wallet_1.default.provider).connect(Wallet_1.default.signer);
        }
        return this.walletContract;
    }
}
exports.default = Contract;
//# sourceMappingURL=Contract.js.map