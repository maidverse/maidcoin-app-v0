import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { CloneNurse } from "../CloneNurse";
export declare class CloneNurse__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(nursePartAddr: string, maidCoinAddr: string, theMasterAddr: string, overrides?: Overrides): Promise<CloneNurse>;
    getDeployTransaction(nursePartAddr: string, maidCoinAddr: string, theMasterAddr: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): CloneNurse;
    connect(signer: Signer): CloneNurse__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): CloneNurse;
}
//# sourceMappingURL=CloneNurse__factory.d.ts.map