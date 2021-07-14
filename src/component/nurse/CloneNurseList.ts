import { DomNode, el } from "@hanul/skynode";
import SkyUtil from "skyutil";
import CloneNurseContract from "../../contracts/CloneNurseContract";
import CloneNurse from "./CloneNurse";

export default class CloneNurseList extends DomNode {

    private loading: DomNode;
    private totalCount: DomNode;
    private cloneNurseContainer: DomNode;

    constructor() {
        super(".clone-nurse-list");
        this.append(
            this.loading = el(".loading", "Loading..."),
            this.totalCount = el(".total-count"),
            this.cloneNurseContainer = el(".clone-nurse-container"),
        );
        this.loadCloneNurses();
    }

    private async loadCloneNurses() {

        const nurseCount = await CloneNurseContract.getTotalSupply();
        this.totalCount.appendText(`Total Nurses: ${nurseCount}`);

        SkyUtil.repeat(nurseCount.toNumber(), async (nurseId) => {
            new CloneNurse(nurseId).appendTo(this.cloneNurseContainer);
        });

        this.loading.delete();
    }
}
