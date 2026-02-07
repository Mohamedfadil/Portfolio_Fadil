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
    const mobileViewport = window.matchMedia("(max-width: 768px)");

    const update = () => {
      setEnabled(!(reducedMotion.matches || mobileViewport.matches));
    };

    update();
    reducedMotion.addEventListener("change", update);
    mobileViewport.addEventListener("change", update);
    return () => {
      reducedMotion.removeEventListener("change", update);
      mobileViewport.removeEventListener("change", update);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return <AnimatedShaderBackground className="opacity-70" />;
}
