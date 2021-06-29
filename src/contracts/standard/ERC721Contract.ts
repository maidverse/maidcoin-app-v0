import { BigNumber, ContractInterface, ethers } from "ethers";
import Contract from "../Contract";

export default abstract class ERC721Contract<CT extends ethers.Contract> extends Contract<CT> {

    constructor(address: string, abi: ContractInterface, eventNames: string[]) {
        super(address, abi, eventNames.concat([
            "Transfer",
            "Approval",
            "ApprovalForAll",
        ]));
    }

    public async getTotalSupply(): Promise<BigNumber> {
        return await this.contract.totalSupply();
    }
}
