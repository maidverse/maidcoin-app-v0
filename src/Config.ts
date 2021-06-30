const INFURA_ID = "d1c581fe9b044b7a9cb430425a262046";

export default {

    chainId: 42,
    infuraId: INFURA_ID,
    rpc: `https://kovan.infura.io/v3/${INFURA_ID}`,

    contracts: {
        LPToken: "0x56ac87553c4dBcd877cA7E4fba54959f091CaEdE",

        MaidCoin: "0x1391dc7E528E5fEeD2a0602cB9c53dB59ece0a37",
        TheMaster: "0x731B69a9c8DFE1d8b9399Cf2421d34E25978C798",
        Maid: "0xFD298a1F884d00D228e8dEDC135b99d9d54747a5",
        MasterCoin: "0x38235A9DD7A51127dfC8731ED9fe621947Bc4D9B",
        NursePart: "0x70e490242ADbE2407869a8A9C9d65C53c4e5dC18",
        NurseRaid: "0xaFcFfC9409DcFe65e08704dB98172FDaF63368bB",
        CloneNurse: "0x7CC2bd6199c26eF40c20e6d79f39d397D726603a",
    },
};
