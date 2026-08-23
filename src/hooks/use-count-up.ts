import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const parseValue = (raw: string) => {
  const match = raw.match(/([\d,.]+)/);
  const numeric = match ? parseFloat(match[1].replace(/,/g, "")) : 0;
  const prefix = raw.slice(0, match?.index ?? 0);
  const suffix = raw.slice((match?.index ?? 0) + (match?.[1].length ?? 0));
  return { numeric, prefix, suffix };
};

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export const useCountUp = (value: string, duration = 1600) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(() => {
    const { prefix, suffix } = parseValue(value);
    return `${prefix}0${suffix}`;
  });

  useEffect(() => {
    if (!isInView) return;
    const { numeric, prefix, suffix } = parseValue(value);
    const isDecimal = value.includes(".");
    const start = performance.now();

    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = numeric * easeOutExpo(progress);
      const formatted = isDecimal ? current.toFixed(1) : Math.round(current).toLocaleString();
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, duration]);

  return { ref, display };
};
