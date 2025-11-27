import { useRef, useCallback } from "react";
import Decimal from "decimal.js";
import { TickQuote } from "../types/TickQuote";


type UpdateTileFunction = (
  currencyPair: string,
  tenor: string,
  bid: Decimal,
  ask: Decimal,
  serverTimestamp: number  
) => void;

const DEFAULT_TICKS_PER_SECOND = 4;
const DEFAULT_THROTTLE_MS = 1000/DEFAULT_TICKS_PER_SECOND;

export const useThrottledTileUpdates = (    
    updateTile: UpdateTileFunction) => {
  const throttleTimers = useRef(new Map<string, NodeJS.Timeout>());
  const pendingUpdates = useRef<
    Map<string, { bid: Decimal; ask: Decimal; serverTimestamp: number; }>
  >(new Map());

  const throttledUpdate = useCallback(
    ({currencyPair, tenor, bid, ask, serverTimestamp}: TickQuote) => {
      const key = `${currencyPair}-${tenor}`;      
      pendingUpdates.current.set(key, { bid, ask, serverTimestamp});

      if (!throttleTimers.current.has(key)) {
        const timer = setTimeout(() => {
          const update = pendingUpdates.current.get(key);
          if (update) {
            updateTile(currencyPair, tenor, update.bid, update.ask, update.serverTimestamp);
            pendingUpdates.current.delete(key);
          }
          throttleTimers.current.delete(key);
        }, DEFAULT_THROTTLE_MS);

        throttleTimers.current.set(key, timer);
      }
    },
    [updateTile]
  );

  return { throttledUpdate };
};