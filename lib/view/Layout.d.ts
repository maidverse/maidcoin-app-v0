import { DomNode } from "@hanul/skynode";
import { View } from "skyrouter";
import { ViewParams } from "skyrouter/lib/View";
export default class Layout implements View {
    static current: Layout;
    private container;
    private nav;
    content: DomNode;
    private showingNav;
    constructor();
    changeParams(params: ViewParams, uri: string): void;
    close(): void;
}
//# sourceMappingURL=Layout.d.ts.map