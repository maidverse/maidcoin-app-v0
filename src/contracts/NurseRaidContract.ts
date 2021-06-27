import Config from "../Config";
import NurseRaidArtifact from "./artifacts/contracts/NurseRaid.sol/NurseRaid.json";
import Contract from "./Contract";
import { NurseRaid } from "./typechain";

class NurseRaidContract extends Contract<NurseRaid> {

    constructor() {
        super(Config.contracts.NurseRaid, NurseRaidArtifact.abi, [
        ]);
    }
}

export default new NurseRaidContract();
