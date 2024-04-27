import { useEffect, useRef } from "react";

export const useDebounce = <T extends any[]>(callback: (...args: T) => void, delay: number): ((...args: T) => void) => {
    const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        return () => {
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current);
            }
        };
    }, []);

    const debouncedCallback = (...args: T) => {
        if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current);
        }

        timeoutIdRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    };
    return debouncedCallback;
};
