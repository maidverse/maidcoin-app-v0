import { ethers } from "ethers";
import EventContainer from "eventcontainer";
declare class Wallet extends EventContainer {
    private ethereum;
    get existsInjectedProvider(): boolean;
    private walletConnectProvider;
    provider: ethers.providers.Web3Provider;
    signer: ethers.providers.JsonRpcSigner;
    constructor();
    private checkConnected;
    loadAddress(): Promise<string | undefined>;
    loadChainId(): Promise<number>;
    connected(): Promise<boolean>;
    connect(): Promise<void>;
}
declare const _default: Wallet;
export default _default;
//# sourceMappingURL=Wallet.d.ts.map