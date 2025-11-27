import { useEffect, useRef } from "react";
import { fx } from "../generated/MockFxPricingService";
import Decimal from "decimal.js";
import { TickQuote } from "../types/TickQuote";
import { SERVER_WS_DATA_FORMAT, SERVER_WS_URL } from "../server-config";

export const useFxPricesStream = (onPrice: (tick: TickQuote) => void) => {
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket(SERVER_WS_URL);
    ws.current.binaryType = SERVER_WS_DATA_FORMAT;

    ws.current.onmessage = (event) => {
      try {
        const bytes = new Uint8Array(event.data);
        const msg = fx.streaming.Price.decode(bytes);

        const { currencyPair, tenor, quotes, timestamp } = msg;
        if (!quotes) return;

        let bid = null;
        let ask = null;

        for (const q of quotes) {
          if (q.side === fx.streaming.Side.BID) bid = new Decimal(q.price ?? 0);
          if (q.side === fx.streaming.Side.ASK) ask = new Decimal(q.price ?? 0);
        }

        if (bid && ask) {
          onPrice({
            currencyPair,
            tenor,
            bid,
            ask,
            serverTimestamp: Number(timestamp)
          });
        }
      } catch (err) {
        console.error("Protobuf parse error", err);
      }
    };

    return () => ws.current?.close();
  }, [onPrice]);
  return {};
};
