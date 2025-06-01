'use client'
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
// import { Switch } from "@/components/aspect-ui";
// import { UseThemeSwitcher } from "@/components/UseThemeSwitcher";
// import { Moon, Sun } from "lucide-react";
import Footer from "@/components/Footer";

export default function Home() {
  // const [theme, setTheme] = UseThemeSwitcher()
  // const isSwitched = theme === 'dark' ? true : false
  // const handleSwitchChange = () => {
  //   setTheme(theme === 'dark' ? 'light' : 'dark')
  // }
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      {/* <div className="h-48"></div> */}
      {/* <Switch checked={isSwitched}
        onChange={handleSwitchChange}
        activeSwitchIcon={<Moon className='text-primary-200' />}
        deactiveSwitchIcon={<Sun className='text-primary-900' />}
        switchIconEnabled={true}
        size='lg'
        className='fixed bottom-6 right-6 z-50'
        activeClassName='bg-primary-200'
        deactiveClassName='bg-primary-900'
        activeSwitchClassName='bg-primary-900'
        deactiveSwitchClassName='bg-primary-200'
      />  */}
    </div>
  );
}
