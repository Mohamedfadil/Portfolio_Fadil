"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type TypingTextProps = {
  phrases: string[];
  className?: string;
};

export default function TypingText({ phrases, className }: TypingTextProps) {
  const safePhrases = useMemo(
    () => (phrases.length ? phrases : [""]),
    [phrases],
  );
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setDisplayText(safePhrases[0] ?? "");
      return;
    }

    const currentPhrase = safePhrases[phraseIndex % safePhrases.length];
    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentPhrase.slice(0, displayText.length + 1);
        setDisplayText(nextText);
        if (nextText === currentPhrase) {
          setIsDeleting(true);
        }
      } else {
        const nextText = currentPhrase.slice(0, displayText.length - 1);
          setDisplayText(nextText);
        if (nextText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % safePhrases.length);
        }
      }
    }, isDeleting ? 40 : 90);

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex, safePhrases]);

  if (!phrases.length) {
    return null;
  }

  return (
    <span className={cn("inline-flex items-center gap-1", className)}>
      <span>{displayText}</span>
      <span className="h-5 w-[2px] bg-primary animate-pulse" />
    </span>
  );
}
