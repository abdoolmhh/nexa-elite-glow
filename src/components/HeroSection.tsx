import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, Shield, Wifi, WifiOff, Cloud } from 'lucide-react';
import heroDashboard from '@/assets/hero-dashboard.png';

const COUNTERS = [
  { end: 2400, suffix: '+', label: 'Active stores' },
  { end: 4.2, suffix: 'B', prefix: '₦', label: 'Sales processed', decimals: 1 },
  { end: 99.9, suffix: '%', label: 'Uptime', decimals: 1 },
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
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      style={{
        background: 'radial-gradient(circle at var(--cursor-x, 50%) var(--cursor-y, 30%), hsl(158 82% 50% / 0.04) 0%, transparent 50%)',
      }}
    >
      {/* Morphing background blob */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] pointer-events-none opacity-[0.06] morph-blob"
        style={{ background: 'radial-gradient(circle, hsl(158 82% 50%), transparent 70%)' }}
      />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 xl:gap-24 items-center relative z-10">
        {/* Left — Copy */}
        <div className="max-w-lg">
          <div className="hero-reveal-1">
            <span className="section-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              AI-Powered Store OS
            </span>
          </div>

          <h1 className="hero-reveal-2 text-foreground mb-6" style={{ fontSize: 'clamp(40px, 5.5vw, 60px)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.1 }}>
            Run Your Store<br />
            <span className="text-primary">Smarter.</span>
          </h1>

          <p className="hero-reveal-3 text-lg text-muted-foreground mb-10 leading-relaxed" style={{ maxWidth: '420px' }}>
            AI-powered POS built for Nigerian retailers. Sell faster. Track smarter. Grow confidently.
          </p>

          <div className="hero-reveal-4 flex flex-col sm:flex-row gap-3 mb-12">
            <a href="#cta" className="btn-primary cta-glow text-center">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="#demo" className="btn-secondary text-center">
              <Play className="w-4 h-4 mr-2 fill-current opacity-60" />
              Watch 2-Min Demo
            </a>
          </div>

          <div className="hero-reveal-5 flex flex-wrap gap-6 text-sm text-muted-foreground">
            {[
              { icon: WifiOff, label: 'Works offline' },
              { icon: Cloud, label: 'Cloud sync' },
              { icon: Shield, label: 'Fully secure' },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2 font-medium">
                <Icon className="w-4 h-4 text-primary" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Dashboard mockup */}
        <div className="relative hidden lg:flex hero-reveal-6 justify-center">
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-3/4 h-3/4 rounded-full blur-[100px] morph-blob" style={{ background: 'hsl(158 82% 50% / 0.1)' }} />
          </div>

          <div className="relative float-gentle w-full max-w-[580px]">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-foreground/8 border border-border bg-card/40 backdrop-blur-sm">
              <img src={heroDashboard} alt="NEXA StoreOS Dashboard" className="w-full" />
              <div className="laser-scan" />
            </div>

            {/* Revenue card — top right */}
            <div className="absolute -top-3 -right-5 glass-card !p-4 float-slow">
              <p className="text-xs text-muted-foreground font-medium">Today's Revenue</p>
              <p className="text-xl font-bold text-foreground" style={{ letterSpacing: '-0.03em' }}>₦248,500</p>
              <p className="text-xs text-primary font-semibold">↑ 18.4%</p>
            </div>

            {/* AI card — bottom left */}
            <div className="absolute -bottom-3 -left-5 glass-card !p-4" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-md flex items-center justify-center text-[10px]" style={{ background: 'hsl(var(--primary) / 0.1)' }}>🧠</div>
                <p className="text-xs font-semibold text-foreground typing-cursor">AI Insight</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-[180px]">Paracetamol stock low — reorder now</p>
            </div>
          </div>
        </div>
      </div>

      {/* Counter strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-5 flex justify-center gap-12 md:gap-20">
          {COUNTERS.map((c) => {
            const { count, ref } = useCountUp(c.end, 2000, c.decimals || 0);
            return (
              <div key={c.label} ref={ref} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground" style={{ letterSpacing: '-0.03em' }}>
                  {c.prefix || ''}{count}{c.suffix}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">{c.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
