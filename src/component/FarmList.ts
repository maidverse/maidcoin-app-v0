import { DomNode, el } from "@hanul/skynode";
import SkyUtil from "skyutil";
import CloneNurseContract from "../contracts/CloneNurseContract";
import MaidCorp from "./MaidCorp";
import CloneNurse from "./nurse/CloneNurse";

export default class FarmList extends DomNode {

    private loading: DomNode;
    private totalCount: DomNode;
    private farmContainer: DomNode;

    constructor() {
        super(".farm-list");
        this.append(
            this.loading = el(".loading", "Loading..."),
            this.totalCount = el(".total-count"),
            this.farmContainer = el(".farm-container"),
        );
        this.loadCloneNurses();
    }

    private async loadCloneNurses() {

        const nurseCount = await CloneNurseContract.getTotalSupply();
        this.totalCount.appendText(`Total: ${nurseCount.toNumber() + 1}`);

        this.farmContainer.append(new MaidCorp());

        SkyUtil.repeat(nurseCount.toNumber(), async (nurseId) => {
            new CloneNurse(nurseId).appendTo(this.farmContainer);
        });

        this.loading.delete();
    }
}
