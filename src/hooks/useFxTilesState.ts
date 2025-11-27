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
    serverTimestamp?: number    
  ) => {
    setTiles(prev =>
      prev.map(t =>
        t.currencyPair === currencyPair && t.tenor === tenor
          ? { ...t, bid, ask, serverTimestamp }
          : t
      )
    );
  }, []);  

  return { tiles, updateTile };
};