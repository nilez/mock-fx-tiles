import Decimal from "decimal.js";

import { TileInfo } from "./types/TileInfo";

export const tiles: TileInfo[] = [
  { currencyPair: "EUR/USD", tenor: "SPOT", amount: new Decimal(10000), maxTicksPerSecond: 20 },
  { currencyPair: "GBP/USD", tenor: "SPOT", amount: new Decimal(15000), maxTicksPerSecond: 15 },
  { currencyPair: "USD/JPY", tenor: "SPOT", amount: new Decimal(20000), maxTicksPerSecond: 10 },
  { currencyPair: "AUD/USD", tenor: "1M",   amount: new Decimal(25000), maxTicksPerSecond: 8  },
  { currencyPair: "USD/CAD", tenor: "3M",   amount: new Decimal(30000), maxTicksPerSecond: 6  },
  { currencyPair: "NZD/USD", tenor: "SPOT", amount: new Decimal(12000), maxTicksPerSecond: 4  }
];
