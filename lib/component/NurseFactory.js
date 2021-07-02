"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const CloneNurseContract_1 = __importDefault(require("../contracts/CloneNurseContract"));
const NursePartContract_1 = __importDefault(require("../contracts/NursePartContract"));
const Wallet_1 = __importDefault(require("../ethereum/Wallet"));
class NurseFactory extends skynode_1.DomNode {
    constructor(nurseType) {
        super(".nurse-factory");
        this.nurseType = nurseType;
        this.append(skynode_1.el("", "Loading..."));
        this.load();
    }
    async load() {
        const owner = await Wallet_1.default.loadAddress();
        if (owner !== undefined) {
            const nurseType = await CloneNurseContract_1.default.getNurseType(this.nurseType);
            const balance = await NursePartContract_1.default.balanceOf(owner, this.nurseType);
            this.empty().append(skynode_1.el("", `Nurse Part #${this.nurseType}`), skynode_1.el("", `Balance: ${balance}`), skynode_1.el("", `Need Part Count: ${nurseType.partCount}`), skynode_1.el("a.assemble-button", "Assemble Nurse", {
                click: async () => {
                    await CloneNurseContract_1.default.assemble(this.nurseType);
                },
            }));
        }
    }
}
exports.default = NurseFactory;
//# sourceMappingURL=NurseFactory.js.map