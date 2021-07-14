import { DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import superagent from "superagent";
import NurseRaidContract from "../../contracts/NurseRaidContract";
import Wallet from "../../ethereum/Wallet";

export default class NurseRaid extends DomNode {

    constructor(private raidId: number) {
        super(".nurse-raid");
        this.append(el(".loading", "Loading..."));
        this.load();
        this.loadChallenger();
    }

    private async load() {
        const raid = await NurseRaidContract.getRaid(this.raidId);

        const result = await superagent.post(`https://api.maidcoin.org/nursetype/${raid.nursePart}`);
        const tokenInfo = result.body;

        this.empty().append(
            el("img.image", { src: tokenInfo.image }),
            el(".info",

                el(".property", `Raid #${this.raidId}`),
                el(".property", `Entrance Fee: ${utils.formatEther(raid.entranceFee)}`),
                el(".property", `Nurse Part: ${raid.nursePart}`),
                el(".property", `Max Reward Count: ${raid.maxRewardCount}`),
                el(".property", `Duration: ${raid.duration}`),
                el(".property", `End Block: ${raid.endBlock}`),

                el(".control",
                    el("a.enter-button", "Enter", {
                        click: async () => {
                            await NurseRaidContract.enter(this.raidId);
                        },
                    }),
                    el("a.exit-button", "Exit", {
                        click: async () => {
                            await NurseRaidContract.exit(this.raidId);
                        },
                    }),
                ),
            ),
        );
    }

    private async loadChallenger() {
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {
            console.log(this.raidId, await NurseRaidContract.getChallenger(this.raidId, owner));
            console.log(this.raidId, await NurseRaidContract.checkDone(this.raidId));
        }
    }
}
