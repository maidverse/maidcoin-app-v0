"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../Config"));
const TheMaster_json_1 = __importDefault(require("./artifacts/contracts/TheMaster.sol/TheMaster.json"));
const Contract_1 = __importDefault(require("./Contract"));
class TheMasterContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.TheMaster, TheMaster_json_1.default.abi, []);
    }
}
exports.default = new TheMasterContract();
//# sourceMappingURL=TheMasterContract.js.map