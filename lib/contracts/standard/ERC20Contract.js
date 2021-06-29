"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Contract_1 = __importDefault(require("../Contract"));
class ERC20Contract extends Contract_1.default {
    constructor(address, abi, eventNames) {
        super(address, abi, eventNames.concat([
            "Transfer",
            "Approval",
        ]));
    }
    async getName() {
        return await this.contract.name();
    }
    async getNonce(owner) {
        return await this.contract.nonces(owner);
    }
    async getTotalSupply() {
        return await this.contract.totalSupply();
    }
    async balanceOf(owner) {
        return await this.contract.balanceOf(owner);
    }
    async transfer(to, amount) {
        const contract = await this.loadWalletContract();
        await (contract === null || contract === void 0 ? void 0 : contract.transfer(to, amount));
    }
    async transferFrom(from, to, amount) {
        const contract = await this.loadWalletContract();
        await (contract === null || contract === void 0 ? void 0 : contract.transferFrom(from, to, amount));
    }
    async approve(spender, amount) {
        const contract = await this.loadWalletContract();
        await (contract === null || contract === void 0 ? void 0 : contract.approve(spender, amount));
    }
    async allowance(owner, spender) {
        const contract = await this.loadWalletContract();
        return await (contract === null || contract === void 0 ? void 0 : contract.allowance(owner, spender));
    }
    async loadApprovalDigest(owner, spender, value) {
        return this.getApprovalDigest(await this.getName(), ["bytes32", "address", "address", "uint256", "uint256", "uint256"], [ERC20Contract.PERMIT_TYPEHASH, owner, spender, ethers_1.BigNumber.from(value), await this.getNonce(owner), ethers_1.constants.MaxUint256]);
    }
}
exports.default = ERC20Contract;
ERC20Contract.PERMIT_TYPEHASH = Contract_1.default.convertMessageToHash("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)");
//# sourceMappingURL=ERC20Contract.js.map