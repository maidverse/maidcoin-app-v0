"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const skyutil_1 = __importDefault(require("skyutil"));
const CloneNurse_1 = __importDefault(require("../component/nurse/CloneNurse"));
const CloneNurseContract_1 = __importDefault(require("../contracts/CloneNurseContract"));
const TheMasterContract_1 = __importDefault(require("../contracts/TheMasterContract"));
const Layout_1 = __importDefault(require("./Layout"));
class Earn {
    constructor() {
        Layout_1.default.current.content.append(this.container = skynode_1.el("#earn", skynode_1.el("h2", "Earn"), skynode_1.el("p", "Earn MaidCoin!"), this.poolList = skynode_1.el(".pool-list"), this.nurseList = skynode_1.el(".nurse-list")));
        this.loadPools();
    }
    async loadPools() {
        const poolCount = await TheMasterContract_1.default.getPoolCount();
        this.poolList.appendText(`Total Pools: ${poolCount}`);
        skyutil_1.default.repeat(poolCount.toNumber(), async (poolId) => {
            console.log(poolId, await TheMasterContract_1.default.getPool(poolId));
        });
        const nurseCount = await CloneNurseContract_1.default.getTotalSupply();
        this.nurseList.appendText(`Total Nurses: ${nurseCount}`);
        skyutil_1.default.repeat(nurseCount.toNumber(), async (nurseId) => {
            new CloneNurse_1.default(nurseId).appendTo(this.nurseList);
        });
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Earn;
//# sourceMappingURL=Earn.js.map