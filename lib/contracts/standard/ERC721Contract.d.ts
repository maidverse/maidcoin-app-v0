import { BigNumber, BigNumberish, ContractInterface, ethers } from "ethers";
import Contract from "../Contract";
export default abstract class ERC721Contract<CT extends ethers.Contract> extends Contract<CT> {
    static PERMIT_TYPEHASH: string;
    static PERMIT_ALL_TYPEHASH: string;
    constructor(address: string, abi: ContractInterface, eventNames: string[]);
    getName(): Promise<string>;
    getNonce(id: BigNumberish): Promise<BigNumber>;
    getNonceForAll(owner: string): Promise<BigNumber>;
    getTotalSupply(): Promise<BigNumber>;
    loadApprovalDigest(spender: string, id: BigNumberish): Promise<string>;
    loadApprovalAllDigest(owner: string, spender: string): Promise<string>;
}
//# sourceMappingURL=ERC721Contract.d.ts.map