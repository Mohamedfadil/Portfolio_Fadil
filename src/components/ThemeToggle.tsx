"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const THEME_KEY = "portfolio-theme";

export default function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(THEME_KEY) as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const nextTheme = stored ?? (prefersDark ? "dark" : "light");
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  };

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={toggleTheme}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-surface text-foreground transition hover:-translate-y-0.5 hover:shadow-lg",
        className,
      )}
    >
      {theme === "dark" ? (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3a6.5 6.5 0 0 0 0 13 6.5 6.5 0 0 0 0-13Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 1v2m0 18v2m11-11h-2M3 12H1m17.657-7.657-1.414 1.414M6.757 17.243l-1.414 1.414m0-12.728 1.414 1.414m10.486 10.486 1.414 1.414"
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
          />
        </svg>
      )}
    </button>
  );
}
