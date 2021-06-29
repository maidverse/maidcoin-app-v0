"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Contract_1 = __importDefault(require("../Contract"));
class ERC1155Contract extends Contract_1.default {
    constructor(address, abi, eventNames) {
        super(address, abi, eventNames.concat([
            "TransferSingle",
            "TransferBatch",
            "ApprovalForAll",
            "URI",
        ]));
    }
    async getName() {
        return await this.contract.name();
    }
    async getNonce(owner) {
        return await this.contract.nonces(owner);
    }
    async loadApprovalDigest(owner, spender) {
        return this.getApprovalDigest(await this.getName(), ["bytes32", "address", "address", "uint256", "uint256"], [ERC1155Contract.PERMIT_TYPEHASH, owner, spender, await this.getNonce(owner), ethers_1.constants.MaxUint256]);
    }
}
exports.default = ERC1155Contract;
ERC1155Contract.PERMIT_TYPEHASH = Contract_1.default.convertMessageToHash("Permit(address owner,address spender,uint256 nonce,uint256 deadline)");
//# sourceMappingURL=ERC1155Contract.js.map