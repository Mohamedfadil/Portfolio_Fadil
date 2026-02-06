import Section from "@/components/shared/Section";
import IsoLevelWarp from "@/components/ui/isometric-wave-grid-background";
import portfolio from "@/data/portfolio.json";
import Link from "next/link";

// Brand / intro section for IntelechoAI.
export default function BrandIntro() {
  const { organization } = portfolio;

  return (
    <Section id="brand" fullWidth>
      <div className="mx-auto w-full px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border/60">
          <IsoLevelWarp color="100, 50, 250" density={50} speed={1.2} />
          <div className="relative z-10 px-8 py-12 text-white">
            <div className="mx-auto max-w-5xl text-center">
              <Link
                href="/services"
                className="text-xs uppercase tracking-[0.3em] text-white/70 transition hover:text-white"
              >
                IntelechoAI
              </Link>
              <Link
                href="/services"
                className="mt-4 block text-3xl font-semibold sm:text-4xl transition hover:text-white"
              >
                {organization.name}
              </Link>
              <p className="mt-2 text-lg text-white/80">
                {organization.tagline}
              </p>
              <p className="mt-6 text-sm text-white/70">
                {organization.mission}
              </p>
              <p className="mt-4 text-sm text-white/70">
                {organization.subtext}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70">
                <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1">
                  Agentic AI
                </span>
                <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1">
                  Data Platforms
                </span>
                <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1">
                  Product Delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
