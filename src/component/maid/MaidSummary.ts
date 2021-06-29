import { DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import MaidContract, { MaidInfo } from "../../contracts/MaidContract";

export default class MaidSummary extends DomNode {

    constructor(private maidId: number) {
        super(".maid-summary");
        this.append(el("", "Loading..."));
    }

    public set maid(maid: MaidInfo) {
        this.empty().append(
            el("", `Maid #${this.maidId}`),
            el("", `Origin Power: ${maid.originPower}`),
            el("", `Supported LP Token Amount: ${maid.supportedLPTokenAmount}`),
            el("a.support-button", "Support", {
                click: async () => {
                    const amount = prompt("How much amount to support?", "10");
                    if (amount) {
                        await MaidContract.support(this.maidId, utils.parseEther(amount));
                    }
                },
            }),
        );
    }
}
