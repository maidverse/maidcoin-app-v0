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
    async getPoolCount() {
        return await this.contract.poolCount();
    }
    async getPool(poolId) {
        const [addr, delegate, supportable, supportingRatio, allocPoint, lastRewardBlock, accRewardPerShare, supply,] = await this.contract.poolInfo(poolId);
        return {
            addr,
            delegate,
            supportable,
            supportingRatio,
            allocPoint: allocPoint.toNumber(),
            lastRewardBlock: lastRewardBlock.toNumber(),
            accRewardPerShare,
            supply,
        };
    }
}
exports.default = new TheMasterContract();
//# sourceMappingURL=TheMasterContract.js.map