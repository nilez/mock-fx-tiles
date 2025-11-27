import Decimal from "decimal.js";

export interface TileInfo {  
  currencyPair: string;
  tenor: string;
  amount: Decimal;
  maxTicksPerSecond: number;          // throttle target
}