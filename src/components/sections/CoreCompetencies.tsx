import Section from "@/components/shared/Section";
import portfolio from "@/data/portfolio.json";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  Brain,
  Cloud,
  Code2,
  Database,
  FileText,
  Network,
  Sparkles,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";

const icons = [
  Brain,
  Sparkles,
  Network,
  Cloud,
  Database,
  FileText,
  Code2,
  Target,
];

// Core competencies section.
export default function CoreCompetencies() {
  const competencies = portfolio.competencies;

  if (!competencies) {
    return null;
  }

  const cards = competencies.pillars.map((pillar, index) => {
    const Icon = icons[index % icons.length];
    return {
      title: pillar.title,
      description: (
        <ul className="space-y-2">
          {pillar.items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ),
      icon: <Icon className="h-4 w-4" />,
      className: "md:col-span-6",
    };
  });

  const summaryCards = [
    {
      title: "Core Competencies",
      description: competencies.shortFormat,
      icon: <Sparkles className="h-4 w-4" />,
      className: "md:col-span-12",
    },
    {
      title: "Impact Focus",
      description: competencies.impactFocus,
      icon: <Target className="h-4 w-4" />,
      className: "md:col-span-12",
    },
  ];

  return (
    <Section id="competencies">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Core Competencies
        </p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          {competencies.title}
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          {competencies.subtitle}
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-12">
        {[...cards, ...summaryCards].map((card, idx) => (
          <li
            key={`${card.title}-${idx}`}
            className={cn("min-h-[14rem] list-none", card.className)}
          >
            <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
                <div className="relative flex flex-1 flex-col justify-between gap-3">
                  <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                    {card.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="pt-0.5 text-xl font-semibold text-foreground">
                      {card.title}
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      {card.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
