import { BigNumberish } from "ethers";
import Config from "../Config";
import MaidArtifact from "./artifacts/contracts/Maid.sol/Maid.json";
import ERC721Contract from "./standard/ERC721Contract";
import { Maid } from "./typechain";

export interface MaidInfo {
    originPower: number;
    supportedLPTokenAmount: number;
}

class MaidContract extends ERC721Contract<Maid> {

    constructor() {
        super(Config.contracts.Maid, MaidArtifact.abi, [
        ]);
    }

    public async getMaid(maidId: number): Promise<MaidInfo> {
        const [originPower, supportedLPTokenAmount] = await this.contract.maids(maidId);
        return {
            originPower: originPower.toNumber(),
            supportedLPTokenAmount: supportedLPTokenAmount.toNumber(),
        };
    }

    public async mint(power: BigNumberish) {
        const contract = await this.loadWalletContract();
        await contract?.mint(power);
    }
}

export default new MaidContract();
