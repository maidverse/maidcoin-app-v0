import { BigNumberish } from "ethers";
import Config from "../Config";
import MaidArtifact from "./artifacts/contracts/Maid.sol/Maid.json";
import ERC721Contract from "./standard/ERC721Contract";
import { Maid } from "./typechain";

class MaidContract extends ERC721Contract<Maid> {

    constructor() {
        super(Config.contracts.Maid, MaidArtifact.abi, [
        ]);
    }

    public async mint(power: BigNumberish) {
        const contract = await this.loadWalletContract();
        await contract?.mint(power);
    }
}

export default new MaidContract();
