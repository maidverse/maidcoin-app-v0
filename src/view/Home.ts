import { DomNode, el } from "@hanul/skynode";
import { View } from "skyrouter";
import { ViewParams } from "skyrouter/lib/View";
import Layout from "./Layout";

export default class Home implements View {

    private container: DomNode;

    constructor() {
        Layout.current.content.append(this.container = el("#home",
            el("header",
                el("h2", "MaidCoin"),
                el("p", "Defeat Nurses with Maids and save mankind!"),
                el("a.detail-button", "Read More", { href: "https://maidcoin.org" }),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
