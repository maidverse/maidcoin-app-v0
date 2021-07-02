"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const skyutil_1 = __importDefault(require("skyutil"));
const MaidSummary_1 = __importDefault(require("../component/MaidSummary"));
const MaidContract_1 = __importDefault(require("../contracts/MaidContract"));
const Layout_1 = __importDefault(require("./Layout"));
class Maid {
    constructor() {
        Layout_1.default.current.content.append(this.container = skynode_1.el("#maid", "Maid!", this.maidList = skynode_1.el(".maid-list")));
        this.loadMaids();
    }
    async loadMaids() {
        const maidCount = await MaidContract_1.default.getTotalSupply();
        this.maidList.appendText(`Total Maids: ${maidCount}`);
        skyutil_1.default.repeat(maidCount.toNumber(), async (maidId) => {
            new MaidSummary_1.default(maidId).appendTo(this.maidList);
        });
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Maid;
//# sourceMappingURL=Maid.js.map