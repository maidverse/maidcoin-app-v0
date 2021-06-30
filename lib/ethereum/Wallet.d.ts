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
    signTypedData(owner: string | undefined, deadline: number, name: string, version: string, verifyingContract: string, Permit: {
        name: string;
        type: string;
    }[], message: any): Promise<{
        v: number;
        r: string;
        s: string;
    }>;
    signERC20Permit(name: string, version: string, verifyingContract: string, spender: string, amount: BigNumberish, nonce: BigNumber, deadline: number): Promise<{
        v: number;
        r: string;
        s: string;
    }>;
    signERC721Permit(name: string, version: string, verifyingContract: string, spender: string, id: BigNumber, nonce: BigNumber, deadline: number): Promise<{
        v: number;
        r: string;
        s: string;
    }>;
    signERC721PermitAll(name: string, version: string, verifyingContract: string, spender: string, nonce: BigNumber, timelimit: number): Promise<{
        v: number;
        r: string;
        s: string;
    }>;
    signERC1155Permit(name: string, version: string, verifyingContract: string, spender: string, nonce: BigNumber, deadline: number): Promise<{
        v: number;
        r: string;
        s: string;
    }>;
}
declare const _default: Wallet;
export default _default;
//# sourceMappingURL=Wallet.d.ts.map