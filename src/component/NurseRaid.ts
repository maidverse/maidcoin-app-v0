import { DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import NurseRaidContract, { RaidInfo } from "../contracts/NurseRaidContract";
import Wallet from "../ethereum/Wallet";

export default class NurseRaid extends DomNode {

    constructor(private raidId: number) {
        super(".nurse-raid");
        this.append(el("", "Loading..."));
        this.loadChallenger();
    }

    public set raid(raid: RaidInfo) {
        this.empty().append(

            el("", `Raid #${this.raidId}`),
            el("", `Entrance Fee: ${utils.formatEther(raid.entranceFee)}`),
            el("", `Nurse Part: ${raid.nursePart}`),
            el("", `Max Reward Count: ${raid.maxRewardCount}`),
            el("", `Duration: ${raid.duration}`),
            el("", `End Block: ${raid.endBlock}`),

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
