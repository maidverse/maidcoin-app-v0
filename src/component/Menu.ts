import { ClosableFloatingDomNode, el, Position } from "@hanul/skynode";

export default class Menu extends ClosableFloatingDomNode {

    constructor(position: Position) {
        super(position, ".menu");
        this.append(
            //el("a.menu-item", "Docs", { href: "https://www.maidcoin.org/", target: "_blank" }),
            el("a.menu-item", "Open Source", { href: "https://github.com/maidcoingit", target: "_blank" }),
            el("a.menu-item", "Discord", { href: "https://discord.gg/ZMWNjs6F3V", target: "_blank" }),
            el("a.menu-item", "Telegram", { href: "https://t.me/maidcoingroup", target: "_blank" }),
            el("a.menu-item", "Twitter", { href: "https://twitter.com/maid_coin", target: "_blank" }),
        );
        this.putInsideWindow();
    }
}
