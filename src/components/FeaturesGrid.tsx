import ScrollReveal from './ScrollReveal';

const FEATURES = [
  {
    title: 'Inventory Management',
    desc: 'Real-time stock tracking across all your locations.',
    checks: ['Track every SKU in real time', 'Batch numbers & expiry dates', 'Low stock alerts & reorder points', 'Multi-location sync'],
    accent: '📦',
  },
  {
    title: 'POS & Fast Checkout',
    desc: 'Sell faster at the counter — online or offline.',
    checks: ['Checkout in under 10 seconds', 'Thermal receipt printing', 'Works offline, syncs automatically', 'Multiple payment methods'],
    accent: '🏪',
  },
  {
    title: 'Analytics Dashboard',
    desc: 'Understand your business at a glance.',
    checks: ['Real-time revenue & profit', 'Top products & slow movers', 'Daily, weekly, monthly reports', 'Exportable data'],
    accent: '📊',
  },
  {
    title: 'Staff & Role Control',
    desc: 'Assign exactly the right access to every team member.',
    checks: ['Cashier, manager, admin roles', 'Activity logs & audit trails', 'Restricted access by module', 'Multi-staff support'],
    accent: '👥',
  },
  {
    title: 'Pricing & Promotions',
    desc: 'Dynamic pricing that applies automatically at checkout.',
    checks: ['Bulk & tiered pricing', 'Time-limited promotions', 'Customer loyalty discounts', 'Price override controls'],
    accent: '🏷️',
  },
  {
    title: 'Suppliers & Purchasing',
    desc: 'Manage your entire supply chain from one place.',
    checks: ['Purchase order management', 'Supplier contact directory', 'Cost price tracking', 'Delivery & receipt logs'],
    accent: '🚚',
  },
];

const FeaturesGrid = () => (
  <section id="features" className="py-28 relative z-10 bg-secondary/30">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="section-badge">Features</span>
          <h2 className="section-heading text-foreground">
            Everything your store needs.{' '}
            <span className="text-primary">Nothing it doesn't.</span>
          </h2>
          <p className="section-subheading">
            Six core modules. Built to run your business from day one.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURES.map(({ accent, title, desc, checks }, i) => (
          <ScrollReveal key={title} delay={i * 80}>
            <div className="group p-7 h-full rounded-2xl border border-border bg-background hover:shadow-md hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300">
              <div className="text-2xl mb-4">{accent}</div>
              <h3 className="font-semibold text-foreground mb-1.5 text-base" style={{ letterSpacing: '-0.01em' }}>{title}</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{desc}</p>
              <ul className="space-y-2.5">
                {checks.map(c => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" fill="currentColor" fillOpacity="0.12"/>
                      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesGrid;
