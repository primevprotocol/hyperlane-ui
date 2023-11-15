import { ChainMap, ChainMetadata } from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';

// A map of chain names to ChainMetadata
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  // ----------- Your chains here -----------------
  mevcommitsettlement: {
    name: 'mevcommitsettlement',
    protocol: ProtocolType.Ethereum,
    chainId: 17864,
    rpcUrls: [
      {
        http: 'http://34.215.163.180:8545',
        webSocket: 'ws://34.215.163.180:8546',
      },
    ],
  },
};
