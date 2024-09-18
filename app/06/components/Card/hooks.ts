import { useEffect, useRef, useState } from "react";

export const useInView = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const windowBottom = () => window.scrollY + window.innerHeight;
  const refBottom = () =>
    ref.current ? ref.current.offsetTop + ref.current.offsetHeight : Infinity;

  useEffect(() => {
    const setInViewByScroll = () => setInView(windowBottom() >= refBottom());
    setInViewByScroll();
    window.addEventListener("scroll", setInViewByScroll);
  });
  return { inView, ref };
};
