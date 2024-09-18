import { useEffect, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 100) clearInterval(interval);
      setCount((count) => count + 1);
    }, 100);
    return () => clearInterval(interval);
  });
  return count;
};
