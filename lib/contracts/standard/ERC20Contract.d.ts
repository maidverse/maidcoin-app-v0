import { BigNumber, BigNumberish, ContractInterface, ethers } from "ethers";
import Contract from "../Contract";
export default abstract class ERC20Contract<CT extends ethers.Contract> extends Contract<CT> {
    constructor(address: string, abi: ContractInterface, eventNames: string[]);
    getTotalSupply(): Promise<BigNumber>;
    balanceOf(owner: string): Promise<BigNumber>;
    transfer(to: string, amount: BigNumberish): Promise<void>;
    transferFrom(from: string, to: string, amount: BigNumberish): Promise<void>;
    approve(spender: string, amount: BigNumberish): Promise<void>;
    allowance(owner: string, spender: string): Promise<void>;
}
//# sourceMappingURL=ERC20Contract.d.ts.map