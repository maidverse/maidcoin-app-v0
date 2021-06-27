import Config from "../Config";
import MaidArtifact from "./artifacts/contracts/Maid.sol/Maid.json";
import ERC721Contract from "./standard/ERC721Contract";
import { Maid } from "./typechain";

class MaidContract extends ERC721Contract<Maid> {

    constructor() {
        super(Config.contracts.Maid, MaidArtifact.abi, [
        ]);
    }
}

export default new MaidContract();
