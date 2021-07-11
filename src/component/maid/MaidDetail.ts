import { DomNode, el, Popup } from "@hanul/skynode";
import { utils } from "ethers";
import superagent from "superagent";
import MaidContract from "../../contracts/MaidContract";

export default class MaidDetail extends Popup {

    public content: DomNode;

    constructor(private maidId: number) {
        super(".maid-detail");
        this.append(
            this.content = el(".content",
                el(".loading", "Loading..."),
            ),
            el("a.close-button.fas.fa-times", {
                click: () => this.delete(),
            }),
        );
        this.load();
    }

    private async load() {

        const maid = await MaidContract.getMaid(this.maidId);

        const result = await superagent.post(`https://api.maidcoin.org/maid/${this.maidId}`);
        const tokenInfo = result.body;

        this.content.empty().append(
            el(".image",
                el("img", { src: tokenInfo.image }),
            ),
            el(".info",
                el("h4.name", tokenInfo.name),
                el(".property", `Origin Power: ${maid.originPower}`),
                el(".property", `Supported LP Token Amount: ${utils.formatEther(maid.supportedLPTokenAmount)}`),
            ),
        );
    }
}
