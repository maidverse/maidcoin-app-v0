import { BigNumber, constants, ContractInterface, ethers } from "ethers";
import Contract from "../Contract";

export default abstract class ERC1155Contract<CT extends ethers.Contract> extends Contract<CT> {

    public static PERMIT_TYPEHASH = Contract.convertMessageToHash("Permit(address owner,address spender,uint256 nonce,uint256 deadline)");

    constructor(address: string, abi: ContractInterface, eventNames: string[]) {
        super(address, abi, eventNames.concat([
            "TransferSingle",
            "TransferBatch",
            "ApprovalForAll",
            "URI",
        ]));
    }

    public async getName(): Promise<string> {
        return await this.contract.name();
    }

    public async getNonce(owner: string): Promise<BigNumber> {
        return await this.contract.nonces(owner);
    }

    public async loadApprovalDigest(owner: string, spender: string): Promise<string> {
        return this.getApprovalDigest(await this.getName(),
            ["bytes32", "address", "address", "uint256", "uint256"],
            [ERC1155Contract.PERMIT_TYPEHASH, owner, spender, await this.getNonce(owner), constants.MaxUint256],
        );
    }
}
