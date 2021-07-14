import { DomNode, el } from "@hanul/skynode";
import SkyUtil from "skyutil";
import NurseRaidContract from "../../contracts/NurseRaidContract";
import NetworkProvider from "../../ethereum/NetworkProvider";
import NurseRaid from "./NurseRaid";

export default class NurseRaidList extends DomNode {

    private loading: DomNode;
    private currentBlock: DomNode;
    private totalCount: DomNode;
    private raidContainer: DomNode;

    constructor() {
        super(".nurse-raid-list");
        this.append(
            this.loading = el(".loading", "Loading..."),
            this.currentBlock = el(".current-block"),
            this.totalCount = el(".total-count"),
            this.raidContainer = el(".raid-container"),
        );
        this.loadRaids();
    }

    private async loadRaids() {

        const raidCount = await NurseRaidContract.getRaidCount();
        this.currentBlock.appendText(`Current Block: ${String(await NetworkProvider.getBlockNumber())}`);
        this.totalCount.appendText(`Total Raids: ${raidCount}`);

        SkyUtil.repeat(raidCount.toNumber(), async (raidId) => {
            new NurseRaid(raidId).appendTo(this.raidContainer);
        });

        this.loading.delete();
    }
}
