import { useRef, useState } from 'react';
import { POSTerminal, AnalyticsOrb, FloatingDashboard } from './icons/ThreeDIcons';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: -500, y: -500 })}
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Cursor glow */}
      <div
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full blur-[120px] transition-all duration-150 ease-out"
        style={{
          left: mousePos.x - 250,
          top: mousePos.y - 250,
          background: 'hsl(158 80% 50% / 0.15)',
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none" style={{ background: 'hsl(158 80% 50% / 0.06)' }} />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left */}
        <div>
          <span className="hero-reveal-1 inline-block font-mono text-sm text-primary mb-4 tracking-widest uppercase">
            AI-Powered Store Management
          </span>
          <h1 className="hero-reveal-2 text-4xl md:text-5xl lg:text-6xl font-mono font-bold leading-tight mb-6 text-foreground">
            Run Inventory + POS + Insights with{' '}
            <span className="text-primary glow-text">AI</span>{' '}
            in one system.
          </h1>
          <p className="hero-reveal-3 text-lg text-muted-foreground mb-8 max-w-lg">
            Built for Nigerian shops, pharmacies & wholesalers. Track stock, sell faster, and let AI handle the guesswork.
          </p>
          <div className="hero-reveal-4 flex flex-col sm:flex-row gap-4 mb-8">
            <a href="#cta" className="btn-primary text-center">Get a Free Setup</a>
            <a href="#demo" className="btn-secondary text-center">Watch Demo</a>
          </div>
          <div className="hero-reveal-5 flex flex-wrap gap-6 text-sm text-muted-foreground font-mono">
            {['Secure roles', 'Fast POS', 'Sync-ready'].map(label => (
              <span key={label} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Product mockup */}
        <div className="relative hidden lg:block hero-reveal-6">
          <div className="glass-panel p-6 rounded-2xl relative laser-scan">
            {/* KPI row */}
            <div className="flex gap-3 mb-4">
              {[
                { label: 'Revenue', value: '₦2.4M', change: '+12%' },
                { label: 'Orders', value: '1,847', change: '+8%' },
                { label: 'Stock', value: '12,403', change: '98%' },
              ].map((kpi, i) => (
                <div key={kpi.label} className="flex-1 glass-panel p-3 rounded-lg">
                  <div className="text-[10px] font-mono text-muted-foreground">{kpi.label}</div>
                  <div className="text-lg font-mono font-bold text-primary" style={{ animationDelay: `${i * 200}ms` }}>
                    {kpi.value}
                  </div>
                  <div className="text-[9px] font-mono text-primary/60">{kpi.change}</div>
                </div>
              ))}
            </div>

            {/* Mini chart */}
            <div className="glass-panel p-3 rounded-lg mb-4">
              <div className="text-[10px] font-mono text-muted-foreground mb-2">Weekly Sales</div>
              <div className="flex items-end gap-1 h-16">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm chart-bar"
                    style={{
                      height: `${h}%`,
                      background: `hsl(158 80% 50% / ${0.2 + (h / 100) * 0.4})`,
                      animationDelay: `${i * 80}ms`,
                    } as React.CSSProperties}
                  />
                ))}
              </div>
            </div>

            {/* Table hint */}
            <div className="glass-panel p-3 rounded-lg">
              <div className="flex justify-between text-[9px] font-mono text-muted-foreground mb-2">
                <span>Product</span><span>Qty</span><span>Status</span>
              </div>
              {['Paracetamol 500mg', 'Vitamin C 1000mg', 'Hand Sanitizer'].map((item, i) => (
                <div key={item} className="flex justify-between text-[10px] font-mono text-foreground/70 py-1 border-t border-border/30">
                  <span>{item}</span>
                  <span>{[342, 128, 67][i]}</span>
                  <span className={`${i === 2 ? 'text-yellow-400' : 'text-primary'}`}>
                    {i === 2 ? 'Low' : 'OK'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating 3D icons */}
          <div className="absolute -top-10 -right-10 parallax-float-1">
            <POSTerminal className="w-20 h-20 opacity-80" />
          </div>
          <div className="absolute -bottom-8 -left-8 parallax-float-2">
            <AnalyticsOrb className="w-16 h-16 opacity-70" />
          </div>
          <div className="absolute top-1/3 -right-14 parallax-float-3">
            <FloatingDashboard className="w-14 h-14 opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
