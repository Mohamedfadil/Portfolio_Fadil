import ServicesPageLoader from "@/components/ui/services-page-loader";

export default function Loading() {
  return (
    <main className="fixed inset-0 z-[120] flex min-h-screen items-center justify-center bg-black/95 px-6 py-24 backdrop-blur-sm">
      <ServicesPageLoader />
    </main>
  );
}
