import { ethers } from "ethers";
import EventContainer from "eventcontainer";
declare class NetworkProvider extends EventContainer {
    provider: ethers.providers.JsonRpcProvider;
    signer: ethers.providers.JsonRpcSigner;
    constructor();
    getBlockNumber(): Promise<number>;
    getBalance(address: string): Promise<ethers.BigNumber>;
}
declare const _default: NetworkProvider;
export default _default;
//# sourceMappingURL=NetworkProvider.d.ts.map