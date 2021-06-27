"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../../Config"));
const Wallet_1 = __importDefault(require("../../ethereum/Wallet"));
const TestLPToken_json_1 = __importDefault(require("../artifacts/contracts/test/TestLPToken.sol/TestLPToken.json"));
const Contract_1 = __importDefault(require("../Contract"));
class TestLPTokenContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.LPToken, TestLPToken_json_1.default.abi, [
            "Transfer",
            "Approval",
        ]);
    }
    async getTotalSupply() {
        return await this.contract.totalSupply();
    }
    async balanceOf(owner) {
        return await this.contract.balanceOf(owner);
    }
    async transfer(to, amount) {
        const contract = await this.loadWalletContract();
        await (contract === null || contract === void 0 ? void 0 : contract.transfer(to, amount));
    }
    async transferFrom(from, to, amount) {
        const contract = await this.loadWalletContract();
        await (contract === null || contract === void 0 ? void 0 : contract.transferFrom(from, to, amount));
    }
    async approve(spender, amount) {
        const contract = await this.loadWalletContract();
        await (contract === null || contract === void 0 ? void 0 : contract.approve(spender, amount));
    }
    async allowance(owner, spender) {
        const contract = await this.loadWalletContract();
        await (contract === null || contract === void 0 ? void 0 : contract.allowance(owner, spender));
    }
    async mint(amount) {
        const contract = await this.loadWalletContract();
        const owner = await Wallet_1.default.loadAddress();
        if (owner !== undefined) {
            await (contract === null || contract === void 0 ? void 0 : contract.mint(owner, amount));
        }
    }
}
exports.default = new TestLPTokenContract();
//# sourceMappingURL=TestLPTokenContract.js.map