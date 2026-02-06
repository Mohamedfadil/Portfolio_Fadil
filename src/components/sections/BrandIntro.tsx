import Section from "@/components/shared/Section";
import IsoLevelWarp from "@/components/ui/isometric-wave-grid-background";
import portfolio from "@/data/portfolio.json";

// Brand / intro section for IntelechoAI.
export default function BrandIntro() {
  const { profile } = portfolio;

  return (
    <Section id="brand" fullWidth>
      <div className="mx-auto w-full px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border/60">
          <IsoLevelWarp color="100, 50, 250" density={50} speed={1.2} />
          <div className="relative z-10 px-8 py-12 text-white">
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                About
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                {profile.name}
              </h2>
              <p className="mt-2 text-lg text-white/80">{profile.title}</p>
              <p className="mt-6 text-sm text-white/70">{profile.headline}</p>
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
