import SplineLoader from "@/components/ui/spline-loader";

export default function Loading() {
  return (
    <main className="min-h-screen bg-black px-6 py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6">
        <p className="text-xs uppercase tracking-[0.3em] text-white/70">
          Loading Services...
        </p>
        <div className="h-[420px] w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
          <SplineLoader message="Loading Services Experience..." />
        </div>
      </div>
    </main>
  );
}
