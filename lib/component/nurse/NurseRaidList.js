"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const skyutil_1 = __importDefault(require("skyutil"));
const NurseRaidContract_1 = __importDefault(require("../../contracts/NurseRaidContract"));
const NetworkProvider_1 = __importDefault(require("../../ethereum/NetworkProvider"));
const NurseRaid_1 = __importDefault(require("./NurseRaid"));
class NurseRaidList extends skynode_1.DomNode {
    constructor() {
        super(".nurse-raid-list");
        this.append(this.loading = skynode_1.el(".loading", "Loading..."), this.currentBlock = skynode_1.el(".current-block"), this.totalCount = skynode_1.el(".total-count"), this.raidContainer = skynode_1.el(".raid-container"));
        this.loadRaids();
    }
    async loadRaids() {
        const raidCount = await NurseRaidContract_1.default.getRaidCount();
        this.currentBlock.appendText(`Current Block: ${String(await NetworkProvider_1.default.getBlockNumber())}`);
        this.totalCount.appendText(`Total Raids: ${raidCount}`);
        skyutil_1.default.repeat(raidCount.toNumber(), async (raidId) => {
            new NurseRaid_1.default(raidId).appendTo(this.raidContainer);
        });
        this.loading.delete();
    }
}
exports.default = NurseRaidList;
//# sourceMappingURL=NurseRaidList.js.map