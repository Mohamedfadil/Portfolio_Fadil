import Section from "@/components/shared/Section";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import portfolio from "@/data/portfolio.json";
import Link from "next/link";

// Services section using glowing effect.
export default function Services() {
  const { services } = portfolio;

  return (
    <Section id="services">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Services
        </p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Service-first offerings built for long-term partnerships.
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Each engagement is tailored to business outcomes, with clear
          milestones and delivery support.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {services.current.map((service) => (
          <article
            key={service.title}
            className="relative overflow-hidden rounded-3xl border border-border/60 bg-surface p-6 shadow-sm"
          >
            <GlowingEffect
              glow
              blur={12}
              spread={32}
              proximity={120}
              borderWidth={2}
            />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {service.description}
              </p>
              <Link
                href="/#contact"
                className="mt-4 inline-flex text-xs uppercase tracking-[0.2em] text-primary transition hover:translate-x-1"
              >
                Contact for Quote
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div
        id="future"
        className="mt-10 rounded-3xl border border-border/60 bg-surface p-6 shadow-sm"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Future Endeavors
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {services.future.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border/60 bg-background px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
