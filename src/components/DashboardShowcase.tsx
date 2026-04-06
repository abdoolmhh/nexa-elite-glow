import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import mockupDashboard from '@/assets/mockup-dashboard.png';
import demoAccounting from '@/assets/demo-accounting.mp4';
import demoCustomer from '@/assets/demo-customer.mp4';
import heroVideo from '@/assets/hero-video.webm';

const TABS = [
  { key: 'overview', label: '📊 Dashboard', content: 'image' as const },
  { key: 'accounting', label: '💰 Accounting', content: 'video' as const, src: demoAccounting },
  { key: 'customers', label: '👥 Customers', content: 'video' as const, src: demoCustomer },
  { key: 'demo', label: '🎬 Live Demo', content: 'video' as const, src: heroVideo },
];

const DashboardShowcase = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="demo" className="py-32 relative z-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none opacity-[0.06]"
        style={{ background: 'radial-gradient(ellipse, hsl(158 82% 50%), transparent 70%)' }}
      />

      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="section-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Command Center
            </span>
            <h2 className="section-heading text-foreground">
              One dashboard.<br />
              <span className="text-primary">Total control.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={100}>
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {TABS.map((tab, i) => (
              <button
                key={tab.key}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-400 ${
                  active === i
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/20 hover:scale-[1.02]'
                }`}
                style={active === i ? { boxShadow: '0 8px 30px -4px hsl(158 82% 50% / 0.4)' } : {}}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="relative max-w-4xl mx-auto perspective-container">
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-full blur-[100px] morph-blob" style={{ background: 'hsl(158 82% 50% / 0.1)' }} />
            </div>

            <div className="relative" style={{ transform: 'perspective(1200px) rotateX(3deg)' }}>
              <div className="relative">
                {TABS.map((tab, i) => (
                  <div key={tab.key} className={`crossfade-panel ${active === i ? 'active' : ''}`}>
                    <div className="rounded-2xl overflow-hidden border border-border bg-card/40 backdrop-blur-sm shadow-2xl shadow-foreground/5 glow-pulse gradient-border">
                      {tab.content === 'image' ? (
                        <img src={mockupDashboard} alt="NEXA Analytics Dashboard" className="w-full" loading="lazy" />
                      ) : (
                        <video key={tab.src} src={tab.src} className="w-full" autoPlay muted loop playsInline />
                      )}
                      <div className="laser-scan" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating KPIs */}
              <div className="absolute -top-5 -right-5 glass-card !p-4 float-slow hidden md:block !hover:transform-none">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'hsl(var(--primary) / 0.1)' }}>📈</div>
                  <div>
                    <p className="text-xs text-muted-foreground">Monthly Revenue</p>
                    <p className="text-base font-bold text-foreground" style={{ fontFamily: "'Space Grotesk'" }}>₦3.2M</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 glass-card !p-4 hidden md:block float-delayed !hover:transform-none">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'hsl(158 82% 50% / 0.1)' }}>📦</div>
                  <div>
                    <p className="text-xs text-muted-foreground">Stock Health</p>
                    <p className="text-base font-bold text-primary">94% Optimal</p>
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
