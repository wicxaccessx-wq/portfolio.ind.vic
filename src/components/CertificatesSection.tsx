import { Award, CheckCircle2, Clock } from "lucide-react";

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      status: "In Progress",
      description: "Professional certification in ethical hacking and penetration testing",
      year: "2025",
      inProgress: true,
    },
    {
      title: "Python for Beginners",
      issuer: "GUVI",
      status: "Completed",
      description: "Comprehensive Python programming fundamentals",
      year: "2025",
      inProgress: false,
    },
    {
      title: "Cybersecurity 101: Foundations for Absolute Beginners",
      issuer: "Udemy",
      status: "Completed",
      description: "Complete strong fundamentals in Cyber and Network Security",
      year: "2025",
      inProgress: false,
    },
    {
      title: "OWASP Top 10 (2025)",
      issuer: "Udemy",
      status: "Completed",
      description: "Learn vulnerabilities, real-world breaches, prevention strategies, and secure coding",
      year: "2025",
      inProgress: false,
    },
  ];

  return (
    <section id="certificates" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 cyber-glow-text text-center">
            Certificates & Achievements
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 sm:mb-16 cyber-glow"></div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`bg-card border ${
                  cert.inProgress ? "border-secondary/50" : "border-primary/30"
                } rounded-lg p-6 hover:border-primary transition-glow group relative overflow-hidden`}
              >
                {/* Background glow effect */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${
                  cert.inProgress ? "bg-secondary/10" : "bg-primary/10"
                } rounded-full blur-2xl transition-opacity group-hover:opacity-100 opacity-50`}></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${
                      cert.inProgress ? "bg-secondary/20" : "bg-primary/20"
                    } rounded-lg flex items-center justify-center group-hover:cyber-glow transition-glow`}>
                      <Award className={`w-6 h-6 ${cert.inProgress ? "text-secondary" : "text-primary"}`} />
                    </div>
                    <div className="flex items-center gap-2">
                      {cert.inProgress ? (
                        <span className="flex items-center gap-1 text-secondary text-sm px-3 py-1 bg-secondary/10 rounded-full border border-secondary/30">
                          <Clock className="w-3 h-3" />
                          {cert.status}
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-primary text-sm px-3 py-1 bg-primary/10 rounded-full border border-primary/30">
                          <CheckCircle2 className="w-3 h-3" />
                          {cert.status}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{cert.issuer} • {cert.year}</p>
                  <p className="text-foreground/80">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional achievements section */}
          <div className="mt-8 sm:mt-12 bg-card border border-border rounded-lg p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Continuous Learning</h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Committed to staying updated with the latest in web development and cybersecurity.
              Currently pursuing advanced certifications and participating in CTF challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
