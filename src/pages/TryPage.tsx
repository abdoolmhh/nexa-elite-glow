import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Monitor, Smartphone, Tablet } from 'lucide-react';
import demoPOS from '@/assets/demo-pos.png';
import demoDashboard from '@/assets/demo-dashboard.png';
import demoReports from '@/assets/demo-reports.png';
import mockupAnalytics from '@/assets/mockup-analytics.png';
import mockupPos from '@/assets/mockup-pos-v2.png';
import demoAccounting from '@/assets/demo-accounting.mp4';
import demoCustomer from '@/assets/demo-customer.mp4';

const SCREENS = [
  { label: 'POS Terminal', image: demoPOS, type: 'image' as const },
  { label: 'Dashboard', image: demoDashboard, type: 'image' as const },
  { label: 'Reports', image: demoReports, type: 'image' as const },
  { label: 'Analytics', image: mockupAnalytics, type: 'image' as const },
  { label: 'Inventory', image: mockupPos, type: 'image' as const },
  { label: 'Accounting', video: demoAccounting, type: 'video' as const },
  { label: 'Customers', video: demoCustomer, type: 'video' as const },
];

type Device = 'phone' | 'tablet' | 'desktop';

const DEVICE_STYLES: Record<Device, { width: string; radius: string; bezel: string; aspect: string }> = {
  phone: { width: '320px', radius: '40px', bezel: '6px', aspect: '9/19' },
  tablet: { width: '520px', radius: '28px', bezel: '8px', aspect: '3/4' },
  desktop: { width: '780px', radius: '16px', bezel: '4px', aspect: '16/10' },
};

const TryPage = () => {
  const [active, setActive] = useState(0);
  const [device, setDevice] = useState<Device>('phone');
  const screen = SCREENS[active];
  const ds = DEVICE_STYLES[device];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-2xl border-b border-border/50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <span className="font-bold text-lg" style={{ fontFamily: "'Space Grotesk'" }}>
            <span className="text-primary">NEXA</span> <span className="text-foreground">Try It</span>
          </span>
          <a
            href="https://wa.me/2348000000000?text=Hi%2C%20I'd%20like%20to%20set%20up%20NEXA%20StoreOS"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2 !px-5 text-xs"
          >
            Get Started <ArrowRight className="w-3 h-3 ml-1" />
          </a>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Title */}
          <div className="text-center mb-12">
            <span className="section-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Interactive Preview
            </span>
            <h1 className="section-heading text-foreground mb-3">
              See NEXA <span className="text-primary">in action.</span>
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Explore every screen on any device. This is exactly what you get.
            </p>
          </div>

          {/* Device selector */}
          <div className="flex justify-center gap-2 mb-8">
            {([
              { key: 'phone' as Device, icon: Smartphone, label: 'Phone' },
              { key: 'tablet' as Device, icon: Tablet, label: 'Tablet' },
              { key: 'desktop' as Device, icon: Monitor, label: 'Desktop' },
            ]).map(({ key, icon: Icon, label }) => (
              <button
                key={key}
                onClick={() => setDevice(key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  device === key
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/20'
                }`}
                style={device === key ? { boxShadow: '0 8px 30px -4px hsl(158 82% 50% / 0.4)' } : {}}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>

          {/* Screen tabs */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {SCREENS.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setActive(i)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  active === i
                    ? 'bg-primary/10 text-primary border border-primary/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-card'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Device frame */}
          <div className="flex justify-center perspective-container">
            <div
              className="relative transition-all duration-700 ease-out"
              style={{
                width: ds.width,
                maxWidth: '100%',
                borderRadius: ds.radius,
                border: `${ds.bezel} solid hsl(var(--border))`,
                background: 'hsl(var(--card))',
                boxShadow: '0 40px 100px -20px hsl(var(--foreground) / 0.15), 0 0 0 1px hsl(var(--border) / 0.3), inset 0 0 0 1px hsl(var(--border) / 0.2)',
                transform: 'perspective(1200px) rotateX(2deg) rotateY(-1deg)',
              }}
            >
              {/* Notch for phone */}
              {device === 'phone' && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20"
                  style={{
                    width: '120px', height: '28px',
                    background: 'hsl(var(--card))',
                    borderRadius: '0 0 20px 20px',
                    border: '1px solid hsl(var(--border) / 0.3)',
                    borderTop: 'none',
                  }}
                >
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 rounded-full" style={{ background: 'hsl(var(--border))' }} />
                </div>
              )}

              {/* Screen content */}
              <div className="overflow-hidden" style={{ borderRadius: `calc(${ds.radius} - ${ds.bezel})`, aspectRatio: ds.aspect }}>
                {screen.type === 'image' ? (
                  <img
                    src={screen.image}
                    alt={screen.label}
                    className="w-full h-full object-cover object-top transition-all duration-500"
                  />
                ) : (
                  <video
                    key={screen.video}
                    src={screen.video}
                    className="w-full h-full object-cover"
                    autoPlay muted loop playsInline
                  />
                )}
                <div className="laser-scan" />
              </div>

              {/* Home bar for phone */}
              {device === 'phone' && (
                <div className="flex justify-center py-2">
                  <div className="w-28 h-1 rounded-full" style={{ background: 'hsl(var(--border))' }} />
                </div>
              )}
            </div>
          </div>

          {/* Screen label */}
          <div className="text-center mt-8">
            <p className="text-sm font-bold text-foreground">{screen.label}</p>
            <p className="text-xs text-muted-foreground mt-1">Swipe between screens using the tabs above</p>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 p-12 rounded-3xl glass-card gradient-border !hover:transform-none">
            <h2 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>
              Ready to go live?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
              Set up your store in 60 seconds. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/2348000000000?text=Hi%2C%20I'd%20like%20to%20set%20up%20NEXA%20StoreOS"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary cta-glow group"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <Link to="/" className="btn-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TryPage;
