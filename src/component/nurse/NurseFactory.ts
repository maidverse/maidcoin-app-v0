import { DomNode, el } from "@hanul/skynode";
import CloneNurseContract from "../../contracts/CloneNurseContract";
import NursePartContract from "../../contracts/NursePartContract";
import Wallet from "../../ethereum/Wallet";

export default class NurseFactory extends DomNode {

    constructor(private nurseType: number) {
        super(".nurse-factory");
        this.append(el("", "Loading..."));
        this.load();
    }

    private async load() {
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {
            const nurseType = await CloneNurseContract.getNurseType(this.nurseType);
            const balance = await NursePartContract.balanceOf(owner, this.nurseType);
            this.empty().append(
                el("", `Nurse Part #${this.nurseType}`),
                el("", `Balance: ${balance}`),
                el("", `Need Part Count: ${nurseType.partCount}`),
                el("a.assemble-button", "Assemble Nurse", {
                    click: async () => {
                        await CloneNurseContract.assemble(this.nurseType);
                    },
                }),
            );
        }
    }
}
