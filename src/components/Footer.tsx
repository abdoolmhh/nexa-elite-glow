import { ArrowRight } from 'lucide-react';

const PRODUCT_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'AI Intelligence', href: '#ai' },
  { label: 'Dashboard', href: '#demo' },
  { label: 'Pricing', href: '#pricing' },
];

const COMPANY_LINKS = [
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#cta' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
];

const SOCIALS = [
  { label: 'Twitter', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
  )},
  { label: 'Instagram', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  )},
  { label: 'LinkedIn', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  )},
];

const Footer = () => (
  <footer className="relative z-10 overflow-hidden" style={{ background: 'hsl(var(--card))' }}>
    {/* Top accent line */}
    <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.6), transparent)' }} />

    <div className="container mx-auto px-6 pt-20 pb-10">
      <div className="grid md:grid-cols-12 gap-10 mb-16">
        {/* Brand */}
        <div className="md:col-span-5">
          <span className="font-bold text-2xl tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="text-primary">NEXA</span>
            <span className="text-foreground"> StoreOS</span>
          </span>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mt-4">
            The AI-powered operating system for Nigerian retail. Inventory, POS, analytics — all in one platform that actually understands your business.
          </p>
          <div className="flex items-center gap-2 mt-6">
            {SOCIALS.map(s => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-11 h-11 rounded-xl flex items-center justify-center border border-border text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Product links */}
        <div className="md:col-span-3">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Product</p>
          <div className="space-y-3.5">
            {PRODUCT_LINKS.map(link => (
              <a key={link.label} href={link.href} className="block text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200 font-medium">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Company links */}
        <div className="md:col-span-2">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Company</p>
          <div className="space-y-3.5">
            {COMPANY_LINKS.map(link => (
              <a key={link.label} href={link.href} className="block text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200 font-medium">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-foreground mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Stay Updated</p>
          <p className="text-sm text-muted-foreground mb-4">Product updates, tips & retail insights.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 min-w-0 px-3 py-2.5 text-sm rounded-l-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <button className="px-4 py-2.5 rounded-r-xl bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition-all duration-200 hover:shadow-lg"
              style={{ boxShadow: '0 0 0 0 hsl(var(--primary) / 0)' }}
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} NEXA StoreOS. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">Privacy</a>
          <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">Terms</a>
          <span className="text-xs text-muted-foreground">Built with <span className="text-primary font-bold">♥</span> for Nigerian retailers</span>
        </div>
      </div>
    </div>

    {/* Background glow */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-60 pointer-events-none opacity-[0.04]" style={{ background: 'radial-gradient(ellipse, hsl(var(--primary)), transparent 70%)' }} />
  </footer>
);

export default Footer;
