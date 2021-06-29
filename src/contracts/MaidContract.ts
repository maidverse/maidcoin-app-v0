import { BigNumberish } from "ethers";
import Config from "../Config";
import Wallet from "../ethereum/Wallet";
import MaidArtifact from "./artifacts/contracts/Maid.sol/Maid.json";
import LPTokenContract from "./LPTokenContract";
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

    public async support(id: BigNumberish, lpTokenAmount: BigNumberish) {
        const contract = await this.loadWalletContract();
        const owner = await Wallet.loadAddress();
        if (contract !== undefined && owner !== undefined) {
            if (await LPTokenContract.allowance(owner, this.address) < lpTokenAmount) {

                console.log(
                    await LPTokenContract.getName(),
                    "1",
                    LPTokenContract.address,

                    this.address,
                    lpTokenAmount,
                    await LPTokenContract.getNonce(owner),
                )

                const result = await Wallet.signMessage(

                    await LPTokenContract.getName(),
                    "1",
                    LPTokenContract.address,

                    this.address,
                    lpTokenAmount,
                    await LPTokenContract.getNonce(owner),
                    1000000,
                );

                console.log(owner, this.address, lpTokenAmount, result);

                //const digest = await LPTokenContract.loadApprovalDigest(owner, this.address, lpTokenAmount);
                //console.log(await Wallet.signMessage(digest));
                await contract.supportWithPermit(id, lpTokenAmount, result.deadline, result.v, result.r, result.s);
            } else {
                await contract.support(id, lpTokenAmount);
            }
        }
    }
}

export default new MaidContract();
