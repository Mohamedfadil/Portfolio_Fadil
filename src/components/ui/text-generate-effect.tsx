"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

// Aceternity UI Text Generate Effect (lightweight version without motion dependency).
export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.6,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const wordsArray = useMemo(() => words.split(" "), [words]);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setVisibleCount(wordsArray.length);
      return;
    }

    setVisibleCount(0);
    const step = Math.max(40, (duration * 1000) / wordsArray.length);
    const interval = window.setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= wordsArray.length) {
          window.clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, step);

    return () => window.clearInterval(interval);
  }, [duration, wordsArray]);

  return (
    <div className={cn("font-semibold", className)}>
      <div className="mt-4 text-xl leading-snug tracking-wide">
        {wordsArray.map((word, idx) => {
          const isVisible = idx < visibleCount;
          const blurClass = filter
            ? isVisible
              ? "blur-0"
              : "blur-sm"
            : "blur-0";
          return (
            <span
              key={`${word}-${idx}`}
              className={cn(
                "transition-all duration-700",
                isVisible ? "opacity-100" : "opacity-0",
                blurClass,
              )}
            >
              {word}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
};
