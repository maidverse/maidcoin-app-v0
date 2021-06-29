import WalletConnectProvider from "@walletconnect/web3-provider";
import { BigNumber, BigNumberish, constants, ethers } from "ethers";
import { splitSignature } from "ethers/lib/utils";
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

    public async signMessage(

        name: string,
        version: string,
        verifyingContract: string,

        spender: string,
        amount: BigNumberish,
        nonce: BigNumber,
        timelimit: number,
    ) {
        const owner = await this.loadAddress();
        const deadline = constants.MaxUint256;//Math.ceil(Date.now() / 1000) + timelimit;

        const EIP712Domain = [
            { name: "name", type: "string" },
            { name: "version", type: "string" },
            { name: "chainId", type: "uint256" },
            { name: "verifyingContract", type: "address" },
        ];
        const domain = {
            name,
            version,
            chainId: Config.chainId,
            verifyingContract,
        };
        const Permit = [
            { name: "owner", type: "address" },
            { name: "spender", type: "address" },
            { name: "value", type: "uint256" },
            { name: "nonce", type: "uint256" },
            { name: "deadline", type: "uint256" },
        ];
        const message = {
            owner,
            spender,
            value: BigNumber.from(amount).toString(),
            nonce: BigNumber.from(nonce).toHexString(),
            deadline: BigNumber.from(deadline).toString(),
        };
        const data = JSON.stringify({
            types: {
                EIP712Domain,
                Permit,
            },
            domain,
            primaryType: "Permit",
            message,
        });
        const payload = { method: "eth_signTypedData_v4", params: [owner, data], from: owner };

        let signedMessage;
        if (this.existsInjectedProvider === true) {
            signedMessage = await this.ethereum.request(payload);
        } else {
            signedMessage = await this.walletConnectProvider?.request(payload);
        }

        console.log(signedMessage);

        const signature = splitSignature(signedMessage);
        return {
            deadline,
            v: signature.v,
            r: signature.r,
            s: signature.s,
        };
    }
}

export default new Wallet();
