import { DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import TheMasterContract from "../contracts/TheMasterContract";
import Wallet from "../ethereum/Wallet";

export default class MaidCorp extends DomNode {

    private control: DomNode;

    constructor() {
        super(".maid-corp");
        this.append(
            el("h4", "Maid Corporation"),
            this.control = el(".control",
                el("a.deposit-button", "Deposit", {
                    click: async () => {
                        const amount = prompt("How much amount to deposit?", "10");
                        if (amount) {
                            await TheMasterContract.deposit(1, utils.parseEther(amount));
                        }
                    },
                }),
                el("a.withdraw-button", "Withdraw", {
                    click: async () => {
                        const amount = prompt("How much amount to withdraw?", "10");
                        if (amount) {
                            await TheMasterContract.withdraw(1, utils.parseEther(amount));
                        }
                    },
                }),
            ),
        );
        this.load();
    }

    private async load() {
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {
            el("a.claim-button", `Claim ${utils.formatEther(await TheMasterContract.getPendingReward(1, owner))} $MAID`, {
                click: async () => {
                    await TheMasterContract.deposit(1, 0);
                },
            }).appendTo(this.control);
        }
    }
}
