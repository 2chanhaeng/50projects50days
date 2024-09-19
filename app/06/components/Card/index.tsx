"use client";

import { useEffect } from "react";
import { useInView } from "./hooks";

export default function Card({ isLeft }: { isLeft: boolean }) {
  const { inView, ref } = useInView();
  const initMargin = isLeft ? "marginLeft" : "marginRight";
  const margin = isLeft ? "margin-left" : "margin-right";
  const style = { [initMargin]: "200vw" };

  useEffect(
    () => ref.current?.style.setProperty(margin, inView ? "0" : "200vw"),
    [inView, margin, ref]
  );

  return (
    <div
      className="rounded-lg bg-blue-400 text-white w-1/2 h-[25vh] text-center content-center ease-in-out duration-300"
      ref={ref}
      style={style}
    >
      Content
    </div>
  );
}
