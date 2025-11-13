const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-primary/20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {currentYear}{" "}
            <span className="text-primary font-semibold">Vigneswaran's folio</span>
            {" "}| Built with passion for security and development
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-secondary rounded-full animate-cyber-pulse"></div>
            <span className="text-sm text-muted-foreground font-mono">wick's Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
