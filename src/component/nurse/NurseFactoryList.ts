import { DomNode, el } from "@hanul/skynode";
import SkyUtil from "skyutil";
import CloneNurseContract from "../../contracts/CloneNurseContract";
import NurseFactory from "./NurseFactory";

export default class NurseFactoryList extends DomNode {

    private loading: DomNode;
    private totalCount: DomNode;
    private factoryContainer: DomNode;

    constructor() {
        super(".nurse-factory-list");
        this.append(
            this.loading = el(".loading", "Loading..."),
            this.totalCount = el(".total-count"),
            this.factoryContainer = el(".factory-container"),
        );
        this.loadFactories();
    }

    private async loadFactories() {

        const nurseTypeCount = await CloneNurseContract.getNurseTypeCount();
        this.totalCount.appendText(`Total Nurse Factories: ${nurseTypeCount}`);

        SkyUtil.repeat(nurseTypeCount.toNumber(), async (nurseType) => {
            new NurseFactory(nurseType).appendTo(this.factoryContainer);
        });

        this.loading.delete();
    }
}
