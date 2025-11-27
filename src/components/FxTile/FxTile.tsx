import { useState, useEffect, useRef, memo } from "react";
import "./FxTile.css";
import Decimal from "decimal.js";

interface FxTileProps {
  currencyPair: string;
  bid?: Decimal;
  ask?: Decimal;
  tenor: string;
  amount: Decimal;
}

const FxTile = memo(({
  currencyPair = "EUR/USD",
  bid,
  ask,
  tenor = "SPOT",
  amount = new Decimal(10000.0)
}: FxTileProps) => {
  const [currentBid, setCurrentBid] = useState(bid?.toString() || "-");
  const [currentAsk, setCurrentAsk] = useState(ask?.toString() || "-");
  const [isBidUp, setisBidUp] = useState('');
  const [isAskUp, setisAskUp] = useState('');  
  
  // Use refs to store previous values
  const prevBidRef = useRef<Decimal | undefined>(undefined);
  const prevAskRef = useRef<Decimal | undefined>(undefined);
    
  // Update prices when props change
  useEffect(() => {
    if (bid) {
      setCurrentBid(bid.toString());
      if (prevBidRef.current) {
        const isUp = bid.greaterThan(prevBidRef.current);
        setisBidUp(isUp ? 'up' : 'down');
      }
      prevBidRef.current = bid;     
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
    </div>
  );
});

export default FxTile;
