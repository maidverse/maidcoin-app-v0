"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../Config"));
const CloneNurse_json_1 = __importDefault(require("./artifacts/contracts/CloneNurse.sol/CloneNurse.json"));
const ERC721Contract_1 = __importDefault(require("./standard/ERC721Contract"));
class CloneNurseContract extends ERC721Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.CloneNurse, CloneNurse_json_1.default.abi, []);
    }
}
exports.default = new CloneNurseContract();
//# sourceMappingURL=CloneNurseContract.js.map