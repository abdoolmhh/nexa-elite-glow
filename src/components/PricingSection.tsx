import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PLANS = [
  {
    name: 'Starter', monthly: '₦15,000', annual: '₦12,000',
    desc: 'For small shops going digital.',
    features: ['1 store', '500 products', 'Basic POS', 'Daily reports', 'Email support'],
    popular: false, cta: 'Get Started',
  },
  {
    name: 'Growth', monthly: '₦35,000', annual: '₦28,000',
    desc: 'For stores ready to scale.',
    features: ['3 locations', 'Unlimited products', 'Full POS', 'AI reorder', 'Staff roles', 'Priority support'],
    popular: true, cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise', monthly: '₦75,000', annual: '₦60,000',
    desc: 'For retail chains.',
    features: ['Unlimited locations', 'Advanced analytics', 'Full AI suite', 'API access', 'Dedicated manager', 'Custom integrations'],
    popular: false, cta: 'Talk to Sales',
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
              Invest in growth.<br />
              <span className="text-primary">Not overhead.</span>
            </h2>
            <p className="section-subheading mb-8">No hidden fees. Cancel anytime.</p>

            <div className="inline-flex items-center gap-4 text-sm">
              <span className={`font-bold transition-colors ${annual ? 'text-muted-foreground' : 'text-foreground'}`}>Monthly</span>
              <button
                onClick={() => setAnnual(!annual)}
                className="relative w-14 h-7 rounded-full transition-colors duration-300"
                style={{ background: annual ? 'hsl(var(--primary))' : 'hsl(var(--muted))' }}
              >
                <div className="absolute top-0.5 w-6 h-6 rounded-full bg-background shadow-sm transition-all duration-300"
                  style={{ left: annual ? 'calc(100% - 1.625rem)' : '0.125rem' }}
                />
              </button>
              <span className={`font-bold transition-colors ${annual ? 'text-foreground' : 'text-muted-foreground'}`}>
                Annual <span className="text-primary font-bold ml-1">-20%</span>
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 120}>
              <div className={`tilt-card glass-card-3d !p-8 relative h-full flex flex-col gradient-border ${
                plan.popular ? '!border-primary/30 !shadow-xl !shadow-primary/15 scale-[1.03]' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground shadow-lg"
                    style={{ boxShadow: '0 4px 20px -4px hsl(158 82% 50% / 0.5)' }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-bold text-xl text-foreground mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.desc}</p>
                </div>

                <div className="mb-6 pb-6 border-b border-border/50">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold text-foreground transition-all duration-500" style={{ fontFamily: "'Space Grotesk'" }}>
                      {annual ? plan.annual : plan.monthly}
                    </span>
                    <span className="text-sm text-muted-foreground mb-1">/mo</span>
                  </div>
                  {annual && <p className="text-xs text-primary font-bold mt-1">Billed annually — save 20%</p>}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(var(--primary) / 0.1)' }}>
                        <svg className="w-3 h-3 text-primary" viewBox="0 0 16 16" fill="none">
                          <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link to="/try" className={`text-center text-sm font-bold py-3.5 px-6 rounded-2xl transition-all duration-300 group block ${
                  plan.popular ? 'btn-primary' : 'btn-secondary'
                }`}>
                  {plan.cta}
                  {plan.popular && <ArrowRight className="w-4 h-4 ml-2 inline transition-transform group-hover:translate-x-1" />}
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
