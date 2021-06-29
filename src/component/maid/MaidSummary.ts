import { DomNode, el } from "@hanul/skynode";
import { MaidInfo } from "../../contracts/MaidContract";

export default class MaidSummary extends DomNode {

    constructor() {
        super(".maid-summary");
        this.append(el("", "Loading..."));
    }

    public set maid(maid: MaidInfo) {
        this.empty().append(
            el("", `Origin Power: ${maid.originPower}`),
            el("", `Supported LP Token Amount: ${maid.supportedLPTokenAmount}`),
        );
    }
}
