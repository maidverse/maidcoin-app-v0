import { ethers } from "ethers";
import EventContainer from "eventcontainer";
import Config from "../Config";

class NetworkProvider extends EventContainer {

    public provider: ethers.providers.JsonRpcProvider;
    public signer: ethers.providers.JsonRpcSigner;

    constructor() {
        super();
        this.provider = new ethers.providers.JsonRpcProvider(Config.rpc);
        this.signer = this.provider.getSigner(ethers.constants.AddressZero);
    }
}

export default new NetworkProvider();
