"use client";

import { useCounter } from "../../hooks/counter";

export default function FilterCounter() {
  const count = useCounter();
  if (count > 100) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full text-center content-center">
      <Counter count={count} />
    </div>
  );
}

function Counter({ count }: { count: number }) {
  if (count > 100) return null;
  return (
    <span className="text-9xl font-bold">
      {String(count).padStart(2, "0")}%
    </span>
  );
}
