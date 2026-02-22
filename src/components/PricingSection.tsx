import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const PLANS = [
  {
    name: 'Starter',
    monthly: '₦15,000',
    annual: '₦12,000',
    desc: 'For small shops starting digital.',
    features: ['1 store location', 'Up to 500 products', 'Basic POS & receipts', 'Daily sales reports', 'Email support'],
    popular: false,
    cta: 'Get Started Free',
  },
  {
    name: 'Growth',
    monthly: '₦35,000',
    annual: '₦28,000',
    desc: 'For growing multi-product businesses.',
    features: ['Up to 3 locations', 'Unlimited products', 'Full POS + receipts', 'AI reorder alerts', 'Staff roles', 'Priority support'],
    popular: true,
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    monthly: '₦75,000',
    annual: '₦60,000',
    desc: 'For multi-store operators.',
    features: ['Unlimited locations', 'Unlimited products', 'Advanced analytics', 'Full AI intelligence', 'API access', 'Dedicated manager', 'Custom integrations'],
    popular: false,
    cta: 'Contact Sales',
  },
];

const PricingSection = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-32 relative z-10" style={{ background: 'hsl(var(--secondary) / 0.3)' }}>
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="section-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Pricing
            </span>
            <h2 className="section-heading text-foreground">
              Simple, transparent<br />
              <span className="text-primary">pricing.</span>
            </h2>
            <p className="section-subheading mb-8">No hidden fees. Cancel anytime.</p>

            <div className="inline-flex items-center gap-4 text-sm">
              <span className={`font-medium transition-colors ${annual ? 'text-muted-foreground' : 'text-foreground'}`}>Monthly</span>
              <button
                onClick={() => setAnnual(!annual)}
                className="relative w-12 h-6 rounded-full transition-colors duration-300"
                style={{ background: annual ? 'hsl(var(--primary))' : 'hsl(var(--muted))' }}
                aria-label="Toggle annual pricing"
              >
                <div
                  className="absolute top-0.5 w-5 h-5 rounded-full bg-background shadow-sm transition-all duration-300"
                  style={{ left: annual ? 'calc(100% - 1.375rem)' : '0.125rem' }}
                />
              </button>
              <span className={`font-medium transition-colors ${annual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Annual <span className="text-primary font-semibold ml-1">Save 20%</span>
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {PLANS.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 100}>
              <div className={`glass-card !p-7 relative h-full flex flex-col ${
                plan.popular ? '!border-primary/30 !shadow-lg !shadow-primary/10' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                    Most Popular
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="font-semibold text-xl text-foreground mb-1" style={{ letterSpacing: '-0.02em' }}>{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.desc}</p>
                </div>

                <div className="mb-6 pb-6 border-b border-border/50">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold text-foreground transition-all duration-500" style={{ letterSpacing: '-0.03em' }}>
                      {annual ? plan.annual : plan.monthly}
                    </span>
                    <span className="text-sm text-muted-foreground mb-1">/mo</span>
                  </div>
                  {annual && <p className="text-xs text-primary font-medium mt-1">Billed annually</p>}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(var(--primary) / 0.1)' }}>
                        <svg className="w-2.5 h-2.5 text-primary" viewBox="0 0 16 16" fill="none">
                          <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#cta" className={`text-center text-sm font-semibold py-3 px-6 rounded-2xl transition-all duration-300 ${
                  plan.popular ? 'btn-primary' : 'btn-secondary'
                }`}>
                  {plan.cta}
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
