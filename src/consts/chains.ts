import { ChainMap, ChainMetadata } from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';

export const etherToken = { name: 'Ether', symbol: 'ETH', decimals: 18 };
export enum ExplorerFamily {
  Etherscan = 'etherscan',
  Blockscout = 'blockscout',
  Other = 'other',
}

// A map of chain names to ChainMetadata
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  // ----------- Your chains here -----------------
  mevcommitsettlement: {
    name: 'mevcommitsettlement',
    protocol: ProtocolType.Ethereum,
    chainId: 17864,
    rpcUrls: [
      {
        http: 'http://localhost:8545',
        webSocket: 'ws://localhost:8546',
      },
    ],
  },
  // Needed to define this with custom url to make frontend work
  sepolia: {
    chainId: 11155111,
    domainId: 11155111,
    name: 'sepolia',
    protocol: ProtocolType.Ethereum,
    displayName: 'Sepolia',
    nativeToken: etherToken,
    rpcUrls: [
      {
        http: `https://ethereum-sepolia.publicnode.com`,
      },
      { 
        http: `https://1rpc.io/sepolia`,
      },
    ],
    blockExplorers: [
      {
        name: 'Etherscan',
        url: 'https://sepolia.etherscan.io',
        apiUrl: 'https://api-sepolia.etherscan.io/api',
        family: ExplorerFamily.Etherscan,
      },
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 2,
      estimateBlockTime: 13,
    },
    isTestnet: true,
  },
};
