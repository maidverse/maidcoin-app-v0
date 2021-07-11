import { DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import superagent from "superagent";
import MaidContract from "../../contracts/MaidContract";
import MaidDetail from "./MaidDetail";

export default class MaidSummary extends DomNode {

    constructor(private maidId: number) {
        super(".maid-summary");
        this.append(el(".loading", "Loading..."));
        this.load();
        this.onDom("click", () => new MaidDetail(maidId));
    }

    private async load() {

        const maid = await MaidContract.getMaid(this.maidId);

        const result = await superagent.post(`https://api.maidcoin.org/maid/${this.maidId}`);
        const tokenInfo = result.body;

        this.empty().append(
            el("img.image", { src: `https://storage.googleapis.com/maidcoin/Catalog/${tokenInfo.name}Catalog.png` }),
            el(".info",
                el("h4.name", tokenInfo.name),
                el(".property", `Origin Power: ${maid.originPower}`),
                el(".property", `Supported LP Token Amount: ${utils.formatEther(maid.supportedLPTokenAmount)}`),
                el(".controller",
                    el("a.support-button", "Support", {
                        click: async (event: MouseEvent) => {
                            const amount = prompt("How much amount to support?", "10");
                            if (amount) {
                                await MaidContract.support(this.maidId, utils.parseEther(amount));
                            }
                            event.stopPropagation();
                        },
                    }),
                ),
            ),
        );
    }
}
