"use client";

import type { HTMLAttributes } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export default function ThemeToggle({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const { resolvedTheme, setTheme } = useTheme();
  const [checked, setChecked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => setChecked(resolvedTheme === "dark"), [resolvedTheme]);

  const handleCheckedChange = useCallback(
    (isChecked: boolean) => {
      setChecked(isChecked);
      setTheme(isChecked ? "dark" : "light");
    },
    [setTheme],
  );

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative flex h-9 w-20 items-center justify-center",
        className,
      )}
      {...props}
    >
      <Switch
        checked={checked}
        onCheckedChange={handleCheckedChange}
        aria-label="Toggle color theme"
        className={cn(
          "peer absolute inset-0 h-full w-full rounded-full border border-border/70 bg-accent/80 transition-colors",
          "data-[state=checked]:bg-accent/80 data-[state=unchecked]:bg-accent/80",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "[&>span]:z-10 [&>span]:h-7 [&>span]:w-7 [&>span]:rounded-full [&>span]:border [&>span]:border-border/70 [&>span]:bg-background [&>span]:shadow-sm",
          "data-[state=unchecked]:[&>span]:translate-x-[6px]",
          "data-[state=checked]:[&>span]:translate-x-[46px]",
        )}
      />

      <span className="pointer-events-none absolute inset-y-0 left-3 z-20 flex items-center justify-center">
        <SunIcon
          size={16}
          className={cn(
            "transition-all duration-200 ease-out",
            checked ? "text-foreground/55" : "scale-110 text-primary",
          )}
        />
      </span>

      <span className="pointer-events-none absolute inset-y-0 right-3 z-20 flex items-center justify-center">
        <MoonIcon
          size={16}
          className={cn(
            "transition-all duration-200 ease-out",
            checked ? "scale-110 text-primary" : "text-foreground/55",
          )}
        />
      </span>
    </div>
  );
}
