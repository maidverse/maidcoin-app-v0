"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const skyutil_1 = __importDefault(require("skyutil"));
const NurseRaid_1 = __importDefault(require("../component/NurseRaid"));
const NurseRaidContract_1 = __importDefault(require("../contracts/NurseRaidContract"));
const Layout_1 = __importDefault(require("./Layout"));
class Nurse {
    constructor() {
        Layout_1.default.current.content.append(this.container = skynode_1.el("#nurse", "Nurse!", this.raidList = skynode_1.el(".raid-list")));
        this.loadNurses();
    }
    async loadNurses() {
        const raidCount = await NurseRaidContract_1.default.getRaidCount();
        this.raidList.appendText(`Total Raids: ${raidCount}`);
        skyutil_1.default.repeat(raidCount.toNumber(), async (raidId) => {
            const nurseRaid = new NurseRaid_1.default(raidId).appendTo(this.raidList);
            nurseRaid.raid = await NurseRaidContract_1.default.getRaid(raidId);
        });
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Nurse;
//# sourceMappingURL=Nurse.js.map