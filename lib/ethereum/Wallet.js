"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const eventcontainer_1 = __importDefault(require("eventcontainer"));
class Wallet extends eventcontainer_1.default {
    constructor() {
        super();
        this.ethereum = window.ethereum;
        if (this.existsProvider === true) {
            this.provider = new ethers_1.ethers.providers.Web3Provider(this.ethereum);
            this.signer = this.provider.getSigner();
            this.ethereum.on("chainChanged", (chainId) => {
                this.provider = new ethers_1.ethers.providers.Web3Provider(this.ethereum);
                this.signer = this.provider.getSigner();
                this.fireEvent("chainchange", ethers_1.BigNumber.from(chainId).toNumber());
            });
        }
    }
    get existsProvider() { return this.ethereum !== undefined; }
    async loadAddress() {
        return this.provider === undefined ? undefined : (await this.provider.listAccounts())[0];
    }
    async loadChainId() {
        var _a;
        const network = await ((_a = this.provider) === null || _a === void 0 ? void 0 : _a.getNetwork());
        return network === null || network === void 0 ? void 0 : network.chainId;
    }
    async connected() {
        return await this.loadAddress() !== undefined;
    }
    async connect() {
        await this.ethereum.request({ method: "eth_requestAccounts" });
    }
}
exports.default = new Wallet();
//# sourceMappingURL=Wallet.js.map