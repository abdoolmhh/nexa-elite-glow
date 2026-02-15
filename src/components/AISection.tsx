import ScrollReveal from './ScrollReveal';
import GlassCard from './GlassCard';
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
          <h2 className="section-heading text-foreground">
            <span className="text-primary glow-text">AI</span> that works while you sleep.
          </h2>
          <p className="section-subheading">Embedded intelligence that learns your business and acts on your behalf.</p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 items-center">
        <ScrollReveal delay={0}>
          <GlassCard className="p-8">
            <div className="text-2xl mb-3">{AI_FEATURES[0].icon}</div>
            <h3 className="font-mono font-bold text-foreground mb-2">{AI_FEATURES[0].title}</h3>
            <p className="text-sm text-muted-foreground">{AI_FEATURES[0].desc}</p>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="flex flex-col items-center gap-6">
            <div className="glow-pulse rounded-full p-4">
              <AIChipCore className="w-32 h-32" />
            </div>
            <GlassCard className="p-8 w-full">
              <div className="text-2xl mb-3">{AI_FEATURES[1].icon}</div>
              <h3 className="font-mono font-bold text-foreground mb-2">{AI_FEATURES[1].title}</h3>
              <p className="text-sm text-muted-foreground">{AI_FEATURES[1].desc}</p>
            </GlassCard>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <GlassCard className="p-8">
            <div className="text-2xl mb-3">{AI_FEATURES[2].icon}</div>
            <h3 className="font-mono font-bold text-foreground mb-2">{AI_FEATURES[2].title}</h3>
            <p className="text-sm text-muted-foreground">{AI_FEATURES[2].desc}</p>
          </GlassCard>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AISection;
