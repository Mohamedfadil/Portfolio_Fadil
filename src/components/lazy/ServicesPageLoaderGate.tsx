"use client";

import { useEffect, useRef, useState } from "react";
import { Component as RocketLoader } from "@/components/ui/rocket-loader";

export default function ServicesPageLoaderGate() {
  const [visible, setVisible] = useState(true);
  const startTimeRef = useRef(0);

  useEffect(() => {
    startTimeRef.current = performance.now();

    const finish = () => {
      const elapsed = performance.now() - startTimeRef.current;
      const wait = Math.max(0, 600 - elapsed);
      window.setTimeout(() => {
        setVisible(false);
      }, wait);
    };

    const handleSplineLoaded = () => {
      finish();
    };

    const hardTimeout = window.setTimeout(() => {
      setVisible(false);
    }, 12000);

    window.addEventListener("services-spline-loaded", handleSplineLoaded);
    return () => {
      window.clearTimeout(hardTimeout);
      window.removeEventListener("services-spline-loaded", handleSplineLoaded);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6">
        <p className="text-xs uppercase tracking-[0.35em] text-white/70">
          Loading Services...
        </p>
        <div className="h-[420px] w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
          <RocketLoader />
        </div>
        <p className="text-sm uppercase tracking-[0.18em] text-white/80">
          Preparing 3D Experience
        </p>
      </div>
    </div>
  );
}
