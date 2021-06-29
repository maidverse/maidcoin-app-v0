"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Contract_1 = __importDefault(require("../Contract"));
class ERC721Contract extends Contract_1.default {
    constructor(address, abi, eventNames) {
        super(address, abi, eventNames.concat([
            "Transfer",
            "Approval",
            "ApprovalForAll",
        ]));
    }
    async getName() {
        return await this.contract.name();
    }
    async getNonce(id) {
        return await this.contract.nonces(id);
    }
    async getNonceForAll(owner) {
        return await this.contract.nonces(owner);
    }
    async getTotalSupply() {
        return await this.contract.totalSupply();
    }
    async loadApprovalDigest(spender, id) {
        return this.getApprovalDigest(await this.getName(), ["bytes32", "address", "uint256", "uint256", "uint256"], [ERC721Contract.PERMIT_TYPEHASH, spender, ethers_1.BigNumber.from(id), await this.getNonce(id), ethers_1.constants.MaxUint256]);
    }
    async loadApprovalAllDigest(owner, spender) {
        return this.getApprovalDigest(await this.getName(), ["bytes32", "address", "address", "uint256", "uint256"], [ERC721Contract.PERMIT_ALL_TYPEHASH, owner, spender, await this.getNonceForAll(owner), ethers_1.constants.MaxUint256]);
    }
}
exports.default = ERC721Contract;
ERC721Contract.PERMIT_TYPEHASH = Contract_1.default.convertMessageToHash("Permit(address spender,uint256 tokenId,uint256 nonce,uint256 deadline)");
ERC721Contract.PERMIT_ALL_TYPEHASH = Contract_1.default.convertMessageToHash("Permit(address owner,address spender,uint256 nonce,uint256 deadline)");
//# sourceMappingURL=ERC721Contract.js.map