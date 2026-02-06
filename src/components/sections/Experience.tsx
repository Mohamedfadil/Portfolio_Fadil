import Section from "@/components/shared/Section";
import resume from "@/data/resume.json";

// Experience timeline section.
export default function Experience() {
  return (
    <Section id="experience">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Experience Timeline
        </p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Building impactful AI and data products across teams.
        </h2>
      </div>

      <div className="space-y-6">
        {resume.experience.map((item) => (
          <div key={item.role} className="relative pl-6">
            <span className="absolute left-0 top-3 h-2 w-2 rounded-full bg-primary" />
            <div className="rounded-3xl border border-border/60 bg-surface p-6 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.company}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {item.dates}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {item.highlights.slice(0, 4).map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
