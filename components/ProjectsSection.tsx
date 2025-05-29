'use client'
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";



const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=300&fit=crop",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts, interactive maps, and weather alerts using modern APIs.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
      technologies: ["React", "Chart.js", "OpenWeather API", "Geolocation", "CSS Grid"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media performance tracking with data visualization and reporting features.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=300&fit=crop",
      technologies: ["Vue.js", "D3.js", "Firebase", "Chart.js", "Bootstrap"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Learning Management System",
      description: "An interactive learning platform with course management, progress tracking, and student-teacher communication tools.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop",
      technologies: ["React", "Redux", "Express.js", "MySQL", "WebRTC"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-primary-200 dark:text-primary-800 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in frontend development
            and problem-solving abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="grid">
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;