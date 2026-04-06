import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import mockupPos from '@/assets/mockup-pos-v2.png';
import mockupReports from '@/assets/mockup-reports.png';
import mockupAnalytics from '@/assets/mockup-analytics.png';

const INDUSTRIES = [
  {
    key: 'pharmacy', label: 'Pharmacy', emoji: '💊',
    features: ['Expiry tracking', 'Batch management', 'Drug alerts', 'NAFDAC compliance'],
    highlight: 'Never let a product expire',
    mockup: mockupPos,
  },
  {
    key: 'supermarket', label: 'Supermarket', emoji: '🛒',
    features: ['Barcode scanning', 'Bulk restocking', 'Category mgmt', 'Supplier ordering'],
    highlight: 'Restock 100 items in one click',
    mockup: mockupReports,
  },
  {
    key: 'wholesale', label: 'Wholesale', emoji: '📦',
    features: ['Margin analytics', 'Tiered pricing', 'Customer accounts', 'Bulk discounts'],
    highlight: 'See real margins instantly',
    mockup: mockupAnalytics,
  },
];

const IndustrySwitcher = () => {
  const [active, setActive] = useState(0);

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
              Built for<br />
              <span className="text-primary">how you work.</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex justify-center gap-2 mb-12">
            {INDUSTRIES.map((ind, i) => (
              <button
                key={ind.key}
                onClick={() => setActive(i)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-400 ${
                  active === i
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/20'
                }`}
                style={active === i ? { boxShadow: '0 8px 30px -4px hsl(158 82% 50% / 0.4)' } : {}}
              >
                <span className="mr-2">{ind.emoji}</span>{ind.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-3xl mx-auto relative">
            {INDUSTRIES.map((industry, i) => (
              <div key={industry.key} className={`crossfade-panel ${active === i ? 'active' : ''}`}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Info */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-4xl">{industry.emoji}</span>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{industry.label}</h3>
                        <p className="text-sm text-primary font-bold">{industry.highlight}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {industry.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2.5 p-3 rounded-xl bg-background/50 border border-border/50 transition-all duration-300 hover:border-primary/20 hover:translate-x-1">
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

                  {/* 3D mockup */}
                  <div className="perspective-container">
                    <div className="relative group" style={{ transform: 'perspective(800px) rotateY(-4deg) rotateX(2deg)' }}>
                      <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-foreground/5 gradient-border transition-all duration-700 group-hover:shadow-primary/15">
                        <img src={industry.mockup} alt={`${industry.label} mockup`} className="w-full transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />
                        <div className="laser-scan" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IndustrySwitcher;
