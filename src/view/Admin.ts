import { DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import { View } from "skyrouter";
import { ViewParams } from "skyrouter/lib/View";
import CloneNurseContract from "../contracts/CloneNurseContract";
import MaidContract from "../contracts/MaidContract";
import NurseRaidContract from "../contracts/NurseRaidContract";
import NetworkProvider from "../ethereum/NetworkProvider";
import Layout from "./Layout";

export default class Admin implements View {

    private container: DomNode;
    private currentBlock: DomNode;

    constructor() {

        let entranceFeeInput: DomNode<HTMLInputElement>;
        let nursePartInput: DomNode<HTMLInputElement>;
        let maxRewardCountInput: DomNode<HTMLInputElement>;
        let durationInput: DomNode<HTMLInputElement>;
        let endBlockInput: DomNode<HTMLInputElement>;

        let partCountInput: DomNode<HTMLInputElement>;
        let destroyReturnInput: DomNode<HTMLInputElement>;
        let powerInput: DomNode<HTMLInputElement>;

        Layout.current.content.append(this.container = el("#admin",
            el("h2", "Admin Console"),
            el(".control",
                el("a.mint-maid-button", "Mint Maid", {
                    click: async () => {
                        const power = prompt("Please enter the maid's power", "50");
                        if (power) {
                            await MaidContract.mint(power);
                        }
                    },
                }),
                el(".create-nurse-form",
                    this.currentBlock = el("", "Current Block "),
                    entranceFeeInput = el("input", { placeholder: "Entrance Fee" }),
                    nursePartInput = el("input", { placeholder: "Nurse Part" }),
                    maxRewardCountInput = el("input", { placeholder: "Max Reward Count" }),
                    durationInput = el("input", { placeholder: "Duration" }),
                    endBlockInput = el("input", { placeholder: "End Block" }),
                    el("a.create-nurse-raid-button", "Create Nurse Raid", {
                        click: async () => {
                            await NurseRaidContract.create(
                                utils.parseEther(entranceFeeInput.domElement.value),
                                parseInt(nursePartInput.domElement.value, 10),
                                parseInt(maxRewardCountInput.domElement.value, 10),
                                parseInt(durationInput.domElement.value, 10),
                                parseInt(endBlockInput.domElement.value, 10),
                            );
                        },
                    }),
                ),
                el(".create-nurse-type-form",
                    partCountInput = el("input", { placeholder: "Part Count" }),
                    destroyReturnInput = el("input", { placeholder: "Destroy Return" }),
                    powerInput = el("input", { placeholder: "Power" }),
                    el("a.create-nurse-type-button", "Create Nurse Type", {
                        click: async () => {
                            await CloneNurseContract.addNurseType(
                                parseInt(partCountInput.domElement.value, 10),
                                utils.parseEther(destroyReturnInput.domElement.value),
                                parseInt(powerInput.domElement.value, 10),
                            );
                        },
                    }),
                ),
            ),
        ));
        this.load();
    }

    private async load() {
        this.currentBlock.appendText(String(await NetworkProvider.getBlockNumber()));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
