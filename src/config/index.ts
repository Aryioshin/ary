export const TOKEN_LIST = [
  { name: "ARY", address: "0x41bc026dABe978bc2FAfeA1850456511ca4B01bc" },
  { name: "CRO", address: "" },
  { name: "WCRO", address: "0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b" },
  { name: "USDC", address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" },
  { name: "USDT", address: "0xdAC17F958D2ee523a2206206994597C13D831ec7" }
]

export interface TOKEN {
  name: string,
  address: string,
}

export const cronosConfig = {
  chainId: "0x19",
  chainName: 'Cronos',
  network: 'cronos',
  nativeCurrency: {
    decimals: 18,
    name: 'Cronos',
    symbol: 'CRO',
  },
  rpcUrls: {
    public: { http: ['https://cronos.blockpi.network/v1/rpc/public'] },
    default: { http: ['https://cronos.blockpi.network/v1/rpc/public'] },
  },
  blockExplorerUrls: {
    etherscan: { name: 'CronoScan', url: 'https://cronoscan.com' },
    default: { name: 'CronoScan', url: 'https://cronoscan.com' },
  }
}