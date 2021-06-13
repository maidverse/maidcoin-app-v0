import { DomNode, el } from "@hanul/skynode";

export default class UserInfo extends DomNode {

    constructor() {
        super(".user-info");
        this.append(el("", "User Info"));
    }
}
