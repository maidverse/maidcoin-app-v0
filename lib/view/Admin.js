"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const MaidContract_1 = __importDefault(require("../contracts/MaidContract"));
const NurseRaidContract_1 = __importDefault(require("../contracts/NurseRaidContract"));
const NetworkProvider_1 = __importDefault(require("../ethereum/NetworkProvider"));
const Layout_1 = __importDefault(require("./Layout"));
class Admin {
    constructor() {
        let entranceFeeInput;
        let nursePartInput;
        let maxRewardCountInput;
        let durationInput;
        let endBlockInput;
        Layout_1.default.current.content.append(this.container = skynode_1.el("#admin", skynode_1.el("h2", "Admin Console"), skynode_1.el(".control", skynode_1.el("a.mint-maid-button", "Mint Maid", {
            click: async () => {
                const power = prompt("Please enter the maid's power", "50");
                if (power) {
                    await MaidContract_1.default.mint(power);
                }
            },
        }), skynode_1.el(".create-nurse-form", this.currentBlock = skynode_1.el("", "Current Block"), entranceFeeInput = skynode_1.el("input", { placeholder: "Entrance Fee" }), nursePartInput = skynode_1.el("input", { placeholder: "Nurse Part" }), maxRewardCountInput = skynode_1.el("input", { placeholder: "Max Reward Count" }), durationInput = skynode_1.el("input", { placeholder: "Duration" }), endBlockInput = skynode_1.el("input", { placeholder: "End Block" }), skynode_1.el("a.create-nurse-raid-button", "Create Nurse Raid", {
            click: async () => {
                await NurseRaidContract_1.default.create(ethers_1.utils.parseEther(entranceFeeInput.domElement.value), parseInt(nursePartInput.domElement.value, 10), parseInt(maxRewardCountInput.domElement.value, 10), parseInt(durationInput.domElement.value, 10), parseInt(endBlockInput.domElement.value, 10));
            },
        })))));
        this.load();
    }
    async load() {
        this.currentBlock.appendText(String(await NetworkProvider_1.default.getBlockNumber()));
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Admin;
//# sourceMappingURL=Admin.js.map