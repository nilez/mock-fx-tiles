import { useEffect, useRef, useCallback } from "react";

type UpdateServerTickRateFunction = (key: string, tickRate: number) => void;

export const useServerTickRate = (updateServerTickRate: UpdateServerTickRateFunction) => {
    const timestamps = useRef(new Map<string, number[]>());
    const interval = useRef<NodeJS.Timeout | null>(null);

    const registerTick = useCallback((key: string) => {
        const now = Date.now();
        if (!timestamps.current.has(key)) timestamps.current.set(key, []);
        timestamps.current.get(key)!.push(now);
    }, []);

    useEffect(() => {
        interval.current = setInterval(() => {
            const now = Date.now();
            const oneSecAgo = now - 1000;

            timestamps.current.forEach((arr, key) => {
                const fresh = arr.filter(t => t > oneSecAgo);
                timestamps.current.set(key, fresh);
                updateServerTickRate(key, fresh.length);
            });
        }, 500);

        return () => {
            interval.current && clearInterval(interval.current);
        }
    }, [updateServerTickRate]);

    return { registerTick };
};
