import { Zap, Package, Brain, BarChart3 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const FEATURES = [
  { icon: Zap, title: 'Lightning Checkout', desc: 'Scan, tap, done — 3 seconds flat.', gradient: 'linear-gradient(145deg, hsl(var(--card)), hsl(var(--primary) / 0.08))' },
  { icon: Package, title: 'Smart Inventory', desc: 'Real-time stock tracking. Zero guesswork.', gradient: 'linear-gradient(145deg, hsl(var(--card)), hsl(var(--primary) / 0.05))' },
  { icon: Brain, title: 'AI Auto-Reorder', desc: 'Predicts demand. Restocks automatically.', gradient: 'linear-gradient(145deg, hsl(var(--card)), hsl(var(--primary) / 0.09))' },
  { icon: BarChart3, title: 'Profit X-Ray', desc: 'See exactly which products make money.', gradient: 'linear-gradient(145deg, hsl(var(--card)), hsl(var(--primary) / 0.06))' },
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
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {FEATURES.map(({ icon: Icon, title, desc, gradient }, i) => (
          <ScrollReveal key={title} delay={i * 120}>
            <div
              className="tilt-card glass-card-3d !p-8 text-center group cursor-default h-full gradient-border"
              style={{ background: gradient }}
            >
              <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                style={{ background: 'hsl(var(--primary) / 0.1)' }}
              >
                <Icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-lg">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesGrid;
