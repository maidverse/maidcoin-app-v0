import { ContractInterface, ethers } from "ethers";
import EventContainer from "eventcontainer";
export default abstract class Contract<CT extends ethers.Contract> extends EventContainer {
    address: string;
    private abi;
    private walletContract;
    protected contract: CT;
    constructor(address: string, abi: ContractInterface, eventNames: string[]);
    loadWalletContract(): Promise<CT | undefined>;
}
//# sourceMappingURL=Contract.d.ts.map