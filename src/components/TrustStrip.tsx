import ScrollReveal from './ScrollReveal';

const TRUST_ITEMS = [
  {
    icon: '📊',
    title: 'Profit-first reporting',
    desc: 'See exactly where your money goes. Real margins, not guesses.',
  },
  {
    icon: '⚡',
    title: 'Faster counter service',
    desc: 'POS designed for speed. Ring up sales in seconds, not minutes.',
  },
  {
    icon: '🔐',
    title: 'Accountability & audit trails',
    desc: 'Every action logged. Know who did what, and when.',
  },
];

const TrustStrip = () => (
  <section id="trust" className="py-20 relative z-10">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-6">
        {TRUST_ITEMS.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 120}>
            <div className="text-center p-8 rounded-2xl border border-border bg-card hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-mono font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStrip;
