"use client";

import { useEffect, useRef, useState } from "react";
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
  onLoaded,
}: {
  scene: string;
  className?: string;
  onLoaded?: () => void;
}) {
  const [shouldMount, setShouldMount] = useState(false);
  const hasNotified = useRef(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShouldMount(true);
    }, 700);
    return () => window.clearTimeout(timer);
  }, []);

  const notifyLoaded = () => {
    if (hasNotified.current) return;
    hasNotified.current = true;
    onLoaded?.();
    window.dispatchEvent(new Event("services-spline-loaded"));
  };

  if (!shouldMount) {
    return <SplineLoader />;
  }

  return (
    <DynamicSplineScene
      scene={scene}
      className={className}
      onLoaded={notifyLoaded}
    />
  );
}
