import { Button } from "@/components/ui/button";
import { Terminal, Shield, Code } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style header */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-card border border-primary/30 rounded-lg cyber-glow">
            <Terminal className="w-4 h-4 text-primary animate-cyber-pulse" />
            <span className="text-sm text-muted-foreground font-mono">In the world of 0s and 1s — I’m the glitch that exposes the threat.</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 cyber-glow-text leading-tight">
            Cyber Forensics &<br />
            <span className="text-secondary">Vulnerability Analyst</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4">
           💀 hunting exploits, breaking barriers, and fortifying systems with precision, chaos, and unrelenting digital dominance.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 cyber-glow transition-glow"
              onClick={() => scrollToSection("skills")}
            >
              <Code className="w-5 h-5 mr-2" />
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-glow"
              onClick={() => scrollToSection("certificates")}
            >
              <Shield className="w-5 h-5 mr-2" />
              Certifications
            </Button>
          </div>

          {/* Tech stack icons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center items-center text-muted-foreground px-4">
            {["Python", "Metasploit", "Nmap", "Wireshark", "Kali Linux", "Burp Suite"].map((tech) => (
              <div
                key={tech}
                className="px-3 py-2 sm:px-4 text-sm sm:text-base bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-glow cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;