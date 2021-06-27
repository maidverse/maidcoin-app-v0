import { BigNumberish, ContractInterface, ethers } from "ethers";
import Contract from "../Contract";
export default abstract class ERC20Contract<CT extends ethers.Contract> extends Contract<CT> {
    constructor(address: string, abi: ContractInterface, eventNames: string[]);
    getTotalSupply(): Promise<any>;
    balanceOf(owner: string): Promise<any>;
    transfer(to: string, amount: BigNumberish): Promise<void>;
    transferFrom(from: string, to: string, amount: BigNumberish): Promise<void>;
    approve(spender: string, amount: BigNumberish): Promise<void>;
    allowance(owner: string, spender: string): Promise<void>;
}
//# sourceMappingURL=ERC20Contract%20copy.d.ts.map