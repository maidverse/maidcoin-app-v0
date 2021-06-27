import { DomNode, el } from "@hanul/skynode";
import { View } from "skyrouter";
import { ViewParams } from "skyrouter/lib/View";
import MaidContract from "../contracts/MaidContract";
import Layout from "./Layout";

export default class Admin implements View {

    private container: DomNode;

    constructor() {
        Layout.current.content.append(this.container = el("#admin",
            el("h2", "Admin Console"),
            el(".control",
                el("a.mint-maid-button", "Mint Maid", {
                    click: async () => {
                        const amount = prompt("Please enter the maid's power", "50");
                        if (amount) {
                            await MaidContract.mint(amount);
                        }
                    },
                }),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
