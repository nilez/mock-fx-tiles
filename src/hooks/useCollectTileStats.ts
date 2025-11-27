import { useEffect, useRef, useState } from "react";
import { TileStat } from "../types/TileStat";
import { TickQuote } from "../types/TickQuote";

const StatCalcDucationMs = 2000; // 2 seconds;

export const useCollectTileStats = (tilesStats: Map<string, TileStat>) =>{

    const bufferRef = useRef<TickQuote[]>([]);
    const [stats, setStats] = useState(tilesStats);

    useEffect(() => {
        const interval = setInterval(() => {
            const items = bufferRef.current;

            if (items.length === 0) return;
            
            // Calculate ticks per second for each tile            
            const ticksPerTile = new Map<string, number>();
            const maxLatencyPerTile = new Map<string, number>();
            
            items.forEach(tick => {
                const key = `${tick.currencyPair}-${tick.tenor}`;
                ticksPerTile.set(key, (ticksPerTile.get(key) || 0) + 1);
                const latency = Date.now() - tick.serverTimestamp;
                const currentMax = maxLatencyPerTile.get(key) || 0;
                maxLatencyPerTile.set(key, Math.max(currentMax, latency));
            });
            
            // Update stats for each tile
            const updatedStats = new Map(tilesStats);
            ticksPerTile.forEach((count, key) => {
                const stat = updatedStats.get(key);
                if (stat) {
                    stat.serverTicksPerSecond = (count / StatCalcDucationMs) * 1000;
                    stat.latency = maxLatencyPerTile.get(key) || 0;
                }
            });
            
            setStats(updatedStats);

            bufferRef.current = []; // clear buffer for next window
        }, 2000);

        return () => clearInterval(interval);
    }, [tilesStats]);

    return (tickQuote: TickQuote) => {
        bufferRef.current.push(tickQuote);
    };
}