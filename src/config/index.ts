

import { sepolia, cronos } from "viem/chains"

//For test 0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9

export interface IToken {
  name: string;
  isNative: boolean;
  address: string;
  decimal: number;
}

// For Sepolia
export const TOKEN_LIST = [
  { name: "CRO", isNative: true, address: "", decimal: 18 },
  { name: "WCRO", isNative: false, address: "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23", decimal: 18 },
  { name: "ARY", isNative: false, address: "0x41bc026dABe978bc2FAfeA1850456511ca4B01bc", decimal: 18 },
  { name: "USDC", isNative: false, address: "0xc21223249CA28397B4B6541dfFaEcC539BfF0c59", decimal: 6 },
  { name: "USDT", isNative: false, address: "0x66e428c3f67a68878562e79A0234c1F83c208770", decimal: 6 },
  { name: "MERY", isNative: false, address: "0x3b41B27E74Dd366CE27cB389dc7877D4e1516d4d", decimal: 18 },
  { name: "CAW", isNative: false, address: "0xccccccccdbec186dc426f8b5628af94737df0e60", decimal: 18 },
  { name: "TURTLE", isNative: false, address: "0x8C9E2bEf2962CE302ef578113eebEc62920B7e57", decimal: 18 },
  { name: "Croginal", isNative: false, address: "0xd50f5739a09f36c6f97cc9a4849c5462ba6129a3", decimal: 18 },
  { name: "MOON", isNative: false, address: "0x46e2b5423f6ff46a8a35861ec9daff26af77ab9a", decimal: 18 },
  { name: "FFTB", isNative: false, address: "0xd677944df705924af369d2fccf4a989f343dbcdf", decimal: 18 },
  { name: "PUUSH", isNative: false, address: "0x288898a6057d2d4989c533e96cb3bc30843c91d7", decimal: 18 },
  { name: "RTRD", isNative: false, address: "0xea292deb7ac933f61580eee269f7ba3c2f23f5a0", decimal: 18 },
  { name: "GRNSTX V2", isNative: false, address: "0x16a19ae876272fb9cc8df78a116c63cc1562270b", decimal: 18 },
  { name: "BOBZ", isNative: false, address: "0xBCfE5afF53fb269969725c12e5b9C3ab18B3B66c", decimal: 18 },
  { name: "NEURO", isNative: false, address: "0xCFE223d06b86568C24ffd17E8ac748DbAC096b3b", decimal: 18 },
  { name: "CORGIAI", isNative: false, address: "0x6b431B8a964BFcf28191b07c91189fF4403957D0", decimal: 18 },
  { name: "PIQ", isNative: false, address: "0xfdEA7ab3cE8cd76d6bf8D430BEB9E0cb602AD392", decimal: 18 },
  { name: "RETRIBUTION", isNative: false, address: "0x6ad9893eB92F4916f703f660410a454f6Acc3FE1", decimal: 18 }
]


export const WCRO = { name: "WCRO", isNative: false, address: "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23", decimal: 18 }
 
export const VVS2Router = "0x145863Eb42Cf62847A6Ca784e6416C1682b1b2Ae" //mainnet
// export const VVS2Router = "0xC532a74256D3Db42D0Bf7a0400fEFDbad7694008" //sepolia

// export const CONTRACT_ADDRESS = "0x17B094Db1195411872a973fc1482746E6F7Ec976" //will be change
// export const CONTRACT_ADDRESS = "0xfb34116ed889ae6487e1abe872b9e87ce70240ad" //will be change
// export const CONTRACT_ADDRESS = "0xc98DF1C5E808789001103fE641e1770714fF2639" //will be change
// export const CONTRACT_ADDRESS = "0x1950d273589DBf9A3d15EED4aD3c26DB819E3FE0" //will be change
// export const CONTRACT_ADDRESS = "0x694f512adf29d61b7aea1d282a670a5e2bef5b31" //will be change
// export const CONTRACT_ADDRESS = "0xd59c64b327DB1013c7c325876d4772df258413Fe" //will be changes
export const CONTRACT_ADDRESS = "0x94709408bee9c170d11e171356b88ced264c96a6" //will be change

export const FACTORY = "0x3B44B2a187a7b3824131F8db5a74194D0a42Fc15";
// export const FACTORY = "0x7E0987E5b3a30e3f2828572Bb659A548460a3003";

export const nativeCoinId = 0
export const nativeCoin = TOKEN_LIST[nativeCoinId]
export const currentChain = cronos;

export const fee = 0.3; // 100.

export const cronosConfig = {
  chainId: 25,
  chainName: 'Cronos',
  network: 'cronos',
  nativeCurrency: {
    decimals: 18,
    name: 'Cronos',
    symbol: 'CRO',
  },
  rpcUrls: [
    'https://cronos.blockpi.network/v1/rpc/public'
  ],
  blockExplorerUrls: [
    'https://cronoscan.com'
  ]
}
