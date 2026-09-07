"use client";

import { useRef } from "react";
import { useCountUp } from "./Reveal";

export default function StatCounter({
  count,
  prefix = "",
  suffix = "",
  decimal = 0,
  label,
}: {
  count: number;
  prefix?: string;
  suffix?: string;
  decimal?: number;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  useCountUp(ref as React.RefObject<HTMLElement>);

  return (
    <div className="reveal flex flex-col items-center gap-2 text-center">
      <span
        ref={ref}
        data-count={count}
        data-prefix={prefix}
        data-suffix={suffix}
        data-decimal={decimal}
        className="font-heading text-5xl md:text-6xl font-semibold text-gold-light"
      >
        {prefix}0{suffix}
      </span>
      <span className="text-sm md:text-base tracking-widest uppercase text-cream/70">
        {label}
      </span>
    </div>
  );
}
