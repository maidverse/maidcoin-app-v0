import { DomNode, el } from "@hanul/skynode";
import { View } from "skyrouter";
import { ViewParams } from "skyrouter/lib/View";
import Layout from "./Layout";

export default class Maid implements View {

    private container: DomNode;

    constructor() {
        Layout.current.content.append(this.container = el("#maid",
            "Maid!",
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
