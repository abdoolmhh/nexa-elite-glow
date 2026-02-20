import ScrollReveal from './ScrollReveal';

// Trusted-by logos (text-based, professional SaaS style)
const LOGOS = [
  { name: 'PharmaCare', sub: 'Pharmacy Chain' },
  { name: 'QuickMart', sub: 'Supermarket' },
  { name: 'MediStock', sub: 'Medical Supplies' },
  { name: 'NaijaWholesale', sub: 'Distributor' },
  { name: 'FreshMart', sub: 'Grocery Store' },
  { name: 'TechRetail', sub: 'Electronics' },
];

const TRUST_STATS = [
  { value: '2,400+', label: 'Active stores' },
  { value: '₦4.2B', label: 'Sales processed' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '24h', label: 'Setup time' },
];

const TrustStrip = () => (
  <section id="trust" className="py-20 relative z-10 border-t border-border">
    <div className="container mx-auto px-6">
      {/* Stats */}
      <ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {TRUST_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-semibold text-foreground mb-1" style={{ letterSpacing: '-0.03em' }}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Trusted-by strip */}
      <ScrollReveal delay={100}>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center mb-8">
          Trusted by retailers across Nigeria
        </p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex flex-col items-center justify-center px-6 py-3 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-sm transition-all duration-200 cursor-default"
            >
              <span className="font-semibold text-foreground text-sm" style={{ letterSpacing: '-0.01em' }}>{logo.name}</span>
              <span className="text-xs text-muted-foreground mt-0.5">{logo.sub}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Trust badges */}
      <ScrollReveal delay={200}>
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {[
            { label: 'Secure Data', icon: '🔐' },
            { label: 'Encrypted Transactions', icon: '🛡️' },
            { label: '99.9% Uptime', icon: '⚡' },
            { label: 'Cloud Backup', icon: '☁️' },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-base">{badge.icon}</span>
              <span className="font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default TrustStrip;
