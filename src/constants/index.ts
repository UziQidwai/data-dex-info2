import { BigNumber } from '@ethersproject/bignumber'
import { Connector } from '@web3-react/types'
import ms from 'ms'

import { SupportedNetwork } from './networks'

export const MAX_UINT128 = BigNumber.from(2).pow(128).sub(1)

export const MATIC_ADDRESS = '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
export const CELO_ADDRESS = '0x471EcE3750Da237f93B8E339c536989b8978a438'

const WETH_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
const ARBITRUM_WETH_ADDRESS = '0x82af49447d8a07e3bd95bd0d56f35241523fbab1'

export const WETH_ADDRESSES = [WETH_ADDRESS, ARBITRUM_WETH_ADDRESS]

export const TOKEN_HIDE: { [key: string]: string[] } = {
  [SupportedNetwork.ETHEREUM]: [
    '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
    '0x7dfb72a2aad08c937706f21421b15bfc34cba9ca',
    '0x12b32f10a499bf40db334efe04226cca00bf2d9b',
    '0x160de4468586b6b2f8a92feb0c260fc6cfc743b1',
  ],
  [SupportedNetwork.POLYGON]: ['0x8d52c2d70a7c28a9daac2ff12ad9bfbf041cd318'],
  [SupportedNetwork.ARBITRUM]: [],
  [SupportedNetwork.OPTIMISM]: [],
  [SupportedNetwork.CELO]: [],
  [SupportedNetwork.BNB]: [],
  [SupportedNetwork.AVALANCHE]: [],
  [SupportedNetwork.BASE]: [],
  [SupportedNetwork.VANA]: [
    '0xcea086a4a08ece04bd060c7c0ab67033b7adc088', //tVANA
    '0xc7623faa9e41daaf854f07b5b45e70cf1d68583e', //tUSDT
    '0x1fe0ebd7b53fc434ea0a69074406503f9ab0e2fc', //tUSDC
    '0x997772505266ea0089d4877cfb381e008e5c55b6',
    '0xdab91c6f75dd29cf4637fb6319afc1f1bc74af1b',
    '0xbd2d7c728b224961fdb25ccf2a67eb3c25f5ec52',
  ],
  [SupportedNetwork.VANA_MOKSHA]: [],
}

export const TOKEN_ALLOW_LIST: { [key: string]: string[] } = {
  [SupportedNetwork.ETHEREUM]: [],
  [SupportedNetwork.POLYGON]: [],
  [SupportedNetwork.ARBITRUM]: [],
  [SupportedNetwork.OPTIMISM]: [],
  [SupportedNetwork.CELO]: [],
  [SupportedNetwork.BNB]: [],
  [SupportedNetwork.AVALANCHE]: [],
  [SupportedNetwork.BASE]: [],
  [SupportedNetwork.VANA]: [
    '0xf1815bd50389c46847f0bda824ec8da914045d14', //USDC.e
    '0x2f6f07cdcf3588944bf4c42ac74ff24bf56e7590', //WETH
    '0x00eddd9621fb08436d0331c149d1690909a5906d', //WVANA
    '0xf23e379b2fd945f8c0a4f410cb6ef9398bf022d6', //KLEO (KDAT)
    '0x84f8dc1ada73298281387e62616470f3dd5df2f6', //SIXGPT (SIX)
    '0x0cc1bc0131dd9782e65ca0319cd3a60eba3a932d', //DFUSION (VFSN)
    '0xeb68ef0550a5532447da0fea4f0ed9f804803b8b', //VOLARA (VOL)
    '0x1becf440e8bcfc78cdfd45f29f7b1dc04df7777c', //Finquarium (FIN)
    '0xf8f97a79a3fa77104fab4814e3ed93899777de0d', //Datapig (GDP)
    '0xd561ce710ff7ce7d93fd7b1f0ff1b1989fe7256e', //MindDAO
    '0xc7a473434290671cffea503ca4b7b160f929c1ec', //DNA DATADAO
    '0x579c80e02ef43345ce3a4c833c49da9730bd0f3f', //Prime Insights
    '0xfb41a4a2d2aff36d42b7388ad666dda43f6c923f', //vCHARS AI
    '0x202f120c83dcfce04a1723ae7ec7cdbd2ed73302', //WWW
    '0x17ba7a5603fdd6f07a1da23c843e16e60987c7f7', // BOPS
  ],
  [SupportedNetwork.VANA_MOKSHA]: [
    '0xb39a50b5806039c82932bb96cefbcbc61231045c', // USDC
    '0x01079c78199e05d44bbff9e50dbdf765489f16e1', // USDT
    '0xbccc4b4c6530f82fe309c5e845e50b5e9c89f2ad', // VANA
    '0xb18a68588e4551b880011af27df5347b99b444c2', // VOLARA
    '0xf5a960f8f0d04aaedc44f2619977a2b7de9cef09', // DNA
    '0xf379a80f0585e57fd5aebb29d8cafac60f8f54c3', // WDUDE
  ],
}

