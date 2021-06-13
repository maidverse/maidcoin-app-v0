import { BigNumber, ethers } from "ethers";
import EventContainer from "eventcontainer";

class Wallet extends EventContainer {

    private ethereum = (window as any).ethereum;
    public get existsProvider() { return this.ethereum !== undefined; }
    public provider: ethers.providers.Web3Provider | undefined;
    public signer: ethers.providers.JsonRpcSigner | undefined;

    constructor() {
        super();
        if (this.existsProvider === true) {
            this.provider = new ethers.providers.Web3Provider(this.ethereum);
            this.signer = this.provider.getSigner();
            this.ethereum.on("chainChanged", (chainId: string) => {
                this.provider = new ethers.providers.Web3Provider(this.ethereum);
                this.signer = this.provider.getSigner();
                this.fireEvent("chainchange", BigNumber.from(chainId).toNumber());
            });
        }
    }

    public async loadAddress() {
        return this.provider === undefined ? undefined : (await this.provider.listAccounts())[0];
    }

    public async loadChainId() {
        const network = await this.provider?.getNetwork();
        return network?.chainId;
    }

    public async connected() {
        return await this.loadAddress() !== undefined;
    }

    public async connect() {
        await this.ethereum.request({ method: "eth_requestAccounts" });
    }
}

export default new Wallet();
