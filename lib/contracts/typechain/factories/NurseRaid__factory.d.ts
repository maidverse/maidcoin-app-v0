import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { NurseRaid } from "../NurseRaid";
export declare class NurseRaid__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(maidAddr: string, maidCoinAddr: string, nursePartAddr: string, rngAddr: string, overrides?: Overrides): Promise<NurseRaid>;
    getDeployTransaction(maidAddr: string, maidCoinAddr: string, nursePartAddr: string, rngAddr: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): NurseRaid;
    connect(signer: Signer): NurseRaid__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): NurseRaid;
}
//# sourceMappingURL=NurseRaid__factory.d.ts.map