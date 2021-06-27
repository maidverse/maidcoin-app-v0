import { BigNumberish } from "ethers";
import Contract from "../Contract";
import { TestLPToken } from "../typechain";
declare class TestLPTokenContract extends Contract<TestLPToken> {
    constructor();
    getTotalSupply(): Promise<import("ethers").BigNumber>;
    balanceOf(owner: string): Promise<import("ethers").BigNumber>;
    transfer(to: string, amount: BigNumberish): Promise<void>;
    transferFrom(from: string, to: string, amount: BigNumberish): Promise<void>;
    approve(spender: string, amount: BigNumberish): Promise<void>;
    allowance(owner: string, spender: string): Promise<void>;
    mint(amount: BigNumberish): Promise<void>;
}
declare const _default: TestLPTokenContract;
export default _default;
//# sourceMappingURL=TestLPTokenContract.d.ts.map