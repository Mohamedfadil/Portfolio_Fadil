"use client";

import { useEffect, useRef, useState } from "react";
import ServicesPageLoader from "@/components/ui/services-page-loader";

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
      <ServicesPageLoader />
    </div>
  );
}
