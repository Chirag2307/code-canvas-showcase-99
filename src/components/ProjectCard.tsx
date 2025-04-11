
import { ExternalLink, Github, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
}

const ProjectCard = ({ project, index }: { project: ProjectProps; index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <Card className={`overflow-hidden border border-border bg-card card-hover ${
      isEven ? "animate-slideFromLeft" : "animate-slideFromRight"
    } opacity-0`} style={{ animationDelay: `${0.2 * index}s` }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div className={`h-60 overflow-hidden md:h-auto ${isEven ? "md:order-1" : "md:order-2"}`}>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
        <div className={`flex flex-col justify-between p-2 ${isEven ? "md:order-2" : "md:order-1"}`}>
          <div>
            <CardHeader className="p-4 pb-0">
              <CardTitle className="text-xl md:text-2xl font-bold">{project.title}</CardTitle>
              <CardDescription className="text-muted-foreground mt-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-muted text-foreground">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </div>
          <CardFooter className="flex justify-start gap-4 p-4 pt-0">
            <Button variant="outline" size="sm" className="group" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                Live Demo
              </a>
            </Button>
            <Button variant="outline" size="sm" className="group" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                Code
              </a>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
