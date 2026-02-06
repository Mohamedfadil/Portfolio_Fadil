"use client";

import { cn } from "@/lib/utils";
import portfolio from "@/data/portfolio.json";

const { profile, social } = portfolio;

const items = [
  {
    label: "Phone",
    href: `tel:${profile.phone?.replace(/\s/g, "")}`,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 .95-.24c1.04.24 2.16.37 3.3.37a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C9.94 21 3 14.06 3 5.5a1 1 0 0 1 1-1H7.5a1 1 0 0 1 1 1c0 1.14.13 2.26.37 3.3a1 1 0 0 1-.24.95l-1.99 2.04Z"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2 8 5 8-5H4Zm16 10V9l-8 5-8-5v8h16Z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: social.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.94v5.666H9.35V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288ZM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123Zm1.777 13.019H3.56V9h3.554v11.452Z"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: social.github,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.36 1.08 2.94.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.53 9.53 0 0 1 12 6.84c.85 0 1.71.11 2.52.33 1.9-1.3 2.74-1.03 2.74-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.58 4.95.36.31.69.92.69 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
        />
      </svg>
    ),
  },
  {
    label: "X",
    href: social.x,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.244 2H21l-6.75 7.72L22 22h-6.828l-4.57-5.58L5.6 22H2.844l7.2-8.24L2 2h7l4.13 5.08L18.244 2Zm-1.194 18h1.785L7.02 4H5.127l11.923 16Z"
        />
      </svg>
    ),
  },
];

export default function Dock() {
  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-40 w-full -translate-x-1/2 px-6">
      <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-border/60 bg-surface/90 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.2)] backdrop-blur-lg">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            download={item.href.endsWith(".pdf") ? true : undefined}
            className={cn(
              "pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition hover:-translate-y-0.5 hover:text-primary hover:shadow-lg",
            )}
            aria-label={item.label}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
