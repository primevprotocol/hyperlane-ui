import { WarpTokenConfig } from '../features/tokens/types';

export const tokenList: WarpTokenConfig = [
  // Example collateral token for an EVM chain
  {
    type: 'collateral',
    chainId: 17864,
    address: '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6', // hopefull this is the default
    hypCollateralAddress: '0x40bA2B4F9cCC1fbb3f27c4D7d7449439187e6A34',
    name: 'commitEther',
    symbol: 'cETH',
    decimals: 18,
    logoURI: '/logos/weth.png', // See public/logos/
  },
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
