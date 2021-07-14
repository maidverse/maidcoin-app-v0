import { DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import CloneNurseContract from "../../contracts/CloneNurseContract";
import TheMasterContract from "../../contracts/TheMasterContract";
import Wallet from "../../ethereum/Wallet";

export default class CloneNurse extends DomNode {

    constructor(private nurseId: number) {
        super(".clone-nurse");
        this.append(el("", "Loading..."));
        this.load();
    }

    private async load() {

        const nurse = await CloneNurseContract.getNurse(this.nurseId);
        this.empty().append(
            el("", `Clone Nurse #${this.nurseId}`),
            el("", `Type: ${nurse.nurseType}`),
            el("", `Supported Power: ${utils.formatEther(await CloneNurseContract.getSupportedPower(this.nurseId))}`),
        );

        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {

            const supportingAmount = await TheMasterContract.getSupportingAmount(owner);
            const supportingTo = (await CloneNurseContract.getSupportingTo(owner)).toNumber();

            if (supportingAmount.eq(0) === true) {
                this.append(el("a.support-button", "Support", {
                    click: async () => {
                        const amount = prompt("How much amount to support?", "10");
                        if (amount) {
                            await TheMasterContract.support(3, utils.parseEther(amount), this.nurseId);
                        }
                    },
                }));
            } else if (supportingTo === this.nurseId) {
                this.append(el("a.desupport-button", "Desupport", {
                    click: async () => {
                        const amount = prompt("How much amount to desupport?", "10");
                        if (amount) {
                            await TheMasterContract.desupport(3, utils.parseEther(amount));
                        }
                    },
                }));
            }
        }
    }
}
