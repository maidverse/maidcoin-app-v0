import { DomNode, el } from "@hanul/skynode";
import { View } from "skyrouter";
import { ViewParams } from "skyrouter/lib/View";
import SkyUtil from "skyutil";
import CloneNurse from "../component/nurse/CloneNurse";
import CloneNurseContract from "../contracts/CloneNurseContract";
import TheMasterContract from "../contracts/TheMasterContract";
import Layout from "./Layout";

export default class Earn implements View {

    private container: DomNode;
    private poolList: DomNode;
    private nurseList: DomNode;

    constructor() {
        Layout.current.content.append(this.container = el("#earn",
            "Earn!",
            this.poolList = el(".pool-list"),
            this.nurseList = el(".nurse-list"),
        ));

        // farm
        // nurse support

        this.loadPools();
    }

    private async loadPools() {
        const poolCount = await TheMasterContract.getPoolCount();
        this.poolList.appendText(`Total Pools: ${poolCount}`);

        SkyUtil.repeat(poolCount.toNumber(), async (poolId) => {
            console.log(await TheMasterContract.getPool(poolId));
        });

        const nurseCount = await CloneNurseContract.getTotalSupply();
        this.nurseList.appendText(`Total Nurses: ${nurseCount}`);

        SkyUtil.repeat(nurseCount.toNumber(), async (nurseId) => {
            new CloneNurse(nurseId).appendTo(this.nurseList);
        });
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