export const POOL_HIDE: { [key: string]: string[] } = {
  [SupportedNetwork.ETHEREUM]: [
    '0x86d257cdb7bc9c0df10e84c8709697f92770b335',
    '0xf8dbd52488978a79dfe6ffbd81a01fc5948bf9ee',
    '0x8fe8d9bb8eeba3ed688069c3d6b556c9ca258248',
    '0xa850478adaace4c08fc61de44d8cf3b64f359bec',
    '0x277667eb3e34f134adf870be9550e9f323d0dc24',
    '0x8c0411f2ad5470a66cb2e9c64536cfb8dcd54d51',
    '0x055284a4ca6532ecc219ac06b577d540c686669d',
  ],
  [SupportedNetwork.POLYGON]: ['0x5f616541c801e2b9556027076b730e0197974f6a'],
  [SupportedNetwork.ARBITRUM]: [],
  [SupportedNetwork.OPTIMISM]: [],
  [SupportedNetwork.CELO]: [],
  [SupportedNetwork.BNB]: [],
  [SupportedNetwork.AVALANCHE]: [],
  [SupportedNetwork.BASE]: [],
  [SupportedNetwork.VANA]: [
    '0xeee97e1c64d4c733eddc476bca7166f042628613', //tVANA-tUSDC
    '0xcae4cf523391d96c6c4626de9bee64a1fb9e09ac', //tUSDC-tUSDT
    '0xfb864d98b37a0a22b23b20489a86ada5fe9ed97b', //tVANA-USDC.e
    '0x17e2602541f653a3ef10b17bbe62a209fbef11c5', //WVANA-tUSDC
    '0xd1ac880364c136f31ec12b7b430d536cf52f33ac',
    '0x0fad3e65482d83665baec23914aad5b967d8a509',
    '0x2aea543b0931f088e939d27937c648a8767587c5',
  ],
  [SupportedNetwork.VANA_MOKSHA]: [],
}

export const POOL_ALLOW_LIST: { [key: string]: string[] } = {
  [SupportedNetwork.ETHEREUM]: [],
  [SupportedNetwork.POLYGON]: [],
  [SupportedNetwork.ARBITRUM]: [],
  [SupportedNetwork.OPTIMISM]: [],
  [SupportedNetwork.CELO]: [],
  [SupportedNetwork.BNB]: [],
  [SupportedNetwork.AVALANCHE]: [],
  [SupportedNetwork.BASE]: [],
  [SupportedNetwork.VANA]: [
    '0x850e454ddebf9f61ef5a86a032c857e0e47c4fa9',
    '0xe21b165bcd93251b71db4a55e4e8f234b3391d74',
    '0x39b01BcfB9C2B3B7cA88d298E84b67D5300243E3', //WETH-USDC.e
    '0x443d994a345c95df081c3cc45320d8b099b9f50c', //KLEO (KDAT)
    '0x2c856dc8aae173be498471b948ea4eea1702afed', //SIXGPT (SIX)
    '0x710344a5c8d60959efde9da3e359b1a87872a766', //DFUSION (VFSN)
    '0x5f77aac938ef1cda2e0e4ce11725eeccef4981c8', //VOLARA (VOL)
    '0xe5e953b7b9c034d35393dce58092df9d74eb1c3c', //Finquarium (FIN)
    '0x960f741ecd17768fd91c386099ae7be1bfcb56f3', //Datapig (GDP)
    '0xfbdd88936e0ae5ad810df7f8ca6c38114fa27bf6', //MindDAO
    '0x6489d08f29cce32762554e42b9ab0d067d7b58f2', //DNA DATADAO
    '0xb6f95e5ed3bde7bc4bd2c282563b6787edd6ef85', //Prime Insights
    '0xab70e2787b1171d244f1e02a58bd66414f03f63c', //vCHARS AI
    '0xac51287b6cf7fe5bacbf4130406cce6e256b835b', // WWW
    '0xd71289724d6cf091fb2d64999e9384e75515b401', // BOPS
  ],
  [SupportedNetwork.VANA_MOKSHA]: [],
}

export const START_BLOCKS: { [key: string]: number } = {
  [SupportedNetwork.ETHEREUM]: 14292820,
  [SupportedNetwork.POLYGON]: 25459720,
  [SupportedNetwork.ARBITRUM]: 175,
  [SupportedNetwork.OPTIMISM]: 10028767,
  [SupportedNetwork.CELO]: 13916355,
  [SupportedNetwork.BNB]: 26324014,
  [SupportedNetwork.AVALANCHE]: 31422450,
  [SupportedNetwork.BASE]: 1371680,
  [SupportedNetwork.VANA]: 763744,
  [SupportedNetwork.VANA_MOKSHA]: 596576,
}

export interface WalletInfo {
  connector?: Connector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const AVERAGE_L1_BLOCK_TIME = ms(`12s`)

export const NetworkContextName = 'NETWORK'

// SDN OFAC addresses
export const BLOCKED_ADDRESSES: string[] = [
  '0x7F367cC41522cE07553e823bf3be79A889DEbe1B',
  '0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b',
  '0x901bb9583b24D97e995513C6778dc6888AB6870e',
  '0xA7e5d5A720f06526557c513402f2e6B5fA20b008',
]
