import { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';

const AI_INSIGHTS = [
  { icon: '📉', text: '"Paracetamol 500mg" — 3× above average sales. Restock now.', type: 'slide-up' as const },
  { icon: '🚨', text: '"Vitamin C" expires in 18 days. Run promo to clear stock.', type: 'fade' as const },
  { icon: '📊', text: 'Margin on "Amoxicillin" dropped 8%. Review supplier pricing.', type: 'slide-left' as const },
];

const TypingHeader = () => {
  const [text, setText] = useState('');
  const full = 'Analyzing your store data...';
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setText(full.slice(0, ++i));
      if (i >= full.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <div ref={ref} className="flex items-center gap-2 mb-6">
      <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'hsl(var(--primary) / 0.1)' }}>
        <span className="text-sm">🧠</span>
      </div>
      <span className="text-sm font-semibold text-foreground">{text}</span>
      {text.length < full.length && <span className="typing-cursor text-sm" />}
    </div>
  );
};

const AIInsightCard = ({ icon, text, delay, animType }: { icon: string; text: string; delay: number; animType: string }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTimeout(() => setVisible(true), delay); }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);

  const getAnimClass = () => {
    if (!visible) return 'opacity-0 translate-y-6';
    return 'opacity-100 translate-y-0';
  };

  return (
    <div
      ref={ref}
      className={`flex gap-3 p-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm text-sm transition-all duration-700 ease-out ${getAnimClass()}`}
    >
      <span className="text-base flex-shrink-0">{icon}</span>
      <p className="text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
};

const AISection = () => (
  <section id="ai" className="py-32 relative z-10">
    {/* Background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-[0.04] morph-blob"
      style={{ background: 'radial-gradient(circle, hsl(158 82% 50%), transparent 70%)' }}
    />

    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center mb-20">
          <span className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            AI-Powered
          </span>
          <h2 className="section-heading text-foreground">
            Intelligence that works<br />
            <span className="text-primary">while you sleep.</span>
          </h2>
          <p className="section-subheading">
            NEXA watches your patterns and acts before problems happen.
          </p>
        </div>
      </ScrollReveal>

      {/* Micro powers */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {[
          { label: 'Predict stockouts', icon: '📦' },
          { label: 'Spot margin drops', icon: '📉' },
          { label: 'Detect expiring products', icon: '⏰' },
        ].map((item, i) => (
          <ScrollReveal key={item.label} delay={i * 100}>
            <div className="glass-card !p-4 flex items-center gap-3">
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Live AI feed mockup */}
      <ScrollReveal delay={200}>
        <div className="max-w-xl mx-auto glass-card !p-6">
          <TypingHeader />
          <div className="space-y-3">
            {AI_INSIGHTS.map((insight, i) => (
              <AIInsightCard
                key={i}
                icon={insight.icon}
                text={insight.text}
                delay={800 + i * 400}
                animType={insight.type}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AISection;
