import { BigNumber, BigNumberish, ContractInterface, ethers } from "ethers";
import Contract from "../Contract";
export default abstract class ERC20Contract<CT extends ethers.Contract> extends Contract<CT> {
    static PERMIT_TYPEHASH: string;
    constructor(address: string, abi: ContractInterface, eventNames: string[]);
    getName(): Promise<string>;
    getNonce(owner: string): Promise<BigNumber>;
    getTotalSupply(): Promise<BigNumber>;
    balanceOf(owner: string): Promise<BigNumber>;
    transfer(to: string, amount: BigNumberish): Promise<void>;
    transferFrom(from: string, to: string, amount: BigNumberish): Promise<void>;
    approve(spender: string, amount: BigNumberish): Promise<void>;
    allowance(owner: string, spender: string): Promise<BigNumber>;
    loadApprovalDigest(owner: string, spender: string, value: BigNumberish): Promise<string>;
}
//# sourceMappingURL=ERC20Contract.d.ts.map