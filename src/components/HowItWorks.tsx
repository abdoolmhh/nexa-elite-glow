import ScrollReveal from './ScrollReveal';

const STEPS = [
  { num: '01', title: 'We set you up', desc: 'Tell us about your store. We configure your inventory, categories, and pricing in under 24 hours.' },
  { num: '02', title: 'Your team starts selling', desc: 'Train your staff in minutes. The POS is intuitive — no tech degree required.' },
  { num: '03', title: 'AI takes over the hard parts', desc: 'Smart alerts, reorder suggestions, and reports flow automatically. You focus on growth.' },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 relative z-10">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="section-heading text-foreground">
            Three steps to <span className="text-primary">control.</span>
          </h2>
          <p className="section-subheading">From signup to insights in under a day.</p>
        </div>
      </ScrollReveal>

      <div className="max-w-3xl mx-auto relative">
        {/* Connector line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px hidden sm:block" />

        {STEPS.map((step, i) => (
          <ScrollReveal key={step.num} delay={i * 200}>
            <div className={`flex items-start gap-6 mb-16 last:mb-0 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-shrink-0 relative z-10">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-mono font-bold text-lg glow-pulse"
                  style={{
                    background: 'hsl(158 80% 50% / 0.1)',
                    border: '2px solid hsl(158 80% 50% / 0.3)',
                    color: 'hsl(158 80% 50%)',
                  }}
                >
                  {step.num}
                </div>
              </div>
              <div className={`glass-panel p-6 rounded-xl flex-1 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                <h3 className="font-mono font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
