import Section from "@/components/shared/Section";
import resume from "@/data/resume.json";

// About / Journey section sourced from resume data.
export default function Journey() {
  const stats = [
    { label: "Experience", value: "3 AI engineering roles" },
    { label: "Projects", value: "15+ projects" },
    { label: "Certifications", value: "10+ credentials" },
  ];

  return (
    <Section id="journey">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            About / Journey
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Building agentic AI systems and data platforms with real-world
            impact.
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed tracking-normal text-muted-foreground sm:text-lg">
            {resume.summary}
          </p>
        </div>

        <div className="rounded-3xl border border-border/60 bg-surface p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Journey Snapshot
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-foreground">
            3+ years building AI-powered full-stack solutions.
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            From RAG assistants to multi-agent orchestration frameworks, the
            focus is always on shipping reliable systems that scale.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {resume.coreCompetencies.slice(0, 6).map((item) => (
              <span
                key={item}
                className="rounded-full border border-border/60 px-3 py-1"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/60 bg-background px-4 py-3"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
