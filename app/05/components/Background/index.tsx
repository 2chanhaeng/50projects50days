"use client";

import Image from "next/image";
import Link from "next/link";
import { useCounter } from "../../hooks/counter";

export default function Background() {
  const count = useCounter();
  return (
    <Link
      href="https://unsplash.com/photos/9s_u31IcNXw"
      className="absolute top-[-100px] left-[-100px] w-[calc(100%+200px)] h-[calc(100%+200px)]"
    >
      <Image
        src="https://images.unsplash.com/photo-1651169007722-ce4a5fb6eaae"
        alt="Two kitties behind a tire"
        fill
        sizes="120vw"
        className="object-cover"
        style={{
          filter: `blur(${100 - count}px)`,
        }}
      />
    </Link>
  );
}
