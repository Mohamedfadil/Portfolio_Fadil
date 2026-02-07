"use client";

import dynamic from "next/dynamic";

const BrandIntro = dynamic(() => import("@/components/sections/BrandIntro"), {
  ssr: false,
  loading: () => <div className="section-pad h-72" aria-hidden="true" />,
});

const CoreCompetencies = dynamic(
  () => import("@/components/sections/CoreCompetencies"),
  {
    ssr: false,
    loading: () => <div className="section-pad h-96" aria-hidden="true" />,
  },
);

const Contact = dynamic(() => import("@/components/sections/Contact"), {
  ssr: false,
  loading: () => <div className="section-pad h-80" aria-hidden="true" />,
});

const Dock = dynamic(() => import("@/components/Dock"), { ssr: false });

export function DeferredBrandIntro() {
  return <BrandIntro />;
}

export function DeferredCoreCompetencies() {
  return <CoreCompetencies />;
}

export function DeferredContact() {
  return <Contact />;
}

export function DeferredDock() {
  return <Dock />;
}
