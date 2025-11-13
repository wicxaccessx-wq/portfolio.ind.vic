import { Code, Shield, Database, Globe, Terminal, Lock } from "lucide-react";

const SkillsSection = () => {
  const fullStackSkills = [
    { name: "HTML & CSS", icon: Globe, level: 90 },
    { name: "JavaScript", icon: Code, level: 75 },
    { name: "Python", icon: Terminal, level: 85 },
    { name: "MySQL", icon: Database, level: 80 },
  ];

  const cyberSecuritySkills = [
    { name: "Kali Linux", icon: Terminal, level: 85 },
    { name: "Burp Suite", icon: Lock, level: 80 },
    { name: "Metasploit", icon: Shield, level: 75 },
    { name: "Nmap", icon: Globe, level: 85 },
    { name: "Wireshark", icon: Database, level: 80 },
  ];

  const SkillCard = ({ name, icon: Icon, level }: { name: string; icon: any; level: number }) => (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-glow group">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:cyber-glow transition-glow">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Proficiency</span>
          <span>{level}%</span>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary cyber-glow transition-all duration-1000 ease-out"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 relative cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 cyber-glow-text text-center">
            Skills & Expertise
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-16 cyber-glow"></div>

          {/* Full Stack Development */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center cyber-glow">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">Full Stack Development</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {fullStackSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Cybersecurity */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center cyber-glow-secondary">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold">Cybersecurity</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cyberSecuritySkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
