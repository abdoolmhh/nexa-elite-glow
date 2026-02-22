import ScrollReveal from './ScrollReveal';

const STEPS = [
  { num: '01', title: 'Create account', desc: 'Sign up in under a minute.', emoji: '⚡' },
  { num: '02', title: 'Import products', desc: 'Upload or enter your catalog.', emoji: '📦' },
  { num: '03', title: 'Start selling', desc: 'You\'re live. That simple.', emoji: '🚀' },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-32 relative z-10">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center mb-20">
          <span className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            How It Works
          </span>
          <h2 className="section-heading text-foreground">
            Three steps.<br />
            <span className="text-primary">That's it.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-12 left-[33%] right-[33%] h-px" style={{ background: 'linear-gradient(90deg, hsl(var(--border)), hsl(var(--primary) / 0.3), hsl(var(--border)))' }} />

        {STEPS.map((step, i) => (
          <ScrollReveal key={step.num} delay={i * 150}>
            <div className="text-center relative">
              <div className="relative inline-flex flex-col items-center mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-3 glass-card !p-0 !hover:transform-none">
                  {step.emoji}
                </div>
                <span className="text-xs font-bold text-primary tracking-[0.15em] uppercase">{step.num}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-base">{step.title}</h3>
              <p className="text-sm text-muted-foreground max-w-[200px] mx-auto">{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
