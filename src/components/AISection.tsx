import { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';

const AI_INSIGHTS = [
  { icon: '📉', text: '"Paracetamol 500mg" — 3× above average sales. Restock before Friday.', type: 'slide-up' as const },
  { icon: '🚨', text: '"Vitamin C" expires in 18 days. Run a 20% promo to clear stock.', type: 'fade' as const },
  { icon: '📊', text: 'Margin on "Amoxicillin" dropped 8%. Switch to AlphaPharm supplier.', type: 'slide-left' as const },
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
    }, 45);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <div ref={ref} className="flex items-center gap-3 mb-6">
      <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'hsl(var(--primary) / 0.1)' }}>
        <span className="text-base">🧠</span>
      </div>
      <span className="text-sm font-bold text-foreground">{text}</span>
      {text.length < full.length && <span className="typing-cursor text-sm" />}
    </div>
  );
};

const AIInsightCard = ({ icon, text, delay }: { icon: string; text: string; delay: number }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTimeout(() => setVisible(true), delay); }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`flex gap-3 p-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm text-sm transition-all duration-700 ease-out hover:border-primary/20 hover:translate-x-1 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <span className="text-lg flex-shrink-0">{icon}</span>
      <p className="text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
};

const AISection = () => (
  <section id="ai" className="py-32 relative z-10">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-[0.05] morph-blob"
      style={{ background: 'radial-gradient(circle, hsl(158 82% 50%), transparent 70%)' }}
    />

    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center mb-20">
          <span className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            AI-Powered
          </span>
          <h2 className="section-heading text-foreground">
            Your smartest<br />
            <span className="text-primary">employee never sleeps.</span>
          </h2>
          <p className="section-subheading">
            NEXA's AI monitors patterns 24/7 and takes action before problems become losses.
          </p>
        </div>
      </ScrollReveal>

      {/* Micro powers */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {[
          { label: 'Predict stockouts', icon: '📦' },
          { label: 'Catch margin drops', icon: '📉' },
          { label: 'Flag expiring products', icon: '⏰' },
        ].map((item, i) => (
          <ScrollReveal key={item.label} delay={i * 100}>
            <div className="glass-card-3d !p-4 flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-semibold text-foreground">{item.label}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Live AI feed mockup */}
      <ScrollReveal delay={200}>
        <div className="max-w-xl mx-auto glass-card-3d !p-8">
          <TypingHeader />
          <div className="space-y-3">
            {AI_INSIGHTS.map((insight, i) => (
              <AIInsightCard
                key={i}
                icon={insight.icon}
                text={insight.text}
                delay={800 + i * 400}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AISection;
