'use client'
import { Button } from '@/components/aspect-ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/aspect-ui/Card';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const ProjectCard = ({ title, description, image, technologies, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 border border-primary-200/30 hover:border-primary-800/50 bg-card hover:bg-initial dark:hover:bg-initial row-span-5 grid grid-rows-subgrid gap-0">
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <CardHeader className="p-6 space-y-2 grid grid-rows-subgrid gap-0 row-span-2 ">
        <CardTitle className="text-xl group-hover:text-primary-800 dark:group-hover:text-primary-200 text-primary-200 dark:text-primary-800 transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-primary-200 dark:text-primary-800">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 row-span-2 grid grid-rows-subgrid gap-0">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-primary-800/30 dark:bg-primary-200/30 text-primary-200 dark:text-primary-800 border-primary-800/50 dark:border-primary-200/50 inline-flex items-center px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <Button
            size="small"
            variant="outline"
            className="hover:bg-primary-800 hover:text-primary-200 dark:hover:bg-primary-200 dark:hover:text-primary-800 flex-1"
            onClick={() => window.open(githubUrl, '_blank')}
          >
            GitHub
          </Button>
          <Button
            size="small"
            className="flex-1"
            onClick={() => window.open(liveUrl, '_blank')}
          >
            Live Demo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;