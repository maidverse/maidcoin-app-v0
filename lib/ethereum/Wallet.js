"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_provider_1 = __importDefault(require("@walletconnect/web3-provider"));
const ethers_1 = require("ethers");
const utils_1 = require("ethers/lib/utils");
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
        var _a;
        if (((_a = this.walletConnectProvider) === null || _a === void 0 ? void 0 : _a.connected) === false) {
            return undefined;
        }
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
    async signMessage(name, version, verifyingContract, spender, amount, nonce, timelimit) {
        var _a;
        const owner = await this.loadAddress();
        const deadline = ethers_1.constants.MaxUint256;
        const EIP712Domain = [
            { name: "name", type: "string" },
            { name: "version", type: "string" },
            { name: "chainId", type: "uint256" },
            { name: "verifyingContract", type: "address" },
        ];
        const domain = {
            name,
            version,
            chainId: Config_1.default.chainId,
            verifyingContract,
        };
        const Permit = [
            { name: "owner", type: "address" },
            { name: "spender", type: "address" },
            { name: "value", type: "uint256" },
            { name: "nonce", type: "uint256" },
            { name: "deadline", type: "uint256" },
        ];
        const message = {
            owner,
            spender,
            value: ethers_1.BigNumber.from(amount).toString(),
            nonce: ethers_1.BigNumber.from(nonce).toHexString(),
            deadline: ethers_1.BigNumber.from(deadline).toString(),
        };
        const data = JSON.stringify({
            types: {
                EIP712Domain,
                Permit,
            },
            domain,
            primaryType: "Permit",
            message,
        });
        const payload = { method: "eth_signTypedData_v4", params: [owner, data], from: owner };
        let signedMessage;
        if (this.existsInjectedProvider === true) {
            signedMessage = await this.ethereum.request(payload);
        }
        else {
            signedMessage = await ((_a = this.walletConnectProvider) === null || _a === void 0 ? void 0 : _a.request(payload));
        }
        console.log(signedMessage);
        const signature = utils_1.splitSignature(signedMessage);
        return {
            deadline,
            v: signature.v,
            r: signature.r,
            s: signature.s,
        };
    }
}
exports.default = new Wallet();
//# sourceMappingURL=Wallet.js.map