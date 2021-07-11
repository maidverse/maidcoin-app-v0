import { DomNode, el } from "@hanul/skynode";
import { View } from "skyrouter";
import { ViewParams } from "skyrouter/lib/View";
import SkyUtil from "skyutil";
import NurseFactory from "../component/nurse/NurseFactory";
import NurseRaid from "../component/nurse/NurseRaid";
import CloneNurseContract from "../contracts/CloneNurseContract";
import NurseRaidContract from "../contracts/NurseRaidContract";
import NetworkProvider from "../ethereum/NetworkProvider";
import Layout from "./Layout";

export default class Nurse implements View {

    private container: DomNode;
    private raidList: DomNode;
    private nurseFactoryList: DomNode;

    constructor() {
        Layout.current.content.append(this.container = el("#nurse",
            el("h2", "Nurse"),
            el("p", "Defeat Nurses and get Nurse Parts.\nYou can make Clone Nurses with Nurse Parts."),
            this.raidList = el(".raid-list"),
            this.nurseFactoryList = el(".nurse-factory-list"),
        ));
        this.loadRaids();
        this.loadNurseParts();
    }

    private async loadRaids() {
        const raidCount = await NurseRaidContract.getRaidCount();
        this.raidList.appendText(`Current Block: ${String(await NetworkProvider.getBlockNumber())}`);
        this.raidList.appendText(`Total Raids: ${raidCount}`);

        SkyUtil.repeat(raidCount.toNumber(), async (raidId) => {
            new NurseRaid(raidId).appendTo(this.raidList);
        });
    }

    private async loadNurseParts() {
        const nurseTypeCount = await CloneNurseContract.getNurseTypeCount();
        this.nurseFactoryList.appendText(`Total Nurse Types: ${nurseTypeCount}`);

        SkyUtil.repeat(nurseTypeCount.toNumber(), async (nurseType) => {
            new NurseFactory(nurseType).appendTo(this.nurseFactoryList);
        });
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
