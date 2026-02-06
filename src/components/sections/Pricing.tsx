import Section from "@/components/shared/Section";
import portfolio from "@/data/portfolio.json";
import Link from "next/link";

// Pricing strategy section.
export default function Pricing() {
  const { pricing } = portfolio;
  return (
    <Section id="pricing">
      <div className="mb-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Pricing Strategy
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Flexible engagements that scale with your ambition.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Choose the engagement model that matches your stage. Every tier is
            outcome-driven with clear milestones and collaborative delivery.
          </p>
        </div>
        <div className="rounded-3xl border border-border/60 bg-surface p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Unique Approach
          </p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Pricing aligns to business outcomes, not hours.
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Each phase ships tangible artifacts and executive-ready insights.
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Dedicated support for stakeholder alignment and enablement.
            </li>
          </ul>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {pricing.map((tier, index) => (
          <article
            key={tier.tier}
            className="rounded-3xl border border-border/60 bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{tier.tier}</h3>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Phase {index + 1}
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{tier.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {tier.features.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border/60 bg-background px-2 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
            <Link
              href="/#contact"
              className="mt-6 inline-flex text-sm font-medium text-primary transition hover:translate-x-1"
            >
              Start with this model
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
