"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const AnimatedShaderBackground = dynamic(
  () => import("@/components/ui/animated-shader-background"),
  { ssr: false },
);

export default function AmbientBackground() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timerId: number | undefined;

    const update = () => {
      if (reducedMotion.matches) {
        setEnabled(false);
        return;
      }

      if (timerId) {
        window.clearTimeout(timerId);
      }

      timerId = window.setTimeout(() => {
        setEnabled(true);
      }, 700);
    };

    update();
    reducedMotion.addEventListener("change", update);
    return () => {
      if (timerId) {
        window.clearTimeout(timerId);
      }
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return <AnimatedShaderBackground className="opacity-70" />;
}
