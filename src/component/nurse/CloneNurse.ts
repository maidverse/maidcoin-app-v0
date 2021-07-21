import { DomNode, el } from "@hanul/skynode";
import { BigNumber, utils } from "ethers";
import superagent from "superagent";
import CommonUtil from "../../CommonUtil";
import CloneNurseContract from "../../contracts/CloneNurseContract";
import TheMasterContract from "../../contracts/TheMasterContract";
import Wallet from "../../ethereum/Wallet";

export default class CloneNurse extends DomNode {

    private reward: DomNode | undefined;
    private supportedPower: DomNode | undefined;
    private supporterReward: DomNode | undefined;

    constructor(private nurseId: number) {
        super(".clone-nurse");
        this.append(el(".loading", "Loading..."));
        this.load();
        CloneNurseContract.on("Claim", this.claimHandler);
        CloneNurseContract.on("ChangeSupportedPower", this.changeSupportedPowerHandler);
        TheMasterContract.on("Support", this.supportHandler);
        TheMasterContract.on("Desupport", this.desupportHandler);
    }

    private claimHandler = async (id: BigNumber, claimer: string, reward: BigNumber) => {
        if (id.eq(this.nurseId) === true) {
            this.reward?.empty().appendText("Reward: 0 $MAID");
        }
    };

    private changeSupportedPowerHandler = async (id: BigNumber, power: BigNumber) => {
        if (id.eq(this.nurseId) === true) {
            this.reward?.empty().appendText("Reward: 0 $MAID");
            this.supportedPower?.empty().appendText(`Supported Power: ${utils.formatEther(power)}`);
        }
    };

    private supportHandler = async (supporter: string, pid: BigNumber) => {
        const owner = await Wallet.loadAddress();
        if (owner === supporter && pid.eq(3) === true) {
            this.supporterReward?.empty().appendText("Supporter Reward: 0 $MAID");
        }
    };

    private desupportHandler = async (supporter: string, pid: BigNumber) => {
        const owner = await Wallet.loadAddress();
        if (owner === supporter && pid.eq(3) === true) {
            this.supporterReward?.empty().appendText("Supporter Reward: 0 $MAID");
        }
    };

    private async load() {

        const nurse = await CloneNurseContract.getNurse(this.nurseId);
        const nurseOwner = await CloneNurseContract.ownerOf(this.nurseId);

        const result = await superagent.post(`https://api.maidcoin.org/clonenurse/${this.nurseId}`);
        const tokenInfo = result.body;

        let control;
        this.empty().append(
            el("img.image", { src: tokenInfo.image }),
            el(".info",
                el(".property", `Clone Nurse #${this.nurseId}`),
                el(".property", `Owner: ${CommonUtil.shortenAddress(nurseOwner)}`),
                el(".property", `Type: ${nurse.nurseType}`),
                this.supportedPower = el(".property", `Supported Power: ${utils.formatEther(await CloneNurseContract.getSupportedPower(this.nurseId))}`),
                this.reward = el(".property"),
                this.supporterReward = el(".property"),
                control = el(".control"),
            ),
        );

        this.supportedPower.on("delete", () => this.supportedPower = undefined);
        this.reward.on("delete", () => this.reward = undefined);
        this.supporterReward.on("delete", () => this.supporterReward = undefined);

        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {

            if (owner === nurseOwner) {
                el("a.claim-button", "Claim", {
                    click: async () => {
                        await CloneNurseContract.claim(this.nurseId);
                    },
                }).appendTo(control);

                this.reward.empty().appendText(`Reward: ${utils.formatEther(await CloneNurseContract.getPendigReward(this.nurseId))} $MAID`);
            }

            const supportingAmount = await TheMasterContract.getSupportingAmount(owner);
            const supportingTo = (await CloneNurseContract.getSupportingTo(owner)).toNumber();

            if (supportingAmount.eq(0) === true) {
                el("a.support-button", "Support", {
                    click: async () => {
                        const amount = prompt("How much amount to support?", "10");
                        if (amount) {
                            await TheMasterContract.support(3, utils.parseEther(amount), this.nurseId);
                        }
                    },
                }).appendTo(control);
            } else if (supportingTo === this.nurseId) {
                el("a.desupport-button", "Desupport", {
                    click: async () => {
                        const amount = prompt("How much amount to desupport?", "10");
                        if (amount) {
                            await TheMasterContract.desupport(3, utils.parseEther(amount));
                        }
                    },
                }).appendTo(control);
                el("a.claim-button", "Supporter Claim", {
                    click: async () => {
                        await TheMasterContract.support(3, 0, this.nurseId);
                    },
                }).appendTo(control);

                this.reward.empty().appendText(`Supporter Reward: ${utils.formatEther(await TheMasterContract.getPendingReward(3, owner))} $MAID`);
            }
        }
    }

    public delete(): void {
        CloneNurseContract.off("Claim", this.claimHandler);
        CloneNurseContract.off("ChangeSupportedPower", this.changeSupportedPowerHandler);
        TheMasterContract.off("Support", this.supportHandler);
        TheMasterContract.off("Desupport", this.desupportHandler);
        super.delete();
    }
}
