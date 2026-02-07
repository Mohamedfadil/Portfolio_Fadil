import Hero from "@/components/sections/Hero";
import Footer from "@/components/sections/Footer";
import Journey from "@/components/sections/Journey";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import {
  DeferredBrandIntro,
  DeferredContact,
  DeferredCoreCompetencies,
  DeferredDock,
} from "@/components/lazy/HomeDeferred";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-32">
      {/* Single-page sections */}
      <Hero />
      <DeferredBrandIntro />
      <Journey />
      <Experience />
      <DeferredCoreCompetencies />
      <Projects />
      <DeferredContact />
      <Footer />

      <DeferredDock />
    </main>
  );
}
