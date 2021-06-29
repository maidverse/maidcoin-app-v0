import { DomNode } from "@hanul/skynode";
import { MaidInfo } from "../../contracts/MaidContract";
export default class MaidSummary extends DomNode {
    private maidId;
    constructor(maidId: number);
    set maid(maid: MaidInfo);
}
//# sourceMappingURL=MaidSummary.d.ts.map