import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, Shield, WifiOff, Cloud } from 'lucide-react';
import heroDashboard from '@/assets/hero-dashboard.png';

const COUNTERS = [
  { end: 2400, suffix: '+', label: 'Active stores' },
  { end: 4.2, suffix: 'B', prefix: '₦', label: 'Sales processed', decimals: 1 },
  { end: 99.9, suffix: '%', label: 'Uptime SLA', decimals: 1 },
];

const useCountUp = (end: number, duration = 2000, decimals = 0, startOnView = true) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView || !ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * end).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, end, duration, decimals]);

  return { count, ref };
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      section.style.setProperty('--cursor-x', `${e.clientX - rect.left}px`);
      section.style.setProperty('--cursor-y', `${e.clientY - rect.top}px`);
    };
    section.addEventListener('mousemove', onMove);
    return () => section.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden"
      style={{
        background: 'radial-gradient(circle at var(--cursor-x, 50%) var(--cursor-y, 30%), hsl(158 82% 50% / 0.05) 0%, transparent 50%)',
      }}
    >
      {/* Morphing background blobs */}
      <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] pointer-events-none opacity-[0.07] morph-blob"
        style={{ background: 'radial-gradient(circle, hsl(158 82% 50%), transparent 70%)' }}
      />
      <div className="absolute bottom-[-10%] left-[-15%] w-[500px] h-[500px] pointer-events-none opacity-[0.04] morph-blob"
        style={{ background: 'radial-gradient(circle, hsl(158 82% 60%), transparent 70%)', animationDelay: '5s' }}
      />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 xl:gap-24 items-center relative z-10">
        {/* Left — Copy */}
        <div className="max-w-xl">
          <div className="hero-reveal-1">
            <span className="section-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              AI-Powered Store OS
            </span>
          </div>

          <h1 className="hero-reveal-2 text-foreground mb-6" style={{ fontSize: 'clamp(42px, 6vw, 64px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.05 }}>
            The Future of<br />
            Retail is <span className="text-primary">Here.</span>
          </h1>

          <p className="hero-reveal-3 text-lg text-muted-foreground mb-10 leading-relaxed" style={{ maxWidth: '440px' }}>
            AI-powered POS & inventory built for Nigerian retailers. Sell faster, eliminate stockouts, and unlock profits you didn't know you had.
          </p>

          <div className="hero-reveal-4 flex flex-col sm:flex-row gap-3 mb-14">
            <a href="#cta" className="btn-primary cta-glow text-center group">
              Start Free — No Card Needed
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#demo" className="btn-secondary text-center group">
              <Play className="w-4 h-4 mr-2 fill-current opacity-60 transition-transform group-hover:scale-110" />
              Watch 2-Min Demo
            </a>
          </div>

          <div className="hero-reveal-5 flex flex-wrap gap-8 text-sm text-muted-foreground">
            {[
              { icon: WifiOff, label: 'Works offline' },
              { icon: Cloud, label: 'Auto cloud sync' },
              { icon: Shield, label: 'Bank-grade security' },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2 font-medium">
                <Icon className="w-4 h-4 text-primary" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Dashboard mockup */}
        <div className="relative hidden lg:flex hero-reveal-6 justify-center perspective-container">
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-3/4 h-3/4 rounded-full blur-[120px] morph-blob" style={{ background: 'hsl(158 82% 50% / 0.12)' }} />
          </div>

          <div className="relative float-gentle w-full max-w-[580px]" style={{ transform: 'perspective(1000px) rotateY(-3deg) rotateX(2deg)' }}>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-foreground/10 border border-border bg-card/40 backdrop-blur-sm glow-pulse">
              <img src={heroDashboard} alt="NEXA StoreOS Dashboard — real-time analytics" className="w-full" />
              <div className="laser-scan" />
            </div>

            {/* Revenue card — top right */}
            <div className="absolute -top-4 -right-6 glass-card !p-4 float-slow !hover:transform-none">
              <p className="text-xs text-muted-foreground font-medium">Today's Revenue</p>
              <p className="text-2xl font-bold text-foreground" style={{ letterSpacing: '-0.03em' }}>₦248,500</p>
              <p className="text-xs text-primary font-bold">↑ 18.4% vs yesterday</p>
            </div>

            {/* AI card — bottom left */}
            <div className="absolute -bottom-4 -left-6 glass-card !p-4 float-delayed !hover:transform-none">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-lg flex items-center justify-center text-xs" style={{ background: 'hsl(var(--primary) / 0.1)' }}>🧠</div>
                <p className="text-xs font-bold text-foreground typing-cursor">AI Insight</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-[180px]">Paracetamol stock low — reorder now</p>
            </div>
          </div>
        </div>
      </div>

      {/* Counter strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/50 bg-background/60 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex justify-center gap-12 md:gap-24">
          {COUNTERS.map((c) => {
            const { count, ref } = useCountUp(c.end, 2200, c.decimals || 0);
            return (
              <div key={c.label} ref={ref} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground" style={{ letterSpacing: '-0.04em', fontFamily: "'Space Grotesk', sans-serif" }}>
                  {c.prefix || ''}{count}{c.suffix}
                </div>
                <div className="text-xs text-muted-foreground mt-1 font-medium">{c.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
