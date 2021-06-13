import { ethers } from "ethers";
import EventContainer from "eventcontainer";
import NetworkProvider from "../ethereum/NetworkProvider";
import Wallet from "../ethereum/Wallet";

export default abstract class Contract extends EventContainer {

    protected walletContract: ethers.Contract | undefined;
    protected contract: ethers.Contract;

    constructor(private address: string, private abi: string) {
        super();
        this.contract = new ethers.Contract(address, abi, NetworkProvider.provider).connect(NetworkProvider.signer);
    }

    public async loadWalletContract() {
        if (this.walletContract === undefined && Wallet.signer !== undefined) {
            this.walletContract = new ethers.Contract(this.address, this.abi, Wallet.provider).connect(Wallet.signer);
        }
        return this.walletContract;
    }
}
