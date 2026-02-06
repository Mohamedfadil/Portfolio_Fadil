import type { Metadata } from "next";
import ServicesHero from "@/components/sections/ServicesHero";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/sections/Footer";
import Section from "@/components/shared/Section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IntelechoAI - Services We Offer",
  description:
    "Service-first engagements spanning AI strategy, data engineering, agentic development, and cloud infrastructure.",
  openGraph: {
    title: "IntelechoAI - Services We Offer",
    description:
      "Service-first engagements spanning AI strategy, data engineering, agentic development, and cloud infrastructure.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-noise" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-40 -z-10 h-80 w-80 rounded-full bg-indigo-400/20 blur-[140px]" />

      <ServicesHero />
      <Services />
      <Team />
      <Pricing />

      <Section id="services-cta">
        <div className="rounded-3xl border border-border/60 bg-surface p-8 text-center shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Ready to Start?
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Let&apos;s scope the right engagement for your team.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Schedule a discovery call or send project details to receive a
            tailored proposal.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Contact for Quote
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
