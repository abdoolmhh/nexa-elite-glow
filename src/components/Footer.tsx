const Footer = () => (
  <footer className="border-t border-border py-14 relative z-10 bg-card">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-10 mb-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm" style={{ background: 'hsl(var(--primary) / 0.15)' }}>
              🏪
            </div>
            <span className="font-semibold text-lg text-foreground" style={{ letterSpacing: '-0.02em' }}>
              NEXA <span className="text-primary">StoreOS</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            AI-powered inventory, POS & analytics built for Nigerian retail businesses. Sell faster, track smarter, grow confidently.
          </p>
        </div>

        {/* Product links */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Product</p>
          <div className="space-y-2.5">
            {[
              { label: 'Features', href: '#features' },
              { label: 'AI Intelligence', href: '#ai' },
              { label: 'Demo', href: '#demo' },
              { label: 'Pricing', href: '#pricing' },
            ].map(link => (
              <a key={link.label} href={link.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Company links */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Company</p>
          <div className="space-y-2.5">
            {[
              { label: 'FAQ', href: '#faq' },
              { label: 'Contact', href: '#cta' },
              { label: 'Privacy Policy', href: '#' },
              { label: 'Terms of Service', href: '#' },
            ].map(link => (
              <a key={link.label} href={link.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} NEXA StoreOS. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Made with ❤️ for Nigerian retailers
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
