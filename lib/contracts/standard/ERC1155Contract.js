"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
}
exports.default = ERC1155Contract;
//# sourceMappingURL=ERC1155Contract.js.map