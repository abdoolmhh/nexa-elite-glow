import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const INDUSTRIES = [
  {
    key: 'pharmacy',
    label: 'Pharmacy',
    emoji: '💊',
    features: ['Expiry date tracking', 'Batch number management', 'Drug interaction alerts', 'NAFDAC compliance'],
    highlight: 'Track expiry dates automatically',
  },
  {
    key: 'supermarket',
    label: 'Supermarket',
    emoji: '🛒',
    features: ['Barcode scanning', 'Bulk restocking', 'Category management', 'Supplier ordering'],
    highlight: 'Bulk restock in one click',
  },
  {
    key: 'wholesale',
    label: 'Wholesale',
    emoji: '📦',
    features: ['Margin analytics', 'Tiered pricing', 'Customer accounts', 'Bulk discounts'],
    highlight: 'Understand margins instantly',
  },
];

const IndustrySwitcher = () => {
  const [active, setActive] = useState(0);
  const current = INDUSTRIES[active];

  return (
    <section className="py-32 relative z-10 overflow-hidden" style={{ background: 'hsl(var(--secondary) / 0.3)' }}>
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Industries
            </span>
            <h2 className="section-heading text-foreground">
              Built for your<br />
              <span className="text-primary">type of store.</span>
            </h2>
            <p className="section-subheading">
              Whether you run a pharmacy, supermarket, or wholesale store — NEXA adapts to you.
            </p>
          </div>
        </ScrollReveal>

        {/* Toggle pills */}
        <ScrollReveal delay={100}>
          <div className="flex justify-center gap-2 mb-12">
            {INDUSTRIES.map((ind, i) => (
              <button
                key={ind.key}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === i
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/20'
                }`}
                style={active === i ? { boxShadow: '0 4px 20px -4px hsl(158 82% 50% / 0.35)' } : {}}
              >
                <span className="mr-1.5">{ind.emoji}</span>
                {ind.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Content card with morph transition */}
        <ScrollReveal delay={200}>
          <div className="max-w-2xl mx-auto glass-card !p-8 relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-[0.06]"
              style={{ background: 'radial-gradient(circle, hsl(158 82% 50%), transparent 70%)' }}
            />

            <div key={current.key} className="relative z-10" style={{ animation: 'hero-reveal 0.5s cubic-bezier(0.22,1,0.36,1) both' }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{current.emoji}</span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{current.label}</h3>
                  <p className="text-sm text-primary font-medium">{current.highlight}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {current.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 p-3 rounded-xl bg-background/50 border border-border/50">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(var(--primary) / 0.1)' }}>
                      <svg className="w-3 h-3 text-primary" viewBox="0 0 16 16" fill="none">
                        <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-sm text-foreground font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IndustrySwitcher;
