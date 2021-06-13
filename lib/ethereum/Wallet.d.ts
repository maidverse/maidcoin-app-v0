import { ethers } from "ethers";
import EventContainer from "eventcontainer";
declare class Wallet extends EventContainer {
    private ethereum;
    get existsProvider(): boolean;
    provider: ethers.providers.Web3Provider | undefined;
    signer: ethers.providers.JsonRpcSigner | undefined;
    constructor();
    loadAddress(): Promise<string | undefined>;
    loadChainId(): Promise<number | undefined>;
    connected(): Promise<boolean>;
    connect(): Promise<void>;
}
declare const _default: Wallet;
export default _default;
//# sourceMappingURL=Wallet.d.ts.map