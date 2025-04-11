
import ProjectCard, { ProjectProps } from "./ProjectCard";

// Sample project data
const projectsData: ProjectProps[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce application with product listings, cart functionality, user authentication, and payment processing.",
    imageUrl: "https://images.unsplash.com/photo-1629760946220-5693ee4c46ac?q=80&w=2070&auto=format&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
  },
  {
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality, task assignments, and real-time updates.",
    imageUrl: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=2069&auto=format&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that provides current conditions and forecasts for any location, featuring interactive maps and data visualization.",
    imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    technologies: ["React", "Redux", "Chart.js", "Weather API", "Mapbox"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Projects</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Here are some of my recent projects. Each one is built with a focus on performance, 
          accessibility, and responsive design. Click on the links to see the live demos or view the source code.
        </p>
        <div className="space-y-16">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
