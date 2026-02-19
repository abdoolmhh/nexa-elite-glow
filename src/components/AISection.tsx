import ScrollReveal from './ScrollReveal';
import { AIChipCore } from './icons/ThreeDIcons';

const AI_FEATURES = [
  { title: 'Smart reorder suggestions', desc: 'AI predicts when to restock based on sales velocity and lead times.', icon: '🔄' },
  { title: 'Low stock & expiry alerts', desc: 'Get notified before items run out or expire. Never waste stock again.', icon: '⚠️' },
  { title: 'Leakage & anomaly detection', desc: 'AI flags unusual patterns — missing stock, suspicious voids, and discrepancies.', icon: '🔍' },
];

const AISection = () => (
  <section id="ai" className="py-24 relative z-10">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="section-badge">
            <span className="w-2 h-2 rounded-full bg-primary" />
            AI-Powered
          </span>
          <h2 className="section-heading text-foreground">
            <span className="text-primary">AI</span> that works while you sleep.
          </h2>
          <p className="section-subheading">Embedded intelligence that learns your business and acts on your behalf.</p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {AI_FEATURES.map((feat, i) => (
          <ScrollReveal key={feat.title} delay={i * 150}>
            <div className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-center">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 mx-auto">
                <span className="text-2xl">{feat.icon}</span>
              </div>
              <h3 className="font-mono font-bold text-foreground mb-2">{feat.title}</h3>
              <p className="text-sm text-muted-foreground">{feat.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Central AI orb */}
      <ScrollReveal delay={200}>
        <div className="flex justify-center mt-12">
          <div className="glow-pulse rounded-full p-4">
            <AIChipCore className="w-24 h-24 opacity-80" />
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AISection;
