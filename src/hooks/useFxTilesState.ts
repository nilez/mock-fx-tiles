import { useState, useCallback } from "react";
import { TileData } from "../types/TileData ";
import Decimal from "decimal.js";

export const useFxTilesState = (initialTiles: TileData[]) => {
  const [tiles, setTiles] = useState<TileData[]>(initialTiles);

  const updateTile = useCallback((
    currencyPair: string,
    tenor: string,
    bid: Decimal,
    ask: Decimal,
    serverTimestamp?: number,
    latency?: number
  ) => {
    setTiles(prev =>
      prev.map(t =>
        t.currencyPair === currencyPair && t.tenor === tenor
          ? { ...t, bid, ask, serverTimestamp, latency }
          : t
      )
    );
  }, []);

  const updateServerTickRate = useCallback((key: string, ticks: number) => {
    setTiles(prev => {
      let changed = false;
      const updated = prev.map(t => {
        if (`${t.currencyPair}-${t.tenor}` === key && t.serverTicksPerSecond !== ticks) {
          changed = true;
          return { ...t, serverTicksPerSecond: ticks };
        }
        return t;
      });
      return changed ? updated : prev;
    });
  }, []);

  return { tiles, updateTile, updateServerTickRate };
};