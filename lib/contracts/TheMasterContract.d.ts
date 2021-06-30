import { BigNumber } from "ethers";
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
}
declare const _default: TheMasterContract;
export default _default;
//# sourceMappingURL=TheMasterContract.d.ts.map