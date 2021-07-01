import { DomNode, el } from "@hanul/skynode";
import { View } from "skyrouter";
import { ViewParams } from "skyrouter/lib/View";
import SkyUtil from "skyutil";
import NurseRaid from "../component/NurseRaid";
import NurseRaidContract from "../contracts/NurseRaidContract";
import Layout from "./Layout";

export default class Nurse implements View {

    private container: DomNode;
    private raidList: DomNode;
    private nurseList: DomNode;

    constructor() {
        Layout.current.content.append(this.container = el("#nurse",
            "Nurse!",
            this.raidList = el(".raid-list"),
            this.nurseList = el(".nurse-list"),
        ));
        this.loadRaids();
        this.loadNurses();
    }

    private async loadRaids() {
        const raidCount = await NurseRaidContract.getRaidCount();
        this.raidList.appendText(`Total Raids: ${raidCount}`);

        SkyUtil.repeat(raidCount.toNumber(), async (raidId) => {
            const nurseRaid = new NurseRaid(raidId).appendTo(this.raidList);
            nurseRaid.raid = await NurseRaidContract.getRaid(raidId);
        });
    }

    private async loadNurses() {
        //const nurseCount = await CloneNuresContract.getNurseCount();
        //this.raidList.appendText(`Total Nurses: ${nurseCount}`);

        //SkyUtil.repeat(nurseCount.toNumber(), async (nurseId) => {
        //});
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
