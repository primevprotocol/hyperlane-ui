import { WarpTokenConfig } from '../features/tokens/types';

export const tokenList: WarpTokenConfig = [
  // Config copied from warp-ui-token-list.json in deploy artifacts
  {
    chainId: 5,
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    type: "native",
    hypNativeAddress: "0xd1cC3B6b71C298589d7Cd388eFcD57b0101d228B",
    logoURI: '/logos/weth.png',
  },
];
