"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
  noPadding?: boolean;
};

export default function Section({
  id,
  className,
  children,
  fullWidth = false,
  noPadding = false,
}: SectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      data-section={id}
      ref={ref}
      data-visible={visible}
      className={cn(
        "scroll-mt-24 section-reveal relative",
        !noPadding && "section-pad",
        className,
      )}
    >
      <div className={fullWidth ? "w-full" : "mx-auto max-w-6xl"}>
        {children}
      </div>
    </section>
  );
}
