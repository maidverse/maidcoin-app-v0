import { BodyNode, DomNode, el } from "@hanul/skynode";
import { SkyRouter, View } from "skyrouter";
import { ViewParams } from "skyrouter/lib/View";
import Menu from "../component/Menu";
import UserInfo from "../component/UserInfo";

export default class Layout implements View {

    public static current: Layout;

    private container: DomNode;
    public content: DomNode;

    constructor() {
        Layout.current = this;
        BodyNode.append(this.container = el("#layout",
            el("header",
                el("h1",
                    el("a", el("img.logo", { src: "/images/logo.png" }), { click: () => SkyRouter.go("/") }),
                ),
                el("nav",
                    el("a", "Home", { click: () => SkyRouter.go("/") }),
                    el("a", "Maid", { click: () => SkyRouter.go("/maid") }),
                    el("a", "Nurse", { click: () => SkyRouter.go("/nurse") }),
                    el("a", "Earn", { click: () => SkyRouter.go("/earn") }),
                    el("a", "Test LP Token", { click: () => SkyRouter.go("/test-lp-token") }),
                ),
                new UserInfo(),
                el("a.more-button.fas.fa-ellipsis-h", {
                    click: (event, button) => {
                        const rect = button.rect;
                        new Menu({ left: rect.right - 200, top: rect.bottom }).appendTo(BodyNode);
                    },
                }),
            ),
            this.content = el("main"),
            el("footer", "All rights reserved, MaidCoin"),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
