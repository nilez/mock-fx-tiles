
export interface TileStat {  
  currencyPair: string;
  tenor: string;
  ticksPerSecond?: number;          // throttle target
  serverTicksPerSecond?: number;    // measured incoming tick rate
  latency?: number;                 // ms
  serverTimestamp?: number;         // protobuf timestamp
}