"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_provider_1 = __importDefault(require("@walletconnect/web3-provider"));
const ethers_1 = require("ethers");
const eventcontainer_1 = __importDefault(require("eventcontainer"));
const Config_1 = __importDefault(require("../Config"));
class Wallet extends eventcontainer_1.default {
    constructor() {
        super();
        this.ethereum = window.ethereum;
        if (this.existsInjectedProvider === true) {
            this.provider = new ethers_1.ethers.providers.Web3Provider(this.ethereum);
            this.ethereum.on("chainChanged", (chainId) => {
                this.provider = new ethers_1.ethers.providers.Web3Provider(this.ethereum);
                this.signer = this.provider.getSigner();
                this.fireEvent("chainchange", ethers_1.BigNumber.from(chainId).toNumber());
            });
        }
        else {
            this.walletConnectProvider = new web3_provider_1.default({ infuraId: Config_1.default.infuraId });
            this.provider = new ethers_1.ethers.providers.Web3Provider(this.walletConnectProvider);
            this.walletConnectProvider.on("chainChanged", (chainId) => {
                this.fireEvent("chainchange", chainId);
            });
        }
        this.signer = this.provider.getSigner();
        this.checkConnected();
    }
    get existsInjectedProvider() { return this.ethereum !== undefined; }
    async checkConnected() {
        if (await this.connected() === true) {
            this.fireEvent("connect");
        }
    }
    async loadAddress() {
        return (await this.provider.listAccounts())[0];
    }
    async loadChainId() {
        const network = await this.provider.getNetwork();
        return network.chainId;
    }
    async connected() {
        return await this.loadAddress() !== undefined;
    }
    async connect() {
        var _a;
        if (this.existsInjectedProvider === true) {
            await this.ethereum.request({ method: "eth_requestAccounts" });
        }
        else {
            await ((_a = this.walletConnectProvider) === null || _a === void 0 ? void 0 : _a.enable());
        }
        this.checkConnected();
    }
}
exports.default = new Wallet();
//# sourceMappingURL=Wallet.js.map