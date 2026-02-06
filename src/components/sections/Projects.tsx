import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import resume from "@/data/resume.json";
import Link from "next/link";

// Projects and case studies section.
const KEYWORD_TAGS = [
  "AWS",
  "Azure",
  "Bedrock",
  "RAG",
  "Agentic",
  "Next.js",
  "FastAPI",
  "Docker",
  "LangGraph",
  "Semantic Kernel",
];

const extractTags = (text: string) =>
  KEYWORD_TAGS.filter((tag) => text.toLowerCase().includes(tag.toLowerCase()));

export default function Projects() {
  const projects = resume.projects.slice(0, 6);

  return (
    <Section id="projects">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Projects & Case Studies
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Real-world systems shipped with measurable impact.
          </h2>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => {
          const combined = project.highlights.join(" ");
          const tags = extractTags(combined);
          return (
            <article
              key={project.title}
              className="group rounded-3xl border border-border/60 bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {project.company}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {project.dates}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {project.highlights.slice(0, 3).map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/60 bg-background px-2 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <Button asChild className="rounded-full">
                  <Link href="/services">View Services</Link>
                </Button>
                <Link
                  href="/#contact"
                  className="text-sm font-medium text-primary transition group-hover:translate-x-1"
                >
                  Discuss a similar build
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
