const INFURA_ID = "5a8a61181115416ebffd2ec0fef74592";

export default {

    chainId: 42,
    infuraId: INFURA_ID,

    // Kovan
    endpoint: `wss://kovan.infura.io/ws/v3/${INFURA_ID}`,

    // Mainnet
    //endpoint: `wss://mainnet.infura.io/ws/v3/${INFURA_ID}`,

    contracts: {
        // Ropsten
        /*LPToken: "0xF43df1bC8DD096F5f9dF1fB4d676D2ab38592020",
        MaidCoin: "0x617E3a5eC6945ACBe51A2E85B347a227e53335Cc",
        TheMaster: "0xDF414984FF66Fb89F704db3dA14DE79e54415111",
        Maid: "0x8a39182b6FC57aa3A09099D698161e79623c1232",
        MasterCoin: "0x318866381Dbd3080bE0D9eD07E9b80D3c368eB39",
        NursePart: "0x21CbDD0165d144bbFBCf3c642E6f7a91E0A8CE84",
        NurseRaid: "0xb06211F098E7103974c1A80C516eEf3D30E5Aec5",
        CloneNurse: "0x5598dCb63c392E256cd67f50A45BB56f1C5C9619",*/

        // Kovan
        LPToken: "0x56ac87553c4dBcd877cA7E4fba54959f091CaEdE",
        MaidCoin: "0xc41200cE8E1CcEDA2d79E82A59A8283275aeb61B",
        TheMaster: "0x6a42C09EEC7D6109e0d69610e72f2D8C1D304C6B",
        Maid: "0xAb258c83d84DBC22CE9Ed546232FC21D91F0E756",
        MasterCoin: "0xE6b68C85e68e0c8dF4c1a66a2EBb63C453FC8364",
        NursePart: "0x1aF3327A639A322f2e6B6431572b7cf33A55c50A",
        NurseRaid: "0x7ad589F9bFBBa1F25e273a0eD9B292B74A0d5123",
        CloneNurse: "0x9F84706B63D1B3A03f8006c2d2569E6d7C6A8414",
    },
};
