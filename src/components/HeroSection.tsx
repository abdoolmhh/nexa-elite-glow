import mockupDashboard from '@/assets/mockup-dashboard.png';
import { CheckCircle2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, hsl(158 80% 50% / 0.06), transparent)' }} />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left */}
        <div>
          <span className="hero-reveal-1 section-badge">
            <span className="w-2 h-2 rounded-full bg-primary" />
            AI-Powered Store Management
          </span>
          <h1 className="hero-reveal-2 text-4xl md:text-5xl lg:text-6xl font-mono font-bold leading-tight mb-6 text-foreground">
            Run Inventory + POS + Insights with{' '}
            <span className="text-primary">AI</span>{' '}
            in one system.
          </h1>
          <p className="hero-reveal-3 text-lg text-muted-foreground mb-8 max-w-lg">
            Built for Nigerian shops, pharmacies & wholesalers. Track stock, sell faster, and let AI handle the guesswork.
          </p>
          <div className="hero-reveal-4 flex flex-col sm:flex-row gap-4 mb-8">
            <a href="#cta" className="btn-primary text-center">Get a Free Setup</a>
            <a href="#demo" className="btn-secondary text-center">Watch Demo</a>
          </div>
          <div className="hero-reveal-5 flex flex-wrap gap-6 text-sm text-muted-foreground">
            {['Secure roles', 'Fast POS', 'Sync-ready'].map(label => (
              <span key={label} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Product mockup on transparent card */}
        <div className="relative hidden lg:block hero-reveal-6">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 border border-border bg-card/50 backdrop-blur-sm">
            <img
              src={mockupDashboard}
              alt="NEXA StoreOS Dashboard"
              className="w-full"
            />
          </div>
          {/* Decorative blobs */}
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-[80px] pointer-events-none" style={{ background: 'hsl(158 80% 50% / 0.15)' }} />
          <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full blur-[60px] pointer-events-none" style={{ background: 'hsl(158 80% 50% / 0.1)' }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
