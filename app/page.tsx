import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";


export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <div className="h-40"></div>
    </div>
  );
}
