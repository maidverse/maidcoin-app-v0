import { BigNumberish } from "ethers";
import ERC721Contract from "./standard/ERC721Contract";
import { Maid } from "./typechain";
export interface MaidInfo {
    originPower: number;
    supportedLPTokenAmount: number;
}
declare class MaidContract extends ERC721Contract<Maid> {
    constructor();
    getMaid(maidId: number): Promise<MaidInfo>;
    mint(power: BigNumberish): Promise<void>;
}
declare const _default: MaidContract;
export default _default;
//# sourceMappingURL=MaidContract.d.ts.map