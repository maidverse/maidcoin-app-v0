import { DomNode, el } from "@hanul/skynode";

export default class MaidCorp extends DomNode {

    constructor() {
        super(".maid-corp");
        this.append(
            el("h4", "Maid Corporation"),
            el(".control",
                el("a.deposit-button", "Deposit", {
                    click: async () => {
                        const amount = prompt("How much amount to deposit?", "10");
                        if (amount) {
                            //TODO:
                        }
                    },
                }),
                el("a.withdraw-button", "Withdraw", {
                    click: async () => {
                        const amount = prompt("How much amount to withdraw?", "10");
                        if (amount) {
                            //TODO:
                        }
                    },
                }),
            ),
        );
    }
}
