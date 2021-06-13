import Config from "../Config";
import Contract from "./Contract";

class CloneNurseContract extends Contract {

    constructor() {
        super(Config.contracts.CloneNurse, require("./abi/CloneNurseABI.json"));
        this.test();
    }

    private async test() {
        console.log(await this.contract.ratio());
    }
}

export default new CloneNurseContract();
