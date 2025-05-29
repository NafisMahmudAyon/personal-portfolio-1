import { NumberCounter } from "@/components/aspect-ui/NumberCounter";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-primary-200 dark:text-primary-800 leading-relaxed">
                With over 4 years of experience in frontend development, I specialize in creating
                responsive, accessible, and performant web applications. My journey began with a
                curiosity for how things work on the web, and it has evolved into a passion for
                crafting exceptional user experiences.
              </p>

              <p className="text-lg text-primary-200 dark:text-primary-800 leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the
                latest technologies and best practices. When I&apos;m not coding, you can find me
                contributing to open-source projects, writing technical articles, or exploring
                new frameworks and tools.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-primary-800/20 dark:bg-primary-200/20 border border-primary/20 rounded-lg px-4 py-2">
                  <span className="text-primary-200 dark:text-primary-800 font-medium flex items-center flex-col"><span className="text-primary-800 dark:text-primary-200 text-h4 "><NumberCounter end={4} duration={1500} />+</span> Years Experience</span>
                </div>
                <div className="bg-primary-800/20 dark:bg-primary-200/20 border border-primary/20 rounded-lg px-4 py-2">
                  <span className="text-primary-200 dark:text-primary-800 font-medium flex items-center flex-col"><span className="text-primary-800 dark:text-primary-200 text-h4 "><NumberCounter end={50} duration={1500} />+</span> Projects Completed</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-primary/20">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/30 to-purple-600/30 rounded-xl flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;