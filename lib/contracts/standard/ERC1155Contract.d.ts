import { BigNumber, ContractInterface, ethers } from "ethers";
import Contract from "../Contract";
export default abstract class ERC1155Contract<CT extends ethers.Contract> extends Contract<CT> {
    static PERMIT_TYPEHASH: string;
    constructor(address: string, abi: ContractInterface, eventNames: string[]);
    getName(): Promise<string>;
    getNonce(owner: string): Promise<BigNumber>;
    loadApprovalDigest(owner: string, spender: string): Promise<string>;
}
//# sourceMappingURL=ERC1155Contract.d.ts.map