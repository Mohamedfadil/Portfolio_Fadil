"use client";

import { Suspense, lazy } from "react";
import SplineLoader from "@/components/ui/spline-loader";
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
  onLoaded?: () => void;
}

export function SplineScene({ scene, className, onLoaded }: SplineSceneProps) {
  return (
    <Suspense fallback={<SplineLoader />}>
      <Spline
        scene={scene}
        className={className}
        onLoad={() => {
          onLoaded?.();
        }}
      />
    </Suspense>
  );
}
