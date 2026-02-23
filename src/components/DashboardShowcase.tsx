import { useState, useRef } from 'react';
import ScrollReveal from './ScrollReveal';
import mockupDashboard from '@/assets/mockup-dashboard.png';
import demoAccounting from '@/assets/demo-accounting.mp4';
import demoCustomer from '@/assets/demo-customer.mp4';
import heroVideo from '@/assets/hero-video.webm';

const TABS = [
  { key: 'overview', label: 'Dashboard', content: 'image' as const },
  { key: 'accounting', label: 'Accounting', content: 'video' as const, src: demoAccounting },
  { key: 'customers', label: 'Customers', content: 'video' as const, src: demoCustomer },
  { key: 'demo', label: 'Live Demo', content: 'video' as const, src: heroVideo },
];

const DashboardShowcase = () => {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const current = TABS[active];

  return (
    <section id="demo" className="py-32 relative z-10 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-[0.05]"
        style={{ background: 'radial-gradient(ellipse, hsl(158 82% 50%), transparent 70%)' }}
      />

      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="section-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Dashboard
            </span>
            <h2 className="section-heading text-foreground">
              Your entire business.<br />
              <span className="text-primary">One clear view.</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-4">Sales · Cash flow · Inventory · Performance</p>
          </div>
        </ScrollReveal>

        {/* Tab pills */}
        <ScrollReveal delay={100}>
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {TABS.map((tab, i) => (
              <button
                key={tab.key}
                onClick={() => setActive(i)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === i
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/20'
                }`}
                style={active === i ? { boxShadow: '0 4px 20px -4px hsl(158 82% 50% / 0.35)' } : {}}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="relative max-w-4xl mx-auto">
            {/* Glow behind */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-full blur-[80px] morph-blob" style={{ background: 'hsl(158 82% 50% / 0.08)' }} />
            </div>

            <div className="relative float-gentle">
              <div
                key={current.key}
                className="rounded-2xl overflow-hidden border border-border bg-card/40 backdrop-blur-sm shadow-2xl shadow-foreground/5"
                style={{ animation: 'hero-reveal 0.5s cubic-bezier(0.22,1,0.36,1) both' }}
              >
                {current.content === 'image' ? (
                  <img src={mockupDashboard} alt="NEXA Analytics Dashboard" className="w-full" loading="lazy" />
                ) : (
                  <video
                    ref={videoRef}
                    key={current.src}
                    src={current.src}
                    className="w-full"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                )}
                <div className="laser-scan" />
              </div>

              {/* Floating KPI cards */}
              <div className="absolute -top-4 -right-4 glass-card !p-3.5 float-slow hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'hsl(var(--primary) / 0.1)' }}>
                    <span className="text-sm">📈</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Monthly Revenue</p>
                    <p className="text-sm font-bold text-foreground">₦3.2M</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 glass-card !p-3.5 hidden md:block" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'hsl(158 82% 50% / 0.1)' }}>
                    <span className="text-sm">📦</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Stock Health</p>
                    <p className="text-sm font-bold text-primary">94% In Stock</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DashboardShowcase;
