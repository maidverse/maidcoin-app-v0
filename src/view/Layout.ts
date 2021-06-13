import { BodyNode, DomNode, el } from "@hanul/skynode";
import { SkyRouter, View } from "skyrouter";
import { ViewParams } from "skyrouter/lib/View";
import UserInfo from "../components/UserInfo";

export default class Layout implements View {

    public static current: Layout;

    private container: DomNode;
    public content: DomNode;

    constructor() {
        Layout.current = this;
        BodyNode.append(this.container = el("#layout",
            el("header",
                el("nav",
                    el("a", "Home", { click: () => SkyRouter.go("/") }),
                    el("a", "Maid", { click: () => SkyRouter.go("/maid") }),
                    el("a", "Earn", { click: () => SkyRouter.go("/earn") }),
                    el("a", "Nurse", { click: () => SkyRouter.go("/nurse") }),
                ),
                new UserInfo(),
                el("a.more-button.fas.fa-ellipsis-h"),
            ),
            this.content = el("main"),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
