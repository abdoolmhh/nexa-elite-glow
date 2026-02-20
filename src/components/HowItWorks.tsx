import ScrollReveal from './ScrollReveal';

const STEPS = [
  {
    num: '01',
    title: 'We set you up in 24 hours',
    desc: 'Tell us about your store. We configure your inventory, categories, and pricing — you\'re live before tomorrow.',
    emoji: '⚙️',
  },
  {
    num: '02',
    title: 'Your team starts selling',
    desc: 'Train staff in minutes. The POS is intuitive — no technical degree required. Just tap and sell.',
    emoji: '👩‍💼',
  },
  {
    num: '03',
    title: 'AI handles the hard parts',
    desc: 'Smart alerts, reorder suggestions, and profit reports flow automatically. You focus on growing.',
    emoji: '🧠',
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-28 relative z-10 bg-secondary/30">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="section-badge">How It Works</span>
          <h2 className="section-heading text-foreground">
            From signup to insights{' '}
            <span className="text-primary">in under a day.</span>
          </h2>
          <p className="section-subheading">Three simple steps. One powerful system.</p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
        {/* Connector — desktop only */}
        <div className="hidden md:block absolute top-10 left-[33%] right-[33%] h-px bg-border" />

        {STEPS.map((step, i) => (
          <ScrollReveal key={step.num} delay={i * 160}>
            <div className="text-center relative">
              {/* Step number circle */}
              <div className="relative inline-flex flex-col items-center mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-3 border border-border bg-background shadow-sm">
                  {step.emoji}
                </div>
                <span className="text-xs font-bold text-primary tracking-widest uppercase">{step.num}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-3 text-base" style={{ letterSpacing: '-0.01em' }}>{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
