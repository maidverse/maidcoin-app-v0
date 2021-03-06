"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermitTest__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class PermitTest__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_maidCoin, _maid, _nursePart, overrides) {
        return super.deploy(_maidCoin, _maid, _nursePart, overrides || {});
    }
    getDeployTransaction(_maidCoin, _maid, _nursePart, overrides) {
        return super.getDeployTransaction(_maidCoin, _maid, _nursePart, overrides || {});
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
exports.PermitTest__factory = PermitTest__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "contract IMaidCoin",
                name: "_maidCoin",
                type: "address",
            },
            {
                internalType: "contract IMaid",
                name: "_maid",
                type: "address",
            },
            {
                internalType: "contract INursePart",
                name: "_nursePart",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
            },
        ],
        name: "maidCoinPermitTest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
            },
        ],
        name: "maidPermitTest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
            },
        ],
        name: "nursePartPermitTest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "ids",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "values",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "onERC1155BatchReceived",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "onERC1155Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b50604051620010a1380380620010a1833981810160405281019062000037919062000147565b826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505062000266565b600081519050620001138162000218565b92915050565b6000815190506200012a8162000232565b92915050565b60008151905062000141816200024c565b92915050565b60008060006060848603121562000163576200016262000213565b5b6000620001738682870162000102565b9350506020620001868682870162000119565b9250506040620001998682870162000130565b9150509250925092565b6000620001b082620001f3565b9050919050565b6000620001c482620001a3565b9050919050565b6000620001d882620001a3565b9050919050565b6000620001ec82620001a3565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b6200022381620001b7565b81146200022f57600080fd5b50565b6200023d81620001cb565b81146200024957600080fd5b50565b6200025781620001df565b81146200026357600080fd5b50565b610e2b80620002766000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806301ffc9a71461006757806313b16a691461009757806355cfaed9146100b3578063bc197c81146100cf578063ea667fd0146100ff578063f23a6e611461011b575b600080fd5b610081600480360381019061007c919061090b565b61014b565b60405161008e9190610c7d565b60405180910390f35b6100b160048036038101906100ac91906109c5565b6101c5565b005b6100cd60048036038101906100c891906109c5565b6102f4565b005b6100e960048036038101906100e49190610768565b610442565b6040516100f69190610c98565b60405180910390f35b61011960048036038101906101149190610938565b610473565b005b61013560048036038101906101309190610844565b6105a5565b6040516101429190610c98565b60405180910390f35b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806101be57506101bd826105d4565b5b9050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637ac2ff7b3087878787876040518763ffffffff1660e01b815260040161022a96959493929190610c1c565b600060405180830381600087803b15801561024457600080fd5b505af1158015610258573d6000803e3d6000fd5b50505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330886040518463ffffffff1660e01b81526004016102bb93929190610abd565b600060405180830381600087803b1580156102d557600080fd5b505af11580156102e9573d6000803e3d6000fd5b505050505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d505accf333088888888886040518863ffffffff1660e01b81526004016103599796959493929190610b4c565b600060405180830381600087803b15801561037357600080fd5b505af1158015610387573d6000803e3d6000fd5b5050505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330886040518463ffffffff1660e01b81526004016103e893929190610abd565b602060405180830381600087803b15801561040257600080fd5b505af1158015610416573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043a91906108de565b505050505050565b60007fbc197c819b3e337a6f9652dd10becd7eef83032af3b9d958d3d42f6694146621905098975050505050505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166348613c283330878787876040518763ffffffff1660e01b81526004016104d896959493929190610bbb565b600060405180830381600087803b1580156104f257600080fd5b505af1158015610506573d6000803e3d6000fd5b50505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f242432a333089896040518563ffffffff1660e01b815260040161056b9493929190610af4565b600060405180830381600087803b15801561058557600080fd5b505af1158015610599573d6000803e3d6000fd5b50505050505050505050565b60007ff23a6e612e1ff4830e658fe43f4e3cb4a5f8170bd5d9e69fb5d7a7fa9e4fdf9790509695505050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008135905061064d81610d6b565b92915050565b60008083601f84011261066957610668610d54565b5b8235905067ffffffffffffffff81111561068657610685610d4f565b5b6020830191508360208202830111156106a2576106a1610d59565b5b9250929050565b6000815190506106b881610d82565b92915050565b6000813590506106cd81610d99565b92915050565b6000813590506106e281610db0565b92915050565b60008083601f8401126106fe576106fd610d54565b5b8235905067ffffffffffffffff81111561071b5761071a610d4f565b5b60208301915083600182028301111561073757610736610d59565b5b9250929050565b60008135905061074d81610dc7565b92915050565b60008135905061076281610dde565b92915050565b60008060008060008060008060a0898b03121561078857610787610d63565b5b60006107968b828c0161063e565b98505060206107a78b828c0161063e565b975050604089013567ffffffffffffffff8111156107c8576107c7610d5e565b5b6107d48b828c01610653565b9650965050606089013567ffffffffffffffff8111156107f7576107f6610d5e565b5b6108038b828c01610653565b9450945050608089013567ffffffffffffffff81111561082657610825610d5e565b5b6108328b828c016106e8565b92509250509295985092959890939650565b60008060008060008060a0878903121561086157610860610d63565b5b600061086f89828a0161063e565b965050602061088089828a0161063e565b955050604061089189828a0161073e565b94505060606108a289828a0161073e565b935050608087013567ffffffffffffffff8111156108c3576108c2610d5e565b5b6108cf89828a016106e8565b92509250509295509295509295565b6000602082840312156108f4576108f3610d63565b5b6000610902848285016106a9565b91505092915050565b60006020828403121561092157610920610d63565b5b600061092f848285016106d3565b91505092915050565b60008060008060008060c0878903121561095557610954610d63565b5b600061096389828a0161073e565b965050602061097489828a0161073e565b955050604061098589828a0161073e565b945050606061099689828a01610753565b93505060806109a789828a016106be565b92505060a06109b889828a016106be565b9150509295509295509295565b600080600080600060a086880312156109e1576109e0610d63565b5b60006109ef8882890161073e565b9550506020610a008882890161073e565b9450506040610a1188828901610753565b9350506060610a22888289016106be565b9250506080610a33888289016106be565b9150509295509295909350565b610a4981610cc4565b82525050565b610a5881610cd6565b82525050565b610a6781610ce2565b82525050565b610a7681610cec565b82525050565b6000610a89600083610cb3565b9150610a9482610d68565b600082019050919050565b610aa881610d38565b82525050565b610ab781610d42565b82525050565b6000606082019050610ad26000830186610a40565b610adf6020830185610a40565b610aec6040830184610a9f565b949350505050565b600060a082019050610b096000830187610a40565b610b166020830186610a40565b610b236040830185610a9f565b610b306060830184610a9f565b8181036080830152610b4181610a7c565b905095945050505050565b600060e082019050610b61600083018a610a40565b610b6e6020830189610a40565b610b7b6040830188610a9f565b610b886060830187610a9f565b610b956080830186610aae565b610ba260a0830185610a5e565b610baf60c0830184610a5e565b98975050505050505050565b600060c082019050610bd06000830189610a40565b610bdd6020830188610a40565b610bea6040830187610a9f565b610bf76060830186610aae565b610c046080830185610a5e565b610c1160a0830184610a5e565b979650505050505050565b600060c082019050610c316000830189610a40565b610c3e6020830188610a9f565b610c4b6040830187610a9f565b610c586060830186610aae565b610c656080830185610a5e565b610c7260a0830184610a5e565b979650505050505050565b6000602082019050610c926000830184610a4f565b92915050565b6000602082019050610cad6000830184610a6d565b92915050565b600082825260208201905092915050565b6000610ccf82610d18565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b50565b610d7481610cc4565b8114610d7f57600080fd5b50565b610d8b81610cd6565b8114610d9657600080fd5b50565b610da281610ce2565b8114610dad57600080fd5b50565b610db981610cec565b8114610dc457600080fd5b50565b610dd081610d38565b8114610ddb57600080fd5b50565b610de781610d42565b8114610df257600080fd5b5056fea2646970667358221220628435cd905d399ba0bff7302a3f0d4c86569fd8ad7b7269d88b00fd4f55031364736f6c63430008050033";
//# sourceMappingURL=PermitTest__factory.js.map