import { useEffect, useRef } from 'react';
import { CheckCircle2, ArrowRight, Play } from 'lucide-react';
import heroDashboard from '@/assets/hero-dashboard.png';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      section.style.setProperty('--cursor-x', `${x}px`);
      section.style.setProperty('--cursor-y', `${y}px`);
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
        background: 'radial-gradient(circle at var(--cursor-x, 50%) var(--cursor-y, 30%), hsl(158 80% 50% / 0.04) 0%, transparent 60%)',
      }}
    >
      {/* Subtle top gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% -10%, hsl(158 80% 50% / 0.07), transparent)' }} />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 xl:gap-20 items-center relative z-10">
        {/* Left — Copy */}
        <div className="max-w-xl">
          <div className="hero-reveal-1">
            <span className="section-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              AI-Powered Store Management
            </span>
          </div>

          <h1 className="hero-reveal-2 text-4xl md:text-5xl xl:text-[56px] font-semibold leading-[1.15] mb-5 text-foreground" style={{ letterSpacing: '-0.03em' }}>
            Run Your Entire Store<br />
            From One{' '}
            <span className="text-primary">Powerful</span>{' '}
            System.
          </h1>

          <p className="hero-reveal-3 text-lg text-muted-foreground mb-8 leading-relaxed" style={{ maxWidth: '440px' }}>
            Sell faster. Track inventory in real time. Understand your profit instantly — built for Nigerian shops, pharmacies & wholesalers.
          </p>

          <div className="hero-reveal-4 flex flex-col sm:flex-row gap-3 mb-10">
            <a href="#cta" className="btn-primary cta-glow text-center">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="#demo" className="btn-secondary text-center">
              <Play className="w-4 h-4 mr-2 fill-current opacity-70" />
              Watch 2-Min Demo
            </a>
          </div>

          <div className="hero-reveal-5 flex flex-wrap gap-5 text-sm text-muted-foreground">
            {['Secure roles', 'Fast POS checkout', 'Works offline', 'Cloud sync'].map(label => (
              <span key={label} className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Dashboard mockup */}
        <div className="relative hidden lg:flex hero-reveal-6 justify-center">
          {/* Glow blob */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-3/4 h-3/4 rounded-full blur-[80px]" style={{ background: 'hsl(158 80% 50% / 0.12)' }} />
          </div>

          <div className="relative float-gentle w-full max-w-[620px]">
            {/* Main dashboard */}
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-foreground/10 border border-border bg-card/30 backdrop-blur-sm">
              <img
                src={heroDashboard}
                alt="NEXA StoreOS Dashboard"
                className="w-full"
              />
              {/* Laser scan overlay */}
              <div className="laser-scan" />
            </div>

            {/* Floating KPI mini-card — top right */}
            <div className="absolute -top-4 -right-6 bg-background border border-border rounded-xl px-4 py-3 shadow-lg shadow-foreground/5 float-slow">
              <p className="text-xs text-muted-foreground font-medium">Today's Revenue</p>
              <p className="text-lg font-semibold text-foreground" style={{ letterSpacing: '-0.02em' }}>₦248,500</p>
              <p className="text-xs text-primary font-semibold">↑ +18.4%</p>
            </div>

            {/* Floating micro-card — bottom left */}
            <div className="absolute -bottom-4 -left-6 bg-background border border-border rounded-xl px-4 py-3 shadow-lg shadow-foreground/5" style={{ animationDelay: '1.5s' }}>
              <p className="text-xs text-muted-foreground font-medium">Low Stock Alert</p>
              <p className="text-sm font-semibold text-foreground">12 items need restock</p>
              <span className="inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: 'hsl(38 92% 50% / 0.1)', color: 'hsl(38 92% 40%)' }}>Action needed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
