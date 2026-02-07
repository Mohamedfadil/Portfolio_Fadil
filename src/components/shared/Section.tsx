import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
  noPadding?: boolean;
};

export default function Section({
  id,
  className,
  children,
  fullWidth = false,
  noPadding = false,
}: SectionProps) {
  return (
    <section
      id={id}
      data-section={id}
      data-visible="true"
      className={cn(
        "scroll-mt-24 section-reveal relative",
        !noPadding && "section-pad",
        className,
      )}
    >
      <div className={fullWidth ? "w-full" : "mx-auto max-w-6xl"}>
        {children}
      </div>
    </section>
  );
}
