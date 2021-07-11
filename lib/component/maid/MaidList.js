"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const skyutil_1 = __importDefault(require("skyutil"));
const MaidContract_1 = __importDefault(require("../../contracts/MaidContract"));
const MaidSummary_1 = __importDefault(require("./MaidSummary"));
class MaidList extends skynode_1.DomNode {
    constructor() {
        super(".maid-list");
        this.append(this.loading = skynode_1.el(".loading", "Loading..."), this.totalCount = skynode_1.el(".total-count"), this.maidContainer = skynode_1.el(".maid-container"));
        this.loadMaids();
    }
    async loadMaids() {
        const maidCount = await MaidContract_1.default.getTotalSupply();
        this.totalCount.appendText(`Total Maids: ${maidCount}`);
        skyutil_1.default.repeat(maidCount.toNumber(), async (maidId) => {
            new MaidSummary_1.default(maidId).appendTo(this.maidContainer);
        });
        this.loading.delete();
    }
}
exports.default = MaidList;
//# sourceMappingURL=MaidList.js.map