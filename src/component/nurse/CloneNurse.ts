import { DomNode, el } from "@hanul/skynode";
import { utils } from "ethers";
import CloneNurseContract from "../../contracts/CloneNurseContract";
import TheMasterContract from "../../contracts/TheMasterContract";

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
            el("a.support-button", "Support", {
                click: async () => {
                    const amount = prompt("How much amount to support?", "10");
                    if (amount) {
                        await TheMasterContract.support(2, utils.parseEther(amount), this.nurseId);
                    }
                },
            }),
        );
    }
}
