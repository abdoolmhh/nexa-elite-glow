const Footer = () => (
  <footer className="border-t border-border py-12 relative z-10">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="font-mono font-bold text-lg">
            <span className="text-primary">NEXA</span>
            <span className="text-foreground">StoreOS</span>
          </span>
          <p className="text-sm text-muted-foreground mt-1">AI-powered inventory, POS & analytics for African retail.</p>
        </div>
        <div className="flex flex-wrap gap-6 font-mono text-sm text-muted-foreground">
          {['Features', 'AI', 'Demo', 'Pricing', 'FAQ'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground font-mono">
        © {new Date().getFullYear()} NEXA StoreOS. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
