import { ethers } from "ethers";
import EventContainer from "eventcontainer";
export default abstract class Contract extends EventContainer {
    private address;
    private abi;
    protected walletContract: ethers.Contract | undefined;
    protected contract: ethers.Contract;
    constructor(address: string, abi: string);
    loadWalletContract(): Promise<ethers.Contract | undefined>;
}
//# sourceMappingURL=Contract.d.ts.map