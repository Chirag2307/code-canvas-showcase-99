
import { useState } from "react";
import { Mail, MessageSquare, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Contact Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="lg:pr-12 animate-slideFromLeft opacity-0" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-muted-foreground mb-6">
              I'm always interested in hearing about new projects, opportunities, and challenges.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-primary mr-3" />
                <span>example@example.com</span>
              </div>
              <p className="text-muted-foreground pt-4">
                Currently available for freelance work and open to both remote and on-site opportunities.
              </p>
            </div>
          </div>
          
          <form 
            onSubmit={handleSubmit} 
            className="space-y-6 bg-card/50 p-6 rounded-lg border border-border animate-slideFromRight opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="space-y-2">
              <div className="flex items-center text-foreground text-sm mb-1">
                <User size={16} className="mr-2" />
                <label htmlFor="name">Name</label>
              </div>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-background border-border"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center text-foreground text-sm mb-1">
                <Mail size={16} className="mr-2" />
                <label htmlFor="email">Email</label>
              </div>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
                className="bg-background border-border"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center text-foreground text-sm mb-1">
                <MessageSquare size={16} className="mr-2" />
                <label htmlFor="subject">Subject</label>
              </div>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="bg-background border-border"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center text-foreground text-sm mb-1">
                <MessageSquare size={16} className="mr-2" />
                <label htmlFor="message">Message</label>
              </div>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                className="min-h-32 bg-background border-border"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center">
                  <Send size={16} className="mr-2" />
                  Send Message
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
