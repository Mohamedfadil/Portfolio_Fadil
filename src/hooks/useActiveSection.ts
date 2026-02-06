"use client";

import { useEffect, useMemo, useState } from "react";

export default function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");
  const ids = useMemo(() => sectionIds.filter(Boolean), [sectionIds]);

  useEffect(() => {
    if (typeof window === "undefined" || ids.length === 0) return;
    if (!("IntersectionObserver" in window)) {
      setActiveId(ids[0]);
      return;
    }
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.2,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
