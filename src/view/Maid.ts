import { DomNode, el } from "@hanul/skynode";
import { View } from "skyrouter";
import { ViewParams } from "skyrouter/lib/View";
import SkyUtil from "skyutil";
import MaidSummary from "../component/maid/MaidSummary";
import MaidContract from "../contracts/MaidContract";
import Layout from "./Layout";

export default class Maid implements View {

    private container: DomNode;
    private maidList: DomNode;

    constructor() {
        Layout.current.content.append(this.container = el("#maid",
            "Maid!",
            this.maidList = el(".maid-list"),
        ));
        this.loadMaids();
    }

    private async loadMaids() {
        const maidCount = await MaidContract.getTotalSupply();
        this.maidList.appendText(`Total Maids: ${maidCount}`);

        SkyUtil.repeat(maidCount.toNumber(), async (maidId) => {
            const maidSummary = new MaidSummary(maidId).appendTo(this.maidList);
            maidSummary.maid = await MaidContract.getMaid(maidId);
        });
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
