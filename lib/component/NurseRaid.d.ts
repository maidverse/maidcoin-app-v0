import { DomNode } from "@hanul/skynode";
import { RaidInfo } from "../contracts/NurseRaidContract";
export default class NurseRaid extends DomNode {
    private raidId;
    constructor(raidId: number);
    set raid(raid: RaidInfo);
    private loadChallenger;
}
//# sourceMappingURL=NurseRaid.d.ts.map