import Hero from "@/components/sections/Hero";
import BrandIntro from "@/components/sections/BrandIntro";
import Journey from "@/components/sections/Journey";
import Experience from "@/components/sections/Experience";
import CoreCompetencies from "@/components/sections/CoreCompetencies";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Dock from "@/components/Dock";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-32">
      {/* Decorative background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-noise" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-40 -z-10 h-80 w-80 rounded-full bg-indigo-400/20 blur-[140px]" />

      {/* Single-page sections */}
      <Hero />
      <BrandIntro />
      <Journey />
      <Experience />
      <CoreCompetencies />
      <Projects />
      <Contact />
      <Footer />

      <Dock />
    </main>
  );
}
