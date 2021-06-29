import { BigNumber, BigNumberish, constants, ContractInterface, ethers } from "ethers";
import Contract from "../Contract";

export default abstract class ERC721Contract<CT extends ethers.Contract> extends Contract<CT> {

    public static PERMIT_TYPEHASH = Contract.convertMessageToHash("Permit(address spender,uint256 tokenId,uint256 nonce,uint256 deadline)");
    public static PERMIT_ALL_TYPEHASH = Contract.convertMessageToHash("Permit(address owner,address spender,uint256 nonce,uint256 deadline)");

    constructor(address: string, abi: ContractInterface, eventNames: string[]) {
        super(address, abi, eventNames.concat([
            "Transfer",
            "Approval",
            "ApprovalForAll",
        ]));
    }

    public async getName(): Promise<string> {
        return await this.contract.name();
    }

    public async getNonce(id: BigNumberish): Promise<BigNumber> {
        return await this.contract.nonces(id);
    }

    public async getNonceForAll(owner: string): Promise<BigNumber> {
        return await this.contract.nonces(owner);
    }

    public async getTotalSupply(): Promise<BigNumber> {
        return await this.contract.totalSupply();
    }

    public async loadApprovalDigest(spender: string, id: BigNumberish): Promise<string> {
        return this.getApprovalDigest(await this.getName(),
            ["bytes32", "address", "uint256", "uint256", "uint256"],
            [ERC721Contract.PERMIT_TYPEHASH, spender, BigNumber.from(id), await this.getNonce(id), constants.MaxUint256],
        );
    }

    public async loadApprovalAllDigest(owner: string, spender: string): Promise<string> {
        return this.getApprovalDigest(await this.getName(),
            ["bytes32", "address", "address", "uint256", "uint256"],
            [ERC721Contract.PERMIT_ALL_TYPEHASH, owner, spender, await this.getNonceForAll(owner), constants.MaxUint256],
        );
    }
}
