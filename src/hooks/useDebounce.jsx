import { useState, useEffect } from "react";

export const useDebounce = (value, milliSeconds) => {
  const [debouncedSearchTerm, setDebouncedValue] = useState(value);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    setTyping(true);
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      setTyping(false);
    }, milliSeconds);

    return () => {
      clearTimeout(handler);
    };
  }, [value, milliSeconds]);

  return { debouncedSearchTerm, typing };
};
