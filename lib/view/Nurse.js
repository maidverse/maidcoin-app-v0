"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const skyutil_1 = __importDefault(require("skyutil"));
const NurseFactory_1 = __importDefault(require("../component/nurse/NurseFactory"));
const NurseRaid_1 = __importDefault(require("../component/nurse/NurseRaid"));
const CloneNurseContract_1 = __importDefault(require("../contracts/CloneNurseContract"));
const NurseRaidContract_1 = __importDefault(require("../contracts/NurseRaidContract"));
const NetworkProvider_1 = __importDefault(require("../ethereum/NetworkProvider"));
const Layout_1 = __importDefault(require("./Layout"));
class Nurse {
    constructor() {
        Layout_1.default.current.content.append(this.container = skynode_1.el("#nurse", skynode_1.el("h2", "Nurse"), skynode_1.el("p", "Defeat Nurses and get Nurse Parts.\nYou can make Clone Nurses with Nurse Parts."), this.raidList = skynode_1.el(".raid-list"), this.nurseFactoryList = skynode_1.el(".nurse-factory-list")));
        this.loadRaids();
        this.loadNurseParts();
    }
    async loadRaids() {
        const raidCount = await NurseRaidContract_1.default.getRaidCount();
        this.raidList.appendText(`Current Block: ${String(await NetworkProvider_1.default.getBlockNumber())}`);
        this.raidList.appendText(`Total Raids: ${raidCount}`);
        skyutil_1.default.repeat(raidCount.toNumber(), async (raidId) => {
            new NurseRaid_1.default(raidId).appendTo(this.raidList);
        });
    }
    async loadNurseParts() {
        const nurseTypeCount = await CloneNurseContract_1.default.getNurseTypeCount();
        this.nurseFactoryList.appendText(`Total Nurse Types: ${nurseTypeCount}`);
        skyutil_1.default.repeat(nurseTypeCount.toNumber(), async (nurseType) => {
            new NurseFactory_1.default(nurseType).appendTo(this.nurseFactoryList);
        });
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Nurse;
//# sourceMappingURL=Nurse.js.map