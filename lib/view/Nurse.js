"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const NurseFactoryList_1 = __importDefault(require("../component/nurse/NurseFactoryList"));
const NurseRaidList_1 = __importDefault(require("../component/nurse/NurseRaidList"));
const Layout_1 = __importDefault(require("./Layout"));
class Nurse {
    constructor() {
        Layout_1.default.current.content.append(this.container = skynode_1.el("#nurse", skynode_1.el("h2", "Nurse Raid"), skynode_1.el("p", "Defeat Nurses and get Nurse Parts."), new NurseRaidList_1.default(), skynode_1.el("h2", "Nurse Factory"), skynode_1.el("p", "You can make Clone Nurses with Nurse Parts."), new NurseFactoryList_1.default()));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Nurse;
//# sourceMappingURL=Nurse.js.map