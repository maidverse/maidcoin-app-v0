"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const CloneNurseContract_1 = __importDefault(require("../contracts/CloneNurseContract"));
const TheMasterContract_1 = __importDefault(require("../contracts/TheMasterContract"));
class CloneNurse extends skynode_1.DomNode {
    constructor(nurseId) {
        super(".clone-nurse");
        this.nurseId = nurseId;
        this.append(skynode_1.el("", "Loading..."));
        this.load();
    }
    async load() {
        const nurse = await CloneNurseContract_1.default.getNurse(this.nurseId);
        this.empty().append(skynode_1.el("", `Clone Nurse #${this.nurseId}`), skynode_1.el("", `Type: ${nurse.nurseType}`), skynode_1.el("", `Supported Power: ${ethers_1.utils.formatEther(await CloneNurseContract_1.default.getSupportedPower(this.nurseId))}`), skynode_1.el("a.support-button", "Support", {
            click: async () => {
                const amount = prompt("How much amount to support?", "10");
                if (amount) {
                    await TheMasterContract_1.default.support(2, ethers_1.utils.parseEther(amount), this.nurseId);
                }
            },
        }));
    }
}
exports.default = CloneNurse;
//# sourceMappingURL=CloneNurse.js.map