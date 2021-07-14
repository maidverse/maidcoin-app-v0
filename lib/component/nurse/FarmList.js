"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const skyutil_1 = __importDefault(require("skyutil"));
const CloneNurseContract_1 = __importDefault(require("../../contracts/CloneNurseContract"));
const CloneNurse_1 = __importDefault(require("./CloneNurse"));
class FarmList extends skynode_1.DomNode {
    constructor() {
        super(".farm-list");
        this.append(this.loading = skynode_1.el(".loading", "Loading..."), this.totalCount = skynode_1.el(".total-count"), this.cloneNurseContainer = skynode_1.el(".clone-nurse-container"));
        this.loadCloneNurses();
    }
    async loadCloneNurses() {
        const nurseCount = await CloneNurseContract_1.default.getTotalSupply();
        this.totalCount.appendText(`Total: ${nurseCount.toNumber() + 1}`);
        this.cloneNurseContainer.append(skynode_1.el(".maid-corporation", "Maid Corporation"));
        skyutil_1.default.repeat(nurseCount.toNumber(), async (nurseId) => {
            new CloneNurse_1.default(nurseId).appendTo(this.cloneNurseContainer);
        });
        this.loading.delete();
    }
}
exports.default = FarmList;
//# sourceMappingURL=FarmList.js.map