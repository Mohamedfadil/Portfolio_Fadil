import ServicesPageLoader from "@/components/ui/services-page-loader";

export default function SplineLoader({
  message = "Loading our Services",
}: {
  message?: string;
}) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-black/85 p-6">
      <ServicesPageLoader text={message} />
    </div>
  );
}
