import { useEffect, useState } from 'react';

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const delayInputTimeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(delayInputTimeout);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
