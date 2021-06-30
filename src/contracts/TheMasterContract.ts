import { BigNumber } from "ethers";
import Config from "../Config";
import TheMasterArtifact from "./artifacts/contracts/TheMaster.sol/TheMaster.json";
import Contract from "./Contract";
import { TheMaster } from "./typechain";

export interface PoolInfo {
    addr: string;
    delegate: boolean;
    supportable: string;
    supportingRatio: number;
    allocPoint: number;
    lastRewardBlock: number;
    accRewardPerShare: BigNumber;
    supply: BigNumber;
}

class TheMasterContract extends Contract<TheMaster> {

    constructor() {
        super(Config.contracts.TheMaster, TheMasterArtifact.abi, [
        ]);
    }

    public async getPoolCount(): Promise<BigNumber> {
        return await this.contract.poolCount();
    }

    public async getPool(poolId: number): Promise<PoolInfo> {
        const [
            addr,
            delegate,
            supportable,
            supportingRatio,
            allocPoint,
            lastRewardBlock,
            accRewardPerShare,
            supply,
        ] = await this.contract.poolInfo(poolId);
        return {
            addr,
            delegate,
            supportable,
            supportingRatio,
            allocPoint: allocPoint.toNumber(),
            lastRewardBlock: lastRewardBlock.toNumber(),
            accRewardPerShare,
            supply,
        };
    }
}

export default new TheMasterContract();
