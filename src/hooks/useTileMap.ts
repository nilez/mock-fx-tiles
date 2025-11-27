import { useMemo } from "react";

export const useTileMap = <T>(items: T[], keyFn: (item: T) => string) => {
  return useMemo(() => {
    const map = new Map<string, T>();
    items.forEach(item => map.set(keyFn(item), item));
    return map;
  }, [items, keyFn]);
};