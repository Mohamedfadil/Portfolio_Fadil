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
