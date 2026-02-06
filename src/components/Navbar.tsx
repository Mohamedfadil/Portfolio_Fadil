"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import useActiveSection from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import portfolio from "@/data/portfolio.json";

const mainNavItems = [
  { label: "Home", href: "#hero" },
  { label: "Journey", href: "#journey" },
  { label: "Experience", href: "#experience" },
  { label: "Competencies", href: "#competencies" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Services", href: "/services" },
];

const servicesNavItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Pricing", href: "#pricing" },
  { label: "Future", href: "#future" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const navBase = scrolled ? "text-muted-foreground" : "text-white/70";
  const navActive = scrolled ? "text-primary" : "text-white";
  const navHover = scrolled ? "hover:text-primary" : "hover:text-white";
  const brandHref = "/services";
  const items = pathname?.startsWith("/services")
    ? servicesNavItems
    : mainNavItems;
  const sectionIds = useMemo(
    () =>
      items
        .map((item) => (item.href.startsWith("#") ? item.href.slice(1) : ""))
        .filter(Boolean),
    [items],
  );
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setProgress(pct * 100);
      setScrolled(scrollTop > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all",
        scrolled
          ? "bg-background/85 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href={brandHref}
          className={cn(
            "text-lg font-semibold tracking-tight transition-colors hover:text-primary",
            scrolled ? "text-foreground" : "text-white",
          )}
        >
          {portfolio.profile.name}
        </a>
        <nav className="hidden max-w-[70vw] items-center gap-5 overflow-x-auto md:flex">
          {items.map((item) => {
            const id = item.href.startsWith("#") ? item.href.slice(1) : "";
            const isActive = id ? activeId === id : false;
            return (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm font-medium transition",
                navHover,
                isActive ? navActive : navBase,
              )}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </a>
          );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-surface text-foreground transition hover:-translate-y-0.5 hover:shadow-lg md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="border-t border-border/60 bg-surface/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {items.map((item) => {
              const id = item.href.startsWith("#") ? item.href.slice(1) : "";
              const isActive = id ? activeId === id : false;
              return (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition hover:text-primary",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            );
            })}
          </div>
        </div>
      )}
      <div className="h-[2px] w-full bg-border/40">
        <div
          className="h-full bg-gradient-to-r from-primary via-sky-400 to-indigo-400 transition-[width]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
};

export default Navbar;
