import { Zap, Package, Brain, BarChart3 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const FEATURES = [
  {
    icon: Zap,
    title: 'Lightning Checkout',
    desc: 'Scan, tap, done. Process sales in under 3 seconds flat.',
    gradient: 'linear-gradient(145deg, hsl(var(--card)), hsl(var(--primary) / 0.06))',
  },
  {
    icon: Package,
    title: 'Smart Inventory',
    desc: 'Always know what\'s in stock, what\'s running low, and what\'s dead weight.',
    gradient: 'linear-gradient(145deg, hsl(var(--card)), hsl(var(--primary) / 0.04))',
  },
  {
    icon: Brain,
    title: 'AI Auto-Reorder',
    desc: 'Our AI learns your sales patterns and restocks before you even notice.',
    gradient: 'linear-gradient(145deg, hsl(var(--card)), hsl(var(--primary) / 0.07))',
  },
  {
    icon: BarChart3,
    title: 'Profit X-Ray',
    desc: 'See exactly which products make money and which drain it.',
    gradient: 'linear-gradient(145deg, hsl(var(--card)), hsl(var(--primary) / 0.05))',
  },
];

const FeaturesGrid = () => (
  <section id="features" className="py-32 relative z-10">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center mb-20">
          <span className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Core Powers
          </span>
          <h2 className="section-heading text-foreground">
            Four superpowers.<br />
            <span className="text-primary">Zero complexity.</span>
          </h2>
          <p className="section-subheading">
            Each feature is built to save you time and make you money.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {FEATURES.map(({ icon: Icon, title, desc, gradient }, i) => (
          <ScrollReveal key={title} delay={i * 100}>
            <div
              className="glass-card-3d !p-8 text-center group cursor-default h-full"
              style={{ background: gradient }}
            >
              <div className="w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg"
                style={{ background: 'hsl(var(--primary) / 0.1)', boxShadow: '0 0 0 0 hsl(var(--primary) / 0)' }}
              >
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg" style={{ letterSpacing: '-0.02em' }}>
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesGrid;
