import { BigNumber, ContractInterface, ethers } from "ethers";
import Contract from "../Contract";
export default abstract class ERC1155Contract<CT extends ethers.Contract> extends Contract<CT> {
    constructor(address: string, abi: ContractInterface, eventNames: string[]);
    getName(): Promise<string>;
    getNonce(owner: string): Promise<BigNumber>;
}
//# sourceMappingURL=ERC1155Contract.d.ts.map