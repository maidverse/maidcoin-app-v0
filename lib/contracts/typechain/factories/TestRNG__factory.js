"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRNG__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class TestRNG__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.TestRNG__factory = TestRNG__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "seed",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "generateRandomNumber",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50610209806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806344a0a49114610030575b600080fd5b61004a600480360381019061004591906100be565b610060565b604051610057919061013f565b60405180910390f35b6000426040516020016100739190610124565b6040516020818303038152906040528051906020012060001c905092915050565b6000813590506100a3816101a5565b92915050565b6000813590506100b8816101bc565b92915050565b600080604083850312156100d5576100d46101a0565b5b60006100e3858286016100a9565b92505060206100f485828601610094565b9150509250929050565b6101078161018c565b82525050565b61011e6101198261018c565b610196565b82525050565b6000610130828461010d565b60208201915081905092915050565b600060208201905061015460008301846100fe565b92915050565b60006101658261016c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000819050919050565b600080fd5b6101ae8161015a565b81146101b957600080fd5b50565b6101c58161018c565b81146101d057600080fd5b5056fea2646970667358221220dc67397ce4b60b92106a57f161594a00dabd979b9ce6167bbf311b1e58cc2a9464736f6c63430008050033";
//# sourceMappingURL=TestRNG__factory.js.map