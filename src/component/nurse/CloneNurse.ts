import { DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import superagent from "superagent";
import CloneNurseContract from "../../contracts/CloneNurseContract";
import TheMasterContract from "../../contracts/TheMasterContract";
import Wallet from "../../ethereum/Wallet";

export default class CloneNurse extends DomNode {

    constructor(private nurseId: number) {
        super(".clone-nurse");
        this.append(el(".loading", "Loading..."));
        this.load();
    }

    private async load() {

        const nurse = await CloneNurseContract.getNurse(this.nurseId);

        const result = await superagent.post(`https://api.maidcoin.org/clonenurse/${this.nurseId}`);
        const tokenInfo = result.body;

        let control;
        this.empty().append(
            el("img.image", { src: tokenInfo.image }),
            el(".info",
                el(".property", `Clone Nurse #${this.nurseId}`),
                el(".property", `Type: ${nurse.nurseType}`),
                el(".property", `Supported Power: ${utils.formatEther(await CloneNurseContract.getSupportedPower(this.nurseId))}`),
                control = el(".control"),
            ),
        );

        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {

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
            }
        }
    }
}
