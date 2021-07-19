import { DomNode, el, Popup } from "@hanul/skynode";
import { utils } from "ethers";
import superagent from "superagent";
import MaidContract from "../../contracts/MaidContract";
import Sound from "./Sound";

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

    private getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max + 1 - min)) + min;
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
                el("a.voice-button",
                    el("img", { src: "/images/voice-button.png", srcSet: "/images/voice-button@2x.png 2x" }),
                    {
                        click: () => {
                            new Sound({
                                wav: `https://storage.googleapis.com/maidcoin/Voice/${tokenInfo.name}/${tokenInfo.name}LobbyTap${this.getRandomInt(1, 2)}.wav`,
                            }).play();
                        },
                    },
                ),
            ),
        );
    }
}
