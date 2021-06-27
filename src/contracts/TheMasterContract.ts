import Config from "../Config";
import TheMasterArtifact from "./artifacts/contracts/TheMaster.sol/TheMaster.json";
import Contract from "./Contract";
import { TheMaster } from "./typechain";

class TheMasterContract extends Contract<TheMaster> {

    constructor() {
        super(Config.contracts.TheMaster, TheMasterArtifact.abi, [
        ]);
    }
}

export default new TheMasterContract();
