import Decimal from "decimal.js";

export interface TileData {  
  currencyPair: string;
  tenor: string;
  amount: Decimal;
  bid?: Decimal;
  ask?: Decimal;
}
