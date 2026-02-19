import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const PLANS = [
  {
    name: 'Starter',
    monthly: '₦15,000',
    annual: '₦12,000',
    desc: 'Perfect for single-location shops getting started.',
    features: ['1 store location', 'Up to 500 products', 'Basic POS', 'Daily reports', 'Email support'],
    popular: false,
  },
  {
    name: 'Growth',
    monthly: '₦35,000',
    annual: '₦28,000',
    desc: 'For growing businesses that need AI and multi-staff.',
    features: ['Up to 3 locations', 'Unlimited products', 'Full POS + receipts', 'AI reorder alerts', 'Staff roles & permissions', 'Priority support'],
    popular: true,
  },
  {
    name: 'Enterprise',
    monthly: '₦75,000',
    annual: '₦60,000',
    desc: 'Full power for wholesalers and multi-branch operations.',
    features: ['Unlimited locations', 'Unlimited products', 'Advanced analytics', 'Full AI suite', 'API access', 'Dedicated account manager', 'Custom integrations'],
    popular: false,
  },
];

const PricingSection = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="section-badge">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Pricing
            </span>
            <h2 className="section-heading text-foreground">
              Simple, honest <span className="text-primary">pricing.</span>
            </h2>
            <p className="section-subheading mb-8">No hidden fees. Start free, upgrade when ready.</p>

            {/* Toggle */}
            <div className="inline-flex items-center gap-4 font-mono text-sm">
              <span className={annual ? 'text-muted-foreground' : 'text-foreground'}>Monthly</span>
              <button
                onClick={() => setAnnual(!annual)}
                className="relative w-14 h-7 rounded-full transition-colors duration-300 bg-muted"
                style={annual ? { background: 'hsl(158 80% 42%)' } : undefined}
                aria-label="Toggle annual pricing"
              >
                <div
                  className="absolute top-1 w-5 h-5 rounded-full bg-background shadow-sm transition-all duration-300"
                  style={{ left: annual ? '2rem' : '0.25rem' }}
                />
              </button>
              <span className={annual ? 'text-foreground' : 'text-muted-foreground'}>
                Annual <span className="text-primary text-xs">Save 20%</span>
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 120}>
              <div className={`p-8 relative h-full flex flex-col rounded-2xl border bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${plan.popular ? 'border-primary/40 shadow-md shadow-primary/10' : 'border-border'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-mono font-bold bg-primary text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <h3 className="font-mono font-bold text-xl text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-3xl font-mono font-bold text-primary transition-all duration-500">
                    {annual ? plan.annual : plan.monthly}
                  </span>
                  <span className="text-sm text-muted-foreground font-mono">/mo</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={plan.popular ? 'btn-primary text-center w-full' : 'btn-secondary text-center w-full'}
                >
                  Get Started
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
