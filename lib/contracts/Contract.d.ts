import { ContractInterface, ethers } from "ethers";
import EventContainer from "eventcontainer";
export default abstract class Contract<CT extends ethers.Contract> extends EventContainer {
    address: string;
    private abi;
    private walletContract;
    protected contract: CT;
    constructor(address: string, abi: ContractInterface, eventNames: string[]);
    loadWalletContract(): Promise<CT | undefined>;
    static convertMessageToHash(message: string): string;
    protected getDomainSeparator(name: string): string;
    protected getApprovalDigest(name: string, types: string[], values: any[]): string;
}
//# sourceMappingURL=Contract.d.ts.map