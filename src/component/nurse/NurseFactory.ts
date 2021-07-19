import { DomNode, el } from "@hanul/skynode";
import CloneNurseContract from "../../contracts/CloneNurseContract";
import NursePartContract from "../../contracts/NursePartContract";
import Wallet from "../../ethereum/Wallet";

export default class NurseFactory extends DomNode {

    constructor(private nurseType: number) {
        super(".nurse-factory");
        this.append(el(".loading", "Loading..."));
        this.load();
    }

    private async load() {
        const owner = await Wallet.loadAddress();
        if (owner !== undefined) {
            const nurseType = await CloneNurseContract.getNurseType(this.nurseType);
            const balance = await NursePartContract.balanceOf(owner, this.nurseType);
            this.empty().append(
                el("img.image", { src: `https://storage.googleapis.com/maidcoin/NursePart/${this.nurseType}.png` }),
                el(".info",
                    el(".property", `Nurse Part #${this.nurseType}`),
                    el(".property", `Balance: ${balance}`),
                    el(".property", `Need Part Count: ${nurseType.partCount}`),
                    el(".control",
                        el("a.assemble-button", "Assemble Nurse", {
                            click: async () => {
                                await CloneNurseContract.assemble(this.nurseType);
                            },
                        }),
                    ),
                ),
            );
        }
    }
}
