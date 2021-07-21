import { BodyNode, DomNode, el } from "@hanul/skynode";
import { SkyRouter, View } from "skyrouter";
import { ViewParams } from "skyrouter/lib/View";
import Menu from "../component/Menu";
import UserInfo from "../component/UserInfo";

export default class Layout implements View {

    public static current: Layout;

    private container: DomNode;
    private nav: DomNode;
    public content: DomNode;

    private showingNav = false;

    constructor() {
        Layout.current = this;
        BodyNode.append(this.container = el("#layout",
            el("header",
                el(".main",
                    el("h1",
                        el("a", el("img.logo", { src: "/images/logo.png" }), { click: () => SkyRouter.go("/") }),
                    ),
                    el("a.menu-button.fas.fa-bars", {
                        click: (event, button) => {
                            if (this.showingNav === true) {
                                this.nav.style({ display: "none" });
                                button.deleteClass("fa-times");
                                button.addClass("fa-bars");
                            } else {
                                this.nav.style({ display: "block" });
                                button.deleteClass("fa-bars");
                                button.addClass("fa-times");
                            }
                            this.showingNav = this.showingNav !== true;
                        },
                    }),
                    this.nav = el("nav",
                        el("a", "Home", { click: () => SkyRouter.go("/") }),
                        el("a", "Maid", { click: () => SkyRouter.go("/maid") }),
                        el("a", "Nurse", { click: () => SkyRouter.go("/nurse") }),
                        el("a", "Earn", { click: () => SkyRouter.go("/earn") }),
                        el("a", "Test LP Token", { click: () => SkyRouter.go("/test-lp-token") }),
                    ),
                ),
                el(".sub",
                    new UserInfo(),
                    el("a.more-button.fas.fa-ellipsis-h", {
                        click: (event, button) => {
                            const rect = button.rect;
                            new Menu({ left: rect.right - 200, top: rect.bottom < window.innerHeight / 2 ? rect.bottom : rect.top - 182 }).appendTo(BodyNode);
                        },
                    }),
                ),
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
