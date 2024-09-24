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
    <span className="text-9xl font-bold" style={{ opacity: opacity(count) }}>
      {String(count).padStart(2, "0")}%
    </span>
  );
}

const opacity = (count: number) =>
  count < 67 ? 1 - count / 200 : 2 - count / 50;
