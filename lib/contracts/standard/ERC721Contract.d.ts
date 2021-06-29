import { BigNumber, ContractInterface, ethers } from "ethers";
import Contract from "../Contract";
export default abstract class ERC721Contract<CT extends ethers.Contract> extends Contract<CT> {
    constructor(address: string, abi: ContractInterface, eventNames: string[]);
    getTotalSupply(): Promise<BigNumber>;
}
//# sourceMappingURL=ERC721Contract.d.ts.map