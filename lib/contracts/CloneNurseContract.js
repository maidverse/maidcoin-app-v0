"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../Config"));
const Contract_1 = __importDefault(require("./Contract"));
class CloneNurseContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.CloneNurse, require("./abi/CloneNurseABI.json"));
        this.test();
    }
    async test() {
        console.log(await this.contract.ratio());
    }
}
exports.default = new CloneNurseContract();
//# sourceMappingURL=CloneNurseContract.js.map