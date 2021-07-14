import { DomNode } from "@hanul/skynode";

export default class MaidCorp extends DomNode {

    constructor() {
        super(".maid-corp");
        this.appendText("Maid Corporation");
    }
}
