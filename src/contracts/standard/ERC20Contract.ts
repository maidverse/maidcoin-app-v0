import { BigNumber, BigNumberish, constants, ContractInterface, ethers } from "ethers";
import Contract from "../Contract";

export default abstract class ERC20Contract<CT extends ethers.Contract> extends Contract<CT> {

    public static PERMIT_TYPEHASH = Contract.convertMessageToHash("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)");

    constructor(address: string, abi: ContractInterface, eventNames: string[]) {
        super(address, abi, eventNames.concat([
            "Transfer",
            "Approval",
        ]));
    }

    public async getName(): Promise<string> {
        return await this.contract.name();
    }

    public async getNonce(owner: string): Promise<BigNumber> {
        return await this.contract.nonces(owner);
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

    public async allowance(owner: string, spender: string): Promise<BigNumber> {
        const contract = await this.loadWalletContract();
        return await contract?.allowance(owner, spender);
    }

    public async loadApprovalDigest(owner: string, spender: string, value: BigNumberish): Promise<string> {
        return this.getApprovalDigest(await this.getName(),
            ["bytes32", "address", "address", "uint256", "uint256", "uint256"],
            [ERC20Contract.PERMIT_TYPEHASH, owner, spender, BigNumber.from(value), await this.getNonce(owner), constants.MaxUint256],
        );
    }
}
