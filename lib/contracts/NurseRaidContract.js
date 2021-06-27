"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../Config"));
const NurseRaid_json_1 = __importDefault(require("./artifacts/contracts/NurseRaid.sol/NurseRaid.json"));
const Contract_1 = __importDefault(require("./Contract"));
class NurseRaidContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.NurseRaid, NurseRaid_json_1.default.abi, []);
    }
}
exports.default = new NurseRaidContract();
//# sourceMappingURL=NurseRaidContract.js.map