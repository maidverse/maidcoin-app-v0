"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const eventcontainer_1 = __importDefault(require("eventcontainer"));
const Config_1 = __importDefault(require("../Config"));
const NetworkProvider_1 = __importDefault(require("../ethereum/NetworkProvider"));
const Wallet_1 = __importDefault(require("../ethereum/Wallet"));
class Contract extends eventcontainer_1.default {
    constructor(address, abi, eventNames) {
        super();
        this.address = address;
        this.abi = abi;
        this.contract = new ethers_1.ethers.Contract(address, abi, NetworkProvider_1.default.provider).connect(NetworkProvider_1.default.signer);
        for (const eventName of eventNames) {
            this.contract.on(eventName, (...args) => {
                this.fireEvent(eventName, ...args);
            });
        }
        Wallet_1.default.on("chainChanged", () => this.walletContract = undefined);
    }
    async loadWalletContract() {
        if (await Wallet_1.default.loadChainId() !== Config_1.default.chainId) {
            alert("Wrong Network");
        }
        else {
            if (await Wallet_1.default.connected() !== true) {
                await Wallet_1.default.connect();
            }
            if (this.walletContract === undefined && Wallet_1.default.signer !== undefined) {
                this.walletContract = new ethers_1.ethers.Contract(this.address, this.abi, Wallet_1.default.provider).connect(Wallet_1.default.signer);
            }
            return this.walletContract;
        }
    }
    static convertMessageToHash(message) {
        return ethers_1.ethers.utils.keccak256(ethers_1.ethers.utils.toUtf8Bytes(message));
    }
    getDomainSeparator(name) {
        return ethers_1.ethers.utils.keccak256(ethers_1.ethers.utils.defaultAbiCoder.encode(["bytes32", "bytes32", "bytes32", "uint256", "address"], [
            ethers_1.ethers.utils.keccak256(ethers_1.ethers.utils.toUtf8Bytes("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)")),
            ethers_1.ethers.utils.keccak256(ethers_1.ethers.utils.toUtf8Bytes(name)),
            ethers_1.ethers.utils.keccak256(ethers_1.ethers.utils.toUtf8Bytes("1")),
            Config_1.default.chainId,
            this.address,
        ]));
    }
    getApprovalDigest(name, types, values) {
        return ethers_1.ethers.utils.keccak256(ethers_1.ethers.utils.solidityPack(["bytes1", "bytes1", "bytes32", "bytes32"], [
            "0x19",
            "0x01",
            this.getDomainSeparator(name),
            ethers_1.ethers.utils.keccak256(ethers_1.ethers.utils.defaultAbiCoder.encode(types, values)),
        ]));
    }
}
exports.default = Contract;
//# sourceMappingURL=Contract.js.map