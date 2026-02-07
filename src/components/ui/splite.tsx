"use client";

import { Suspense, lazy } from "react";
import SplineLoader from "@/components/ui/spline-loader";
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense fallback={<SplineLoader />}>
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
