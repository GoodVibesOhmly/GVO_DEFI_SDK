import WethPriceOracleAbi from "./abi/WethPriceOracle.json";
import UsdcPriceOracleAbi from "./abi/UsdcPriceOracle.json";
import DaiPriceOracleAbi from "./abi/DaiPriceOracle.json";

import ExpiryAbi from "./abi/Expiry.json";
import ExpiryV2Abi from "./abi/ExpiryV2.json";

import AdminImplAbi from "./abi/AdminImpl.json";
import OperationImplAbi from "./abi/OperationImpl.json";

import LimitOrdersAbi from "./abi/LimitOrders.json";
import StopLimitOrdersAbi from "./abi/StopLimitOrders.json";
import CanonicalOrdersAbi from "./abi/CanonicalOrders.json";

import RefunderAbi from "./abi/Refunder.json";

const addresses = {
  mainnet: {
    WethPriceOracle: {
      abi: WethPriceOracleAbi,
      address: "0xf61AE328463CD997C7b58e7045CdC613e1cFdb69",
    },
    UsdcPriceOracle: {
      abi: UsdcPriceOracleAbi,
      address: "0x52f1c952A48a4588f9ae615d38cfdbf8dF036e60",
    },
    DaiPriceOracle: {
      abi: DaiPriceOracleAbi,
      address: "0x0fBd14718d8FAB8f9f40Ee5c5612b1F0717100A2",
    },
    Expiry: {
      abi: ExpiryAbi,
      address: "0x0ECE224FBC24D40B446c6a94a142dc41fAe76f2d",
    },
    ExpiryV2: {
      abi: ExpiryV2Abi,
      address: "0x739A1DF6725657f6a16dC2d5519DC36FD7911A12",
    },
    AdminImpl: {
      abi: AdminImplAbi,
      address: "0x8a6629fEba4196E0A61B8E8C94D4905e525bc055",
    },
    OperationImpl: {
      abi: OperationImplAbi,
      address: "0x56E7d4520ABFECf10b38368b00723d9BD3c21ee1",
    },
    LimitOrders: {
      abi: LimitOrdersAbi,
      address: "0xDEf136D9884528e1EB302f39457af0E4d3AD24EB",
    },
    StopLimitOrders: {
      abi: StopLimitOrdersAbi,
      address: "0xbFb635e8c6689ac3874aD9A60FaB1c29270f1710",
    },
    CanonicalOrders: {
      abi: CanonicalOrdersAbi,
      address: "0xCd81398895bEa7AD9EFF273aeFFc41A9d83B4dAD",
    },
    Refunder: {
      abi: RefunderAbi,
      address: "0x7454dF5d0758D4E7A538c3aCF4841FA9137F0f74",
    },

    PerpetualProxy: {
      "PBTC-USDC": "0x07aBe965500A49370D331eCD613c7AC47dD6e547",
      "PLINK-USDC": "0x1c50c582c7066049C560Bca20416b1d9E0dfb003",
      "WETH-PUSD": "0x09403FD14510F8196F7879eF514827CD76960B5d"
    },
    PerpetualV1: {
      "PBTC-USDC": "0xE883b3efdaE637fC599b467478a23199778F2cCf",
      "PLINK-USDC": "0xE883b3efdaE637fC599b467478a23199778F2cCf",
      "WETH-PUSD": "0xE883b3efdaE637fC599b467478a23199778F2cCf",
    },
    P1FundingOracle: {
      "PBTC-USDC": "0x4525D2B71f7f018c9EBddFcD336852A85404e75B",
      "PLINK-USDC": "0x8B90515C7a99b7Edd97702c04d1E3666281De1B0",
    },
    P1InverseFundingOracle: "0x5DDC23dEE470AEc28D51721b4E3A25f9399166EC",
    P1MakerOracle: {
      "PBTC-USDC": "0x538038E526517680735568f9C5342c6E68bbDA12",
      "WETH-PUSD": "0x538038E526517680735568f9C5342c6E68bbDA12"
    },
    P1OracleInverter: {
      "WETH-PUSD": "0xcD37221C53b5208a2D7eabc7d5051B98D8030424",
    },
    P1ChainlinkOracle: {
      "PLINK-USDC": "0x78456DE31f5978C44E1595DD2F49AfD1B71fd377"
    },
    P1Orders: {
      "PBTC-USDC": "0x3ea6F88eC8F7b24Bb3Ad206fa80124210e8e28F3",
      "PLINK-USDC": "0xaC14B70adBf42bedE4E4c7Ef67E8CB618b0D4506"
    },
    P1InverseOrders: {
      "WETH-PUSD": "0x1d3ccceEE6d9f9c3b79ed5fAdD98E32B5d48b22E"
    },
    P1Deleveraging: {
      "PBTC-USDC": "0xa4e4A9ae84882BE5049E450A3500ba1CD012F0C5",
      "PLINK-USDC": "0x5f428e427096D5085D8d95D64d90f3e7c13C92Fb",
      "WETH-PUSD": "0xb9689e3F25c16173a552a7ac0dD5c1F6D47FCC88"
    },
    P1Liquidation: {
      "PBTC-USDC": "0x9b1289dd794F10AF38A3117fE933836D685f7339",
      "PLINK-USDC": "0xEc4870B8Dd7979bfc7c5E6220893B3A5dD646F0C",
      "WETH-PUSD": "0x05f370CA0B6c156845f73A9115F35edCdE052803"
    },
    P1LiquidatorProxy: {
      "PBTC-USDC": "0xA179038Ae1534E4492164BA38ac809e29770ca5F",
      "PLINK-USDC": "0xfe66fB327CbECe4697DC9f9ef091B2f8710775b7",
      "WETH-PUSD": "0xD47743b863039DFF52B4d836426894a9b012310d",
      P1CurrencyConverterProxy: {
        "PBTC-USDC": "0xA0d885316Be23dE8bB19E7C53F6d483279E3467D",
        "PLINK-USDC": "0xA0d885316Be23dE8bB19E7C53F6d483279E3467D",
        "WETH-PUSD": "0xA0d885316Be23dE8bB19E7C53F6d483279E3467D"
      },
      P1WethProxy: {
        "WETH-PUSD": "0x17ac4cC32696987CEa1737343188716b1D827E7B"
      },
      P1MirrorOracleETHUSD: {
        "PBTC-USDC": "0x29a199a49aF8d657C110418C2b0D2F932b025dE7",
        "PLINK-USDC": "0x29a199a49aF8d657C110418C2b0D2F932b025dE7",
        "WETH-PUSD": "0x29a199a49aF8d657C110418C2b0D2F932b025dE7"
      }
    }
  }
};
export default addresses;
