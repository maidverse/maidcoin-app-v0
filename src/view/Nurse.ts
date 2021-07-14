import { DomNode, el } from "@hanul/skynode";
import { View } from "skyrouter";
import { ViewParams } from "skyrouter/lib/View";
import NurseFactoryList from "../component/nurse/NurseFactoryList";
import NurseRaidList from "../component/nurse/NurseRaidList";
import Layout from "./Layout";

export default class Nurse implements View {

    private container: DomNode;

    constructor() {
        Layout.current.content.append(this.container = el("#nurse",
            el("h2", "Nurse Raid"),
            el("p", "Defeat Nurses and get Nurse Parts."),
            new NurseRaidList(),
            el("h2", "Nurse Factory"),
            el("p", "You can make Clone Nurses with Nurse Parts."),
            new NurseFactoryList(),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
