"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ScrollToTopButtonProps = {
  className?: string;
  threshold?: number;
};

function getScrollProgress() {
  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;
  if (maxScroll <= 0) {
    return 0;
  }
  return window.scrollY / maxScroll;
}

export default function ScrollToTopButton({
  className,
  threshold = 0.25,
}: ScrollToTopButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(getScrollProgress() >= threshold);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [threshold]);

  if (!visible) {
    return null;
  }

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        "fixed right-6 bottom-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-surface/90 text-muted-foreground shadow-[0_18px_60px_rgba(0,0,0,0.2)] backdrop-blur-lg transition hover:-translate-y-0.5 hover:text-primary hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19V5m0 0-6 6m6-6 6 6"
        />
      </svg>
    </button>
  );
}
