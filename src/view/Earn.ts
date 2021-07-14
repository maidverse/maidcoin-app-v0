import { DomNode, el } from "@hanul/skynode";
import { View } from "skyrouter";
import { ViewParams } from "skyrouter/lib/View";
import CloneNurseList from "../component/nurse/CloneNurseList";
import Layout from "./Layout";

export default class Earn implements View {

    private container: DomNode;

    constructor() {
        Layout.current.content.append(this.container = el("#earn",
            el("h2", "Earn"),
            el("p", "Earn MaidCoin!"),
            new CloneNurseList(),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
