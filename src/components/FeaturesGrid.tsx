import ScrollReveal from './ScrollReveal';
import { Package, CreditCard, BarChart3, Users, Tag, Truck } from 'lucide-react';

const FEATURES = [
  { Icon: Package, title: 'Inventory Management', desc: 'Track every item across locations. Batch numbers, expiry dates, and real-time stock levels.' },
  { Icon: CreditCard, title: 'POS & Receipts', desc: 'Fast checkout with thermal receipt printing. Works offline, syncs when connected.' },
  { Icon: BarChart3, title: 'Analytics Dashboard', desc: 'Sales trends, profit margins, and performance insights at a glance.' },
  { Icon: Users, title: 'Staff & Roles', desc: 'Assign roles and permissions. Cashiers, managers, and admins — each with the right access.' },
  { Icon: Tag, title: 'Pricing & Promotions', desc: 'Set bulk prices, discounts, and promotions that apply automatically at checkout.' },
  { Icon: Truck, title: 'Suppliers & Purchases', desc: 'Track purchase orders, supplier contacts, and cost prices in one place.' },
];

const FeaturesGrid = () => (
  <section id="features" className="py-24 relative z-10">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="section-badge">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Features
          </span>
          <h2 className="section-heading text-foreground">
            Everything your store needs.{' '}
            <span className="text-primary">Nothing it doesn't.</span>
          </h2>
          <p className="section-subheading">Six core modules. Zero bloat. Built to run your business from day one.</p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map(({ Icon, title, desc }, i) => (
          <ScrollReveal key={title} delay={i * 100}>
            <div className="group p-8 h-full rounded-2xl border border-border bg-card hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-mono font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesGrid;
