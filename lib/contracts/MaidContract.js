"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../Config"));
const Maid_json_1 = __importDefault(require("./artifacts/contracts/Maid.sol/Maid.json"));
const ERC721Contract_1 = __importDefault(require("./standard/ERC721Contract"));
class MaidContract extends ERC721Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.Maid, Maid_json_1.default.abi, []);
    }
}
exports.default = new MaidContract();
//# sourceMappingURL=MaidContract.js.map