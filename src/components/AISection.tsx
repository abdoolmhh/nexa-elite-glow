import ScrollReveal from './ScrollReveal';

const AI_FEATURES = [
  {
    emoji: '🔄',
    title: 'Smart Reorder Suggestions',
    desc: 'AI predicts when to restock based on sales velocity and supplier lead times — before you run out.',
    tag: 'Predictive',
  },
  {
    emoji: '⚠️',
    title: 'Low Stock & Expiry Alerts',
    desc: 'Get notified before items run out or expire. Never waste money on dead stock again.',
    tag: 'Proactive',
  },
  {
    emoji: '🔍',
    title: 'Leakage & Anomaly Detection',
    desc: 'AI flags unusual patterns — missing stock, suspicious voids, and cash discrepancies automatically.',
    tag: 'Security',
  },
];

const AISection = () => (
  <section id="ai" className="py-28 relative z-10">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="section-badge">AI-Powered</span>
          <h2 className="section-heading text-foreground">
            Intelligence that works{' '}
            <span className="text-primary">while you sleep.</span>
          </h2>
          <p className="section-subheading">
            Embedded AI that learns your business patterns and acts before problems occur.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {AI_FEATURES.map((feat, i) => (
          <ScrollReveal key={feat.title} delay={i * 130}>
            <div className="relative p-7 rounded-2xl border border-border bg-card hover:shadow-md hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 h-full">
              <div className="flex items-start justify-between mb-5">
                <span className="text-2xl">{feat.emoji}</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))' }}>
                  {feat.tag}
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-base" style={{ letterSpacing: '-0.01em' }}>{feat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* AI insight mockup card */}
      <ScrollReveal delay={200}>
        <div className="max-w-2xl mx-auto p-6 rounded-2xl border border-border bg-card shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: 'hsl(var(--primary) / 0.1)' }}>🧠</div>
            <div>
              <p className="text-sm font-semibold text-foreground">AI Insight — Just now</p>
              <p className="text-xs text-muted-foreground">Powered by NEXA Intelligence</p>
            </div>
            <span className="ml-auto text-xs font-semibold px-2.5 py-1 rounded-full text-primary" style={{ background: 'hsl(var(--primary) / 0.08)' }}>New</span>
          </div>
          <div className="space-y-3">
            {[
              { icon: '📉', text: '"Paracetamol 500mg" has sold 340 units this week — 3× above average. Current stock: 42 units. Recommend restocking now.', highlight: true },
              { icon: '🚨', text: '"Vitamin C 1000mg" expires in 18 days. 86 units remaining. Consider a promotional discount to clear stock.', highlight: false },
              { icon: '📊', text: 'Margin on "Amoxicillin" dropped 8% this month. New supplier pricing may explain the gap.', highlight: false },
            ].map((item, i) => (
              <div key={i} className={`flex gap-3 p-3.5 rounded-xl text-sm ${item.highlight ? 'border border-primary/20' : 'border border-border'}`} style={item.highlight ? { background: 'hsl(var(--primary) / 0.04)' } : {}}>
                <span className="text-base flex-shrink-0">{item.icon}</span>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AISection;
