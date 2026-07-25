import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";
import { Constellation } from "@/components/ui/Constellation";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Research } from "@/components/sections/Research";
import { Education } from "@/components/sections/Education";
import { Github } from "@/components/sections/Github";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <AuroraBackground />
      <AnimatedGrid />
      <Constellation />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Education />
        <Github />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
