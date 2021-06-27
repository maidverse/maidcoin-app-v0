import WalletConnectProvider from "@walletconnect/web3-provider";
import { BigNumber, ethers } from "ethers";
import EventContainer from "eventcontainer";
import Config from "../Config";

class Wallet extends EventContainer {

    private ethereum: any | undefined = (window as any).ethereum;
    public get existsInjectedProvider() { return this.ethereum !== undefined; }
    private walletConnectProvider: WalletConnectProvider | undefined;

    public provider: ethers.providers.Web3Provider;
    public signer: ethers.providers.JsonRpcSigner;

    constructor() {
        super();
        if (this.existsInjectedProvider === true) {
            this.provider = new ethers.providers.Web3Provider(this.ethereum);
            this.ethereum.on("chainChanged", (chainId: string) => {
                this.provider = new ethers.providers.Web3Provider(this.ethereum);
                this.signer = this.provider.getSigner();
                this.fireEvent("chainchange", BigNumber.from(chainId).toNumber());
            });
        } else {
            this.walletConnectProvider = new WalletConnectProvider({ infuraId: Config.infuraId });
            this.provider = new ethers.providers.Web3Provider(this.walletConnectProvider);
            this.walletConnectProvider.on("chainChanged", (chainId: number) => {
                this.fireEvent("chainchange", chainId);
            });
        }
        this.signer = this.provider.getSigner();
        this.checkConnected();
    }

    private async checkConnected() {
        if (await this.connected() === true) {
            this.fireEvent("connect");
        }
    }

    public async loadAddress(): Promise<string | undefined> {
        if (this.walletConnectProvider?.connected === false) {
            return undefined;
        }
        return (await this.provider.listAccounts())[0];
    }

    public async loadChainId() {
        const network = await this.provider.getNetwork();
        return network.chainId;
    }

    public async connected() {
        return await this.loadAddress() !== undefined;
    }

    public async connect() {
        if (this.existsInjectedProvider === true) {
            await this.ethereum.request({ method: "eth_requestAccounts" });
        } else {
            await this.walletConnectProvider?.enable();
        }
        this.checkConnected();
    }
}

export default new Wallet();
