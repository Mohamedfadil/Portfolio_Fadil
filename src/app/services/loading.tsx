import { Component as RocketLoader } from "@/components/ui/rocket-loader";

export default function Loading() {
  return (
    <main className="fixed inset-0 z-[120] flex min-h-screen items-center justify-center bg-black/95 px-6 py-24 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6">
        <p className="text-xs uppercase tracking-[0.3em] text-white/70">
          Loading Services...
        </p>
        <div className="h-[420px] w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
          <RocketLoader />
        </div>
        <p className="text-sm uppercase tracking-[0.18em] text-white/80">
          Preparing 3D Experience
        </p>
      </div>
    </main>
  );
}
