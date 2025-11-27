import FxTile from "./components/FxTile/FxTile";
import {tiles as initialTiles} from "./tiles-config";
import { useTileMap } from "./hooks/useTileMap";
import { useFxTilesState } from "./hooks/useFxTilesState";
import { useThrottledTileUpdates } from "./hooks/useThrottledTileUpdates";
import { useServerTickRate } from "./hooks/useServerTickRate";
import { useFxPricesStream } from "./hooks/useFxPricesStream";
import "./FxTiles.css";
import { useCallback } from "react";
import { TickQuote } from "./types/TickQuote";

export default function FxTiles() {
  const tileMap = useTileMap(initialTiles);
  const { tiles, updateTile, updateServerTickRate } = useFxTilesState(initialTiles);

  const { throttledUpdate } = useThrottledTileUpdates(tileMap, updateTile);
  const { registerTick } = useServerTickRate(updateServerTickRate);

  const handlePriceTick = useCallback((tickQuote: TickQuote) => {
    const key = `${tickQuote.currencyPair}-${tickQuote.tenor}`;
    registerTick(key);
    throttledUpdate(tickQuote);
  }, [registerTick, throttledUpdate]);

  useFxPricesStream(handlePriceTick);

  return (
    <div className="fx-tiles-container">
      <h2>FX Tiles</h2>
      <div className="fx-tiles-grid">
        {tiles.map(tile => (
          <FxTile
            key={tile.id}
            currencyPair={tile.currencyPair}
            tenor={tile.tenor}
            amount={tile.amount}
            bid={tile.bid}
            ask={tile.ask}
            ticksPerSecond={tile.ticksPerSecond}
            serverTicksPerSecond={tile.serverTicksPerSecond}
            latencyMs={tile.latency}
          />
        ))}
      </div>
    </div>
  );
}