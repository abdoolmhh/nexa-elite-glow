import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'AI', href: '#ai' },
  { label: 'Demo', href: '#demo' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
    );
    const timer = setTimeout(() => {
      NAV_LINKS.forEach(link => {
        const el = document.querySelector(link.href);
        if (el) observer.observe(el);
      });
    }, 100);

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : ''}`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono font-bold text-xl">
          <span className="text-primary">NEXA</span>
          <span className="text-foreground">StoreOS</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`font-mono text-sm transition-colors duration-200 ${activeSection === link.href.slice(1) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href="#cta" className="hidden md:inline-flex btn-primary text-sm !py-2 !px-5">
          Request Free Setup
        </a>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground p-2" aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-6">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block py-3 font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#cta" onClick={() => setMobileOpen(false)} className="block mt-4 btn-primary text-sm !py-2 !px-5 text-center w-full">
            Request Free Setup
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
