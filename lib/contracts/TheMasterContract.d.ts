import { BigNumber, BigNumberish } from "ethers";
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
declare class TheMasterContract extends Contract<TheMaster> {
    constructor();
    getPoolCount(): Promise<BigNumber>;
    getPool(poolId: number): Promise<PoolInfo>;
    support(pid: BigNumberish, lpTokenAmount: BigNumberish, supportTo: BigNumberish): Promise<void>;
    desupport(pid: BigNumberish, lpTokenAmount: BigNumberish): Promise<void>;
}
declare const _default: TheMasterContract;
export default _default;
//# sourceMappingURL=TheMasterContract.d.ts.map