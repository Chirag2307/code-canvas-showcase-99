
import { Code, Database, Globe, Figma, Server, Command } from "lucide-react";

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    icon: <Globe className="w-6 h-6 text-primary" />,
    skills: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "SASS/SCSS",
      "Redux"
    ],
  },
  {
    name: "Backend",
    icon: <Server className="w-6 h-6 text-primary" />,
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "Django",
      "Flask",
      "REST APIs",
      "GraphQL",
      "Websockets",
      "Authentication"
    ],
  },
  {
    name: "Database",
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Prisma",
      "Mongoose",
      "Firebase",
      "Supabase"
    ],
  },
  {
    name: "Development Tools",
    icon: <Command className="w-6 h-6 text-primary" />,
    skills: [
      "Git & GitHub",
      "Docker",
      "CI/CD",
      "Jest",
      "Cypress",
      "Webpack",
      "Vite",
      "AWS"
    ],
  },
  {
    name: "UI/UX Design",
    icon: <Figma className="w-6 h-6 text-primary" />,
    skills: [
      "Figma",
      "Responsive Design",
      "UI Prototyping",
      "Design Systems",
      "Accessibility",
      "User Experience"
    ],
  },
  {
    name: "Other Skills",
    icon: <Code className="w-6 h-6 text-primary" />,
    skills: [
      "RESTful API Design",
      "Performance Optimization",
      "PWA Development",
      "Unit Testing",
      "Integration Testing"
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Skills & Technologies</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          I have experience working with a wide range of technologies, tools, and frameworks.
          Here are some of the key skills that I bring to the table.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div 
              key={category.name}
              className="bg-card border border-border rounded-lg p-6 animate-fadeIn opacity-0 card-hover"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2">{category.name}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-muted-foreground">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
