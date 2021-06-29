import { ContractInterface, ethers } from "ethers";
import EventContainer from "eventcontainer";
import Config from "../Config";
import NetworkProvider from "../ethereum/NetworkProvider";
import Wallet from "../ethereum/Wallet";

export default abstract class Contract<CT extends ethers.Contract> extends EventContainer {

    private walletContract: CT | undefined;
    protected contract: CT;

    constructor(public address: string, private abi: ContractInterface, eventNames: string[]) {
        super();
        this.contract = new ethers.Contract(address, abi, NetworkProvider.provider).connect(NetworkProvider.signer) as CT;
        for (const eventName of eventNames) {
            this.contract.on(eventName, (...args) => {
                this.fireEvent(eventName, ...args);
            });
        }
        Wallet.on("chainChanged", () => this.walletContract = undefined);
    }

    public async loadWalletContract() {
        if (await Wallet.loadChainId() !== Config.chainId) {
            alert("Wrong Network");
        } else {
            if (await Wallet.connected() !== true) {
                await Wallet.connect();
            }
            if (this.walletContract === undefined && Wallet.signer !== undefined) {
                this.walletContract = new ethers.Contract(this.address, this.abi, Wallet.provider).connect(Wallet.signer) as CT;
            }
            return this.walletContract;
        }
    }

    public static convertMessageToHash(message: string) {
        return ethers.utils.keccak256(ethers.utils.toUtf8Bytes(message));
    }

    protected getDomainSeparator(name: string) {
        return ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(
            ["bytes32", "bytes32", "bytes32", "uint256", "address"],
            [
                ethers.utils.keccak256(ethers.utils.toUtf8Bytes("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)")),
                ethers.utils.keccak256(ethers.utils.toUtf8Bytes(name)),
                ethers.utils.keccak256(ethers.utils.toUtf8Bytes("1")),
                Config.chainId,
                this.address,
            ]
        ));
    }

    protected getApprovalDigest(name: string, types: string[], values: any[]) {
        return ethers.utils.keccak256(ethers.utils.solidityPack(
            ["bytes1", "bytes1", "bytes32", "bytes32"],
            [
                "0x19",
                "0x01",
                this.getDomainSeparator(name),
                ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(types, values)),
            ],
        ));
    }
}
