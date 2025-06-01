'use client'
import { Button } from "@/components/aspect-ui/Button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-800/20 dark:bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-800/20 dark:bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I&apos;m{' '}
            <span className="gradient-text">Alex Thompson</span>
            <br />
            a Frontend Developer
          </h1>

          <p className="text-xl md:text-2xl text-primary-800 dark:text-primary-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            I build modern, performant web experiences using React, Next.js, and Tailwind CSS.
            Passionate about creating intuitive user interfaces and seamless digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="large"
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 text-lg border border-primary-200/30 hover:border-primary-800/30 dark:border-primary-800/30 dark:hover:border-primary-200/30 transition-all duration-300"
            >
              View Projects
            </Button>
            <Button
              size="large"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 text-lg hover:bg-primary-800 hover:text-primary-200 dark:hover:bg-primary-200 dark:hover:text-primary-800"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;