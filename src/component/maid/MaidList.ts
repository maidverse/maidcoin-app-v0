import { DomNode, el } from "@hanul/skynode";
import SkyUtil from "skyutil";
import MaidContract from "../../contracts/MaidContract";
import MaidSummary from "./MaidSummary";

export default class MaidList extends DomNode {

    private loading: DomNode;
    private totalCount: DomNode;
    private maidContainer: DomNode;

    constructor() {
        super(".maid-list");
        this.append(
            this.loading = el(".loading", "Loading..."),
            this.totalCount = el(".total-count"),
            this.maidContainer = el(".maid-container"),
        );
        this.loadMaids();
    }

    private async loadMaids() {

        const maidCount = await MaidContract.getTotalSupply();
        this.totalCount.appendText(`Total Maids: ${maidCount}`);

        SkyUtil.repeat(maidCount.toNumber(), async (maidId) => {
            new MaidSummary(maidId).appendTo(this.maidContainer);
        });

        this.loading.delete();
    }
}
