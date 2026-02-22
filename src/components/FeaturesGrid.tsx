import { Zap, Package, Brain, BarChart3 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const FEATURES = [
  {
    icon: Zap,
    title: 'Fast Checkout',
    desc: 'Scan. Tap. Done.',
    gradient: 'linear-gradient(145deg, hsl(var(--card)), hsl(var(--primary) / 0.04))',
  },
  {
    icon: Package,
    title: 'Smart Inventory',
    desc: 'Know what\'s left.',
    gradient: 'linear-gradient(145deg, hsl(var(--card)), hsl(var(--primary) / 0.03))',
  },
  {
    icon: Brain,
    title: 'AI Reorder',
    desc: 'Restock automatically.',
    gradient: 'linear-gradient(145deg, hsl(var(--card)), hsl(var(--primary) / 0.05))',
  },
  {
    icon: BarChart3,
    title: 'Profit Insights',
    desc: 'Margins, instantly.',
    gradient: 'linear-gradient(145deg, hsl(var(--card)), hsl(var(--primary) / 0.04))',
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
            Everything you need.<br />
            <span className="text-primary">Nothing you don't.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
        {FEATURES.map(({ icon: Icon, title, desc, gradient }, i) => (
          <ScrollReveal key={title} delay={i * 100}>
            <div
              className="glass-card !p-7 text-center group cursor-default h-full"
              style={{ background: gradient }}
            >
              <div className="w-12 h-12 rounded-2xl mx-auto mb-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                style={{ background: 'hsl(var(--primary) / 0.1)' }}
              >
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1.5 text-base" style={{ letterSpacing: '-0.01em' }}>
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesGrid;
