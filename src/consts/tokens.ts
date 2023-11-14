import { WarpTokenConfig } from '../features/tokens/types';

export const tokenList: WarpTokenConfig = [
  // Config copied from warp-ui-token-list.json in deploy artifacts
  {
    chainId: 5,
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    type: "native",
    hypNativeAddress: "0xB6916dBC3cffDC5057660734Dc798dc0efa3A11f",
    logoURI: '/logos/weth.png',
  },
];
