import { WarpTokenConfig } from '../features/tokens/types';

export const tokenList: WarpTokenConfig = [
  // Config copied from warp-ui-token-list.json in deploy artifacts
  {
    chainId: 11155111,
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    type: "native",
    hypNativeAddress: "0x2B84B6b8F4c0FbDf87814d7E428B1d65A769B96E",
    logoURI: '/logos/weth.png',
  },
];
