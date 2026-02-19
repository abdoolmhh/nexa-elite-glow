import ScrollReveal from './ScrollReveal';
import {
  WarehouseDiorama,
  POSTerminal,
  FloatingDashboard,
  SecurityShield,
  ShoppingBasket,
  BarcodeScanner,
} from './icons/ThreeDIcons';

const FEATURES = [
  { Icon: WarehouseDiorama, title: 'Inventory Management', desc: 'Track every item across locations. Batch numbers, expiry dates, and real-time stock levels.' },
  { Icon: POSTerminal, title: 'POS & Receipts', desc: 'Fast checkout with thermal receipt printing. Works offline, syncs when connected.' },
  { Icon: FloatingDashboard, title: 'Analytics Dashboard', desc: 'Sales trends, profit margins, and performance insights at a glance.' },
  { Icon: SecurityShield, title: 'Staff & Roles', desc: 'Assign roles and permissions. Cashiers, managers, and admins — each with the right access.' },
  { Icon: ShoppingBasket, title: 'Pricing & Promotions', desc: 'Set bulk prices, discounts, and promotions that apply automatically at checkout.' },
  { Icon: BarcodeScanner, title: 'Suppliers & Purchases', desc: 'Track purchase orders, supplier contacts, and cost prices in one place.' },
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
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="font-mono font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesGrid;
