import Decimal from "decimal.js";

export interface TickQuote {
    currencyPair: string;
    tenor: string;
    bid: Decimal;
    ask: Decimal;
    serverTimestamp: number
}
