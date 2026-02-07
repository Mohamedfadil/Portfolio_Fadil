import Section from "@/components/shared/Section";
import { Spotlight } from "@/components/ui/spotlight";
import ServicesSpline from "@/components/lazy/ServicesSpline";
import portfolio from "@/data/portfolio.json";

// Services page hero using Splite layout.
export default function ServicesHero() {
  const { organization } = portfolio;

  return (
    <Section id="services-hero" fullWidth noPadding>
      <div className="relative min-h-screen bg-black">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

        <div className="relative z-10 flex min-h-screen w-full flex-col md:flex-row">
          {/* Left content */}
          <div className="flex-1 px-6 py-16 md:px-12 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              {organization.name} - Services We Offer
            </h1>
            <p className="mt-4 max-w-lg text-xl text-neutral-200">
              {organization.tagline}
            </p>
            <p className="mt-3 max-w-lg text-lg text-neutral-300">
              {organization.subtext}
            </p>
          </div>

          {/* Right content */}
          <div className="flex-1 relative min-h-[420px] md:min-h-screen">
            <ServicesSpline
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
