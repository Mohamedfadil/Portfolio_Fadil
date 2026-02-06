import Section from "@/components/shared/Section";
import AnimatedShaderHero from "@/components/ui/animated-shader-hero";
import TypingText from "@/components/ui/typing-text";
import portfolio from "@/data/portfolio.json";

// Hero / Intro section.
export default function Hero() {
  const { profile, organization, cta } = portfolio;
  const focusPhrases = portfolio.competencies?.shortFormat
    ? portfolio.competencies.shortFormat.split(" | ")
    : [];

  return (
    <Section id="hero" fullWidth noPadding>
      <AnimatedShaderHero
        badge={{
          text: organization.name,
          icons: ["*", "*", "*"],
        }}
        headline={{
          line1: profile.name,
          line2: profile.title,
        }}
        subtitle={profile.headline}
        primaryAction={{ label: cta.primaryLabel, href: cta.primaryHref }}
        secondaryAction={{ label: cta.secondaryLabel, href: cta.secondaryHref }}
      >
        <div className="mt-10 flex flex-col items-center gap-4 text-sm text-white/70 sm:flex-row">
          <span className="uppercase tracking-[0.3em]">Focus</span>
          <TypingText
            phrases={focusPhrases}
            className="font-semibold text-primary"
          />
          <span className="rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.2em]">
            {profile.availability}
          </span>
        </div>
      </AnimatedShaderHero>
    </Section>
  );
}
