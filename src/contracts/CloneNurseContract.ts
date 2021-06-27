import Config from "../Config";
import CloneNurseArtifact from "./artifacts/contracts/CloneNurse.sol/CloneNurse.json";
import ERC721Contract from "./standard/ERC721Contract";
import { CloneNurse } from "./typechain";

class CloneNurseContract extends ERC721Contract<CloneNurse> {

    constructor() {
        super(Config.contracts.CloneNurse, CloneNurseArtifact.abi, [
        ]);
    }
}

export default new CloneNurseContract();
