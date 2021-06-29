import { BigNumber, BigNumberish, ContractInterface, ethers } from "ethers";
import Contract from "../Contract";

export default abstract class ERC20Contract<CT extends ethers.Contract> extends Contract<CT> {

    constructor(address: string, abi: ContractInterface, eventNames: string[]) {
        super(address, abi, eventNames.concat([
            "Transfer",
            "Approval",
        ]));
    }

    public async getTotalSupply(): Promise<BigNumber> {
        return await this.contract.totalSupply();
    }

    public async balanceOf(owner: string): Promise<BigNumber> {
        return await this.contract.balanceOf(owner);
    }

    public async transfer(to: string, amount: BigNumberish) {
        const contract = await this.loadWalletContract();
        await contract?.transfer(to, amount);
    }

    public async transferFrom(from: string, to: string, amount: BigNumberish) {
        const contract = await this.loadWalletContract();
        await contract?.transferFrom(from, to, amount);
    }

    public async approve(spender: string, amount: BigNumberish) {
        const contract = await this.loadWalletContract();
        await contract?.approve(spender, amount);
    }

    public async allowance(owner: string, spender: string) {
        const contract = await this.loadWalletContract();
        await contract?.allowance(owner, spender);
    }
}
