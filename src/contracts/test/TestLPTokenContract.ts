import { BigNumberish } from "ethers";
import Config from "../../Config";
import Wallet from "../../ethereum/Wallet";
import TestLPTokenArtifact from "../artifacts/contracts/test/TestLPToken.sol/TestLPToken.json";
import Contract from "../Contract";
import { TestLPToken } from "../typechain";

class TestLPTokenContract extends Contract<TestLPToken> {

    constructor() {
        super(Config.contracts.LPToken, TestLPTokenArtifact.abi, [
            "Transfer",
            "Approval",
        ]);
    }

    public async getTotalSupply() {
        return await this.contract.totalSupply();
    }

    public async balanceOf(owner: string) {
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

    public async mint(amount: BigNumberish) {
        const contract = await this.loadWalletContract();
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {
            await contract?.mint(owner, amount);
        }
    }
}

export default new TestLPTokenContract();
