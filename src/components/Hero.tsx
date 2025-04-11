
import { GitHub, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:order-1 order-2">
            <h2 className="text-xl md:text-2xl text-primary animate-slideFromLeft opacity-0" style={{ animationDelay: "0.2s" }}>
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-slideFromLeft opacity-0" style={{ animationDelay: "0.4s" }}>
              John Doe
            </h1>
            <h2 className="text-2xl md:text-3xl text-foreground/80 animate-slideFromLeft opacity-0" style={{ animationDelay: "0.6s" }}>
              Full Stack Developer
            </h2>
            <p className="text-lg text-muted-foreground animate-slideFromLeft opacity-0" style={{ animationDelay: "0.8s" }}>
              I build exceptional and accessible digital experiences for the web.
              Specialized in creating modern, responsive web applications with
              cutting-edge technologies.
            </p>
            <div className="flex flex-wrap gap-4 animate-slideFromLeft opacity-0" style={{ animationDelay: "1s" }}>
              <Button asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="flex space-x-4 pt-4 animate-slideFromLeft opacity-0" style={{ animationDelay: "1.2s" }}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <GitHub size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:example@example.com"
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="md:order-2 order-1 flex justify-center animate-slideFromRight opacity-0" style={{ animationDelay: "0.6s" }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-2xl"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-70 animate-pulse" style={{ animationDuration: "4s" }}></div>
              <div className="relative bg-card rounded-full w-full h-full border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                {/* Replace with your profile image */}
                <span className="text-6xl">👨‍💻</span>
                {/* Alternative: <img src="/profile.jpg" alt="John Doe" className="w-full h-full object-cover" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
