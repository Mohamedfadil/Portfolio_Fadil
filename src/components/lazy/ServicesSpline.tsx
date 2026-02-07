"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SplineLoader from "@/components/ui/spline-loader";

const DynamicSplineScene = dynamic(
  () => import("@/components/ui/splite").then((mod) => mod.SplineScene),
  {
    ssr: false,
    loading: () => <SplineLoader />,
  },
);

export default function ServicesSpline({
  scene,
  className,
}: {
  scene: string;
  className?: string;
}) {
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShouldMount(true);
    }, 700);
    return () => window.clearTimeout(timer);
  }, []);

  if (!shouldMount) {
    return <SplineLoader />;
  }

  return <DynamicSplineScene scene={scene} className={className} />;
}
