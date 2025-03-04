import { useCallback, useEffect, useRef } from 'react';

const useIntersectionObserver = (hasNextPage: boolean, fetchNextPage: () => void) => {
  const observerRef = useRef<HTMLDivElement>(null);

  const callback = useCallback(() => {
    return new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && hasNextPage) {
            fetchNextPage();
          }
        });
      },
      { threshold: 0 }
    );
  }, [hasNextPage, fetchNextPage]);

  useEffect(() => {
    if (!observerRef.current) {
      return undefined;
    }
    const observer = callback();
    observer.observe(observerRef.current);
    return () => {
      observer.disconnect();
    };
  }, [observerRef, callback]);
  return observerRef;
};

export default useIntersectionObserver;
