import { DomNode, el } from "@hanul/skynode";
import { View } from "skyrouter";
import { ViewParams } from "skyrouter/lib/View";
import SkyUtil from "skyutil";
import TheMasterContract from "../contracts/TheMasterContract";
import Layout from "./Layout";

export default class Earn implements View {

    private container: DomNode;
    private poolList: DomNode;

    constructor() {
        Layout.current.content.append(this.container = el("#earn",
            "Earn!",
            this.poolList = el(".pool-list"),
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
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
