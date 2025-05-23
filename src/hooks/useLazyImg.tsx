import { useEffect, useRef } from 'react';

function useLazyImage() {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const target = entry.target as HTMLImageElement;
          target.src = target.getAttribute('data-src') ?? '';

          observer.unobserve(target);
        });
      },
      { threshold: 0.5 }
    );
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return observerRef;
}

export default useLazyImage;
