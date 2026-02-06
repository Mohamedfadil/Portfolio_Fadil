import Section from "@/components/shared/Section";
import portfolio from "@/data/portfolio.json";

// Team capability section.
export default function Team() {
  const team = portfolio.team;
  if (!team) return null;

  return (
    <Section id="team">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Team Capability
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            {team.title}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {team.subtitle}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            We bring the delivery power of a full product organization, ensuring
            strategy, execution, and scale stay aligned from concept to launch.
          </p>
        </div>
        <div className="rounded-3xl border border-border/60 bg-surface p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Team Disciplines
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {team.roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-border/60 bg-background px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
