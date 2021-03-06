import { DomNode, el } from "@hanul/skynode";
import { BigNumber, utils } from "ethers";
import CommonUtil from "../CommonUtil";
import MaidCoinContract from "../contracts/MaidCoinContract";
import Wallet from "../ethereum/Wallet";

export default class UserInfo extends DomNode {

    private userInfo: DomNode;
    private maidCoinInfo: DomNode;
    private connectButton: DomNode;

    constructor() {
        super(".user-info");
        this.append(
            this.maidCoinInfo = el(".maid-coin"),
            this.userInfo = el(".user-info"),
            this.connectButton = el("a.connect-button", "Connect", {
                click: () => Wallet.connect(),
            }),
        );

        this.maidCoinInfo.style({ display: "none" });
        this.userInfo.style({ display: "none" });
        this.connectButton.style({ display: "none" });

        this.loadUserInfo();
        this.loadMaidCoin();

        Wallet.on("connect", this.connectHandler);
        MaidCoinContract.on("Transfer", this.transferHandler);
    }

    private connectHandler = () => {
        this.loadUserInfo();
        this.loadMaidCoin();
    };

    private transferHandler = async (from: string, to: string, amount: BigNumber) => {
        const address = await Wallet.loadAddress();
        if (from === address || to === address) {
            this.loadMaidCoin();
        }
    };

    private async loadUserInfo() {
        const owner = await Wallet.loadAddress();
        if (owner === undefined) {

            this.maidCoinInfo.style({ display: "none" });
            this.userInfo.style({ display: "none" });
            this.connectButton.style({ display: "block" });

        } else {

            this.maidCoinInfo.style({ display: "block" });
            this.userInfo.style({ display: "block" });
            this.connectButton.style({ display: "none" });

            this.userInfo.empty().append(
                el(".address", CommonUtil.shortenAddress(owner)),
            );
        }
    }

    private async loadMaidCoin() {
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {
            const balance = await MaidCoinContract.balanceOf(owner);
            this.maidCoinInfo.empty().append(
                el(".balance", `${utils.formatEther(balance)} $MAID`),
            );
        }
    }

    public delete(): void {

        Wallet.off("connect", this.connectHandler);
        MaidCoinContract.off("Transfer", this.transferHandler);

        super.delete();
    }
}
