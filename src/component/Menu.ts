import { ClosableFloatingDomNode, el, Position } from "@hanul/skynode";

export default class Menu extends ClosableFloatingDomNode {

    constructor(position: Position) {
        super(position, ".menu");
        this.append(
            el("", "Menu"),
        );
        this.putInsideWindow();
    }
}
