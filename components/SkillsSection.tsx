'use client'
import { motion } from "framer-motion";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Frameworks",
      skills: ["React", "Next.js", "Vue.js", "Angular", "Svelte"]
    },
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Python", "Java"]
    },
    {
      title: "Styling & Design",
      skills: ["Tailwind CSS", "Styled Components", "SCSS", "Figma", "Adobe XD"]
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase", "Supabase"]
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "GitHub", "VS Code", "Webpack", "Vite", "Docker"]
    },
    {
      title: "Testing & Performance",
      skills: ["Jest", "Cypress", "React Testing Library", "Lighthouse", "Web Vitals"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card-foreground dark:bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-primary-800 dark:text-primary-200 max-w-2xl mx-auto">
            I work with a diverse range of technologies to bring ideas to life,
            always staying current with the latest industry trends and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-card-foreground/50 dark:bg-card rounded-lg p-6 border border-primary-800/30 dark:border-primary-200/30 hover:border-primary-800/50 transition-all duration-300"
              // style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-background dark:text-foreground transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill,i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    className="border border-primary-200/20 dark:border-primary-800/20 hover:bg-primary-800/30 dark:hover:bg-primary-200/30 hover:text-primary-800 dark:hover:text-primary-200 dark:hover:bg-primary-200/50  bg-primary-800 dark:bg-primary-200/90 text-foreground dark:text-background border-primary-800/50 dark:border-primary-200/50 inline-flex items-center px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;