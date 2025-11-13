import { Shield, Code2, Lock } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 cyber-glow-text text-center">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 cyber-glow"></div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card border border-primary/30 rounded-lg p-6 hover:border-primary transition-glow group">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:cyber-glow transition-glow">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-muted-foreground">
                Full stack web development with modern technologies and best practices
              </p>
            </div>

            <div className="bg-card border border-secondary/30 rounded-lg p-6 hover:border-secondary transition-glow group">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:cyber-glow-secondary transition-glow">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Security</h3>
              <p className="text-muted-foreground">
                Ethical hacking and penetration testing to identify vulnerabilities
              </p>
            </div>

            <div className="bg-card border border-accent/30 rounded-lg p-6 hover:border-accent transition-glow group">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 transition-glow">
                <Lock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Protection</h3>
              <p className="text-muted-foreground">
                Building secure applications with security-first mindset
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <p className="text-lg text-foreground leading-relaxed mb-4">
                I'm a passionate developer who bridges the gap between software development and cybersecurity.
                My journey combines the creativity of building web applications with the analytical mindset
                required for security testing.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                With expertise in both <span className="text-primary font-semibold">Full Stack Development</span> and{" "}
                <span className="text-secondary font-semibold">Cybersecurity</span>, I create robust applications
                while maintaining a security-first approach. I'm dedicated to ethical hacking, penetration testing,
                and ensuring web applications are both functional and secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
