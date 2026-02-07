"use client";

import dynamic from "next/dynamic";

const Services = dynamic(() => import("@/components/sections/Services"), {
  ssr: false,
  loading: () => <div className="section-pad h-96" aria-hidden="true" />,
});

const Team = dynamic(() => import("@/components/sections/Team"), {
  ssr: false,
  loading: () => <div className="section-pad h-64" aria-hidden="true" />,
});

const Pricing = dynamic(() => import("@/components/sections/Pricing"), {
  ssr: false,
  loading: () => <div className="section-pad h-96" aria-hidden="true" />,
});

export function DeferredServices() {
  return <Services />;
}

export function DeferredTeam() {
  return <Team />;
}

export function DeferredPricing() {
  return <Pricing />;
}
