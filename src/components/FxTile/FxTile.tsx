import { useState, useEffect, useRef, memo } from "react";
import "./FxTile.css";
import Decimal from "decimal.js";

interface FxTileProps {
  currencyPair: string;
  bid?: Decimal;
  ask?: Decimal;
  tenor: string;
  amount: Decimal;
  ticksPerSecond?: number;
  serverTicksPerSecond?: number;
  latencyMs?: number;
}

const FxTile = memo(({
  currencyPair = "EUR/USD",
  bid,
  ask,
  tenor = "SPOT",
  amount = new Decimal(10000.0),
  ticksPerSecond: configuredTicksPerSecond,
  serverTicksPerSecond = 0,
  latencyMs = 0
}: FxTileProps) => {
  const [currentBid, setCurrentBid] = useState(bid?.toString() || "-");
  const [currentAsk, setCurrentAsk] = useState(ask?.toString() || "-");
  const [isBidUp, setisBidUp] = useState('');
  const [isAskUp, setisAskUp] = useState('');
  const [actualTicksPerSecond, setActualTicksPerSecond] = useState(0);
  
  // Use refs to store previous values
  const prevBidRef = useRef<Decimal | undefined>(undefined);
  const prevAskRef = useRef<Decimal | undefined>(undefined);
  
  // Track ticks for frequency calculation
  const tickTimestamps = useRef<number[]>([]);
  const tickCounterInterval = useRef<NodeJS.Timeout | null>(null);

  // Update prices when props change
  useEffect(() => {
    if (bid) {
      setCurrentBid(bid.toString());
      if (prevBidRef.current) {
        const isUp = bid.greaterThan(prevBidRef.current);
        setisBidUp(isUp ? 'up' : 'down');
      }
      prevBidRef.current = bid;
      
      // Record tick timestamp
      const now = Date.now();
      tickTimestamps.current.push(now);
      
      // Remove timestamps older than 1 second
      const oneSecondAgo = now - 2000;
      tickTimestamps.current = tickTimestamps.current.filter(ts => ts > oneSecondAgo);
    }
    if (ask) {
      setCurrentAsk(ask.toString());
      if (prevAskRef.current) {
        const isUp = ask.greaterThan(prevAskRef.current);
        setisAskUp(isUp ? 'up' : 'down');
      }
      prevAskRef.current = ask;
    }
  }, [bid, ask]);
  
  // Calculate ticks per second periodically
  useEffect(() => {
    tickCounterInterval.current = setInterval(() => {
      const now = Date.now();
      const oneSecondAgo = now - 1000;
      const recentTicks = tickTimestamps.current.filter(ts => ts > oneSecondAgo);
      setActualTicksPerSecond(recentTicks.length);
    }, 500); // Update display every 500ms
    
    return () => {
      if (tickCounterInterval.current) {
        clearInterval(tickCounterInterval.current);
      }
    };
  }, []);

  // Calculate spread
  const spread = bid && ask ? ask.minus(bid).toFixed(4) : "0.0000";

  const handleBuy = () => {
    console.log(`Buy ${currencyPair} at ${currentAsk}`);
  };

  const handleSell = () => {
    console.log(`Sell ${currencyPair} at ${currentBid}`);
  };

  return (
    <div className="fx-tile">
      <div className="fx-tile-header">
        <span className="currency">{currencyPair}</span>
        <span className="tenor">{tenor}</span>
        <span className="amount">{amount.toFixed(0)}</span>
      </div>
      <div className="fx-tile-prices">
        <button className="price-btn sell" onClick={handleSell}>
          <div className="label">SELL</div>
          <div className={`price ${isBidUp}`}>{currentBid}</div>
        </button>
        <button className="price-btn buy" onClick={handleBuy}>
          <div className="label">BUY</div>
          <div className={`price ${isAskUp}`}>{currentAsk}</div>
        </button>
      </div>
      <div className="fx-tile-spread">Spread: {spread}</div>      
      <div className="fx-tile-footer">
        <span className="tick-counter">Server: {serverTicksPerSecond} tps | UI: {actualTicksPerSecond} / {configuredTicksPerSecond || 'N/A'} tps | Latency: {latencyMs}ms</span>
      </div>       
    </div>
  );
});

export default FxTile;
