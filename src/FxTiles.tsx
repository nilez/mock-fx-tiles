import "./FxTiles.css";
import { tiles as tilesInfo } from "./tiles-config";
import { useFxTilesState } from "./hooks/useFxTilesState";
import FxTile from "./components/FxTile/FxTile";
import { useFxPricesStream } from "./hooks/useFxPricesStream";
import { useCallback } from "react";
import { TickQuote } from "./types/TickQuote";
import { useThrottledTileUpdates } from "./hooks/useThrottledTileUpdates";
import { TileData } from "./types/TileData ";

export default function FxTiles() {
    
    const tempTiles: TileData[] = tilesInfo.map(tile => ({
        currencyPair: tile.currencyPair,
        tenor: tile.tenor,
        amount: tile.amount
    }));
                    
    const { tiles, updateTile } = useFxTilesState(tempTiles);

    const { throttledUpdate } = useThrottledTileUpdates(updateTile);

    const handlePriceTick = useCallback((tickQuote: TickQuote) => {
        throttledUpdate(tickQuote);
      }, [throttledUpdate]);

    useFxPricesStream(handlePriceTick);

    return (
        <div className="fx-tiles-container">
            <h2>FX Tiles </h2>
            <div className="fx-tiles-grid">
                {tiles.map(t => (                    
                    <FxTile
                        key={`${t.currencyPair}-${t.tenor}`}
                        currencyPair={t.currencyPair}
                        tenor={t.tenor}
                        amount={t.amount} 
                        bid={t.bid}
                        ask={t.ask}
                         />
                ))}
            </div>            
        </div>
    );
}
