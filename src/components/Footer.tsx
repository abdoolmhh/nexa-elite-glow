const Footer = () => (
  <footer className="border-t border-border/50 py-14 relative z-10">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-10 mb-10">
        <div className="md:col-span-2">
          <span className="font-bold text-lg tracking-tight">
            <span className="text-primary">NEXA</span>
            <span className="text-foreground"> StoreOS</span>
          </span>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mt-3">
            AI-powered inventory, POS & analytics built for Nigerian retail businesses.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">Product</p>
          <div className="space-y-2.5">
            {[
              { label: 'Features', href: '#features' },
              { label: 'AI Intelligence', href: '#ai' },
              { label: 'Dashboard', href: '#demo' },
              { label: 'Pricing', href: '#pricing' },
            ].map(link => (
              <a key={link.label} href={link.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">Company</p>
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

      <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} NEXA StoreOS. All rights reserved.</p>
        <p className="text-xs text-muted-foreground">Made with ❤️ for Nigerian retailers</p>
      </div>
    </div>
  </footer>
);

export default Footer;
