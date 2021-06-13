import { DomNode, el } from "@hanul/skynode";
import { View } from "skyrouter";
import { ViewParams } from "skyrouter/lib/View";
import Layout from "./Layout";

export default class Earn implements View {

    private container: DomNode;

    constructor() {
        Layout.current.content.append(this.container = el("#earn",
            "Earn!",
        ));

        // farm
        // nurse support
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
