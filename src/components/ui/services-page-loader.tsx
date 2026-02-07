import type { CSSProperties } from "react";

type ServicesPageLoaderProps = {
  text?: string;
};

export default function ServicesPageLoader({
  text = "Loading our Services",
}: ServicesPageLoaderProps) {
  return (
    <div className="loader-wrapper" aria-label="Loading our Services" role="status">
      {Array.from(text).map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="loader-letter"
          style={{ "--index": index } as CSSProperties}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
