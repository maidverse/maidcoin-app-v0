import { BigNumber, BigNumberish, ethers } from "ethers";
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
    signMessage(name: string, version: string, verifyingContract: string, spender: string, amount: BigNumberish, nonce: BigNumber, timelimit: number): Promise<{
        deadline: BigNumber;
        v: number;
        r: string;
        s: string;
    }>;
}
declare const _default: Wallet;
export default _default;
//# sourceMappingURL=Wallet.d.ts.map