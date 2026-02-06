"use client";

import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import portfolio from "@/data/portfolio.json";

// Contact / CTA section.
export default function Contact() {
  const { profile, social } = portfolio;
  const mailSubject = encodeURIComponent("IntelechoAI inquiry");
  const mailBody = encodeURIComponent(
    "Hi IntelEcho Team,\n\nI'm interested in discussing a potential AI engagement. Here's a quick overview:\n\n- Goal:\n- Timeline:\n- Team/Company:\n\nThanks!",
  );
  const mailHref = `mailto:${profile.email}?subject=${mailSubject}&body=${mailBody}`;
  return (
    <Section id="contact">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Let&apos;s build the next agentic product together.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Share your goal or challenge — whether it&apos;s automation, data,
            GenAI, or a full AI platform. I&apos;ll respond with a clear plan,
            timeline, and next steps.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Tell me what you want to build with AI. We&apos;ll explore the best
            approach and move from discussion to delivery.
          </p>
        </div>
        <form
          className="rounded-3xl border border-border/60 bg-surface p-6 shadow-sm"
          onSubmit={(event) => {
            event.preventDefault();
            const form = event.currentTarget;
            const data = new FormData(form);
            const name = data.get("name");
            const email = data.get("email");
            const company = data.get("company");
            const message = data.get("message");

            const subject = encodeURIComponent(
              `Portfolio inquiry from ${name || "a new client"}`,
            );
            const body = encodeURIComponent(
              `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`,
            );
            window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
          }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Name
              <input
                name="name"
                required
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <label className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Email
              <input
                name="email"
                type="email"
                required
                placeholder="Your email id"
                className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
          </div>
          <label className="mt-4 block text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Company
            <input
              name="company"
              placeholder="Company or startup or individual"
              className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </label>
          <label className="mt-4 block text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Project Details
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your goals, timeline, and team or anything to discuss about tech or business"
              className="mt-2 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </label>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button className="h-11 rounded-full px-6 text-sm">
              Send Inquiry
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full px-6 text-sm"
            >
              <a href={mailHref}>Open in Mail</a>
            </Button>
            <span className="text-xs text-muted-foreground">
              Or email directly at {profile.email}
            </span>
          </div>
        </form>
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <a
          href={social.linkedin}
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-primary"
        >
          LinkedIn
        </a>
        <a
          href={social.github}
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-primary"
        >
          GitHub
        </a>
        <a
          href={social.x}
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-primary"
        >
          X
        </a>
      </div>
    </Section>
  );
}
