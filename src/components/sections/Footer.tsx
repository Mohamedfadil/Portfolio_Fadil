import portfolio from "@/data/portfolio.json";

// Footer section with social links.
export default function Footer() {
  const { profile, social } = portfolio;
  return (
    <footer className="border-t border-border/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold">{profile.name}</p>
          <p className="text-xs text-muted-foreground">{profile.title}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
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
          <a
            href={`mailto:${profile.email}`}
            className="transition hover:text-primary"
          >
            Email
          </a>
          <a
            href={`tel:${profile.phone?.replace(/\s/g, "")}`}
            className="transition hover:text-primary"
          >
            Phone
          </a>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-muted-foreground">
        (c) {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
