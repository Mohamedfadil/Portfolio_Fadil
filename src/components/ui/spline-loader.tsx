import { Component as RocketLoader } from "@/components/ui/rocket-loader";

export default function SplineLoader({
  message = "Loading 3D experience...",
}: {
  message?: string;
}) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-black via-zinc-900 to-zinc-800">
      <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.35),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.25),transparent_45%)]" />
      <div className="relative z-10 flex w-full max-w-md flex-col items-center gap-6 px-6 py-10">
        <div className="h-40 w-full rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <RocketLoader />
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-cyan-300 to-teal-300" />
        </div>
        <p className="text-sm tracking-[0.15em] text-white/80 uppercase">
          {message}
        </p>
      </div>
    </div>
  );
}
