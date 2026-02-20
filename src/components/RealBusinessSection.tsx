import ScrollReveal from './ScrollReveal';
import mockupDashboard from '@/assets/mockup-dashboard.png';
import { Zap, Package, BrainCircuit, LayoutDashboard, ArrowRight } from 'lucide-react';

const CARDS = [
  {
    icon: Zap,
    title: 'Fast Checkout',
    text: 'Complete sales in seconds — even offline.',
  },
  {
    icon: Package,
    title: 'Smart Inventory',
    text: 'Real-time tracking across all locations.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Alerts',
    text: 'Know before stock runs out or expires.',
  },
  {
    icon: LayoutDashboard,
    title: 'Multi-Store Control',
    text: 'Manage every branch from one dashboard.',
  },
];

const RealBusinessSection = () => (
  <section id="real-business" className="py-32 relative z-10 overflow-hidden">
    {/* Subtle background glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, hsl(var(--primary) / 0.04), transparent 70%)' }}
    />

    <div className="container mx-auto px-6">
      {/* Section header */}
      <ScrollReveal>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="section-badge">Built for Real Business</span>
          <h2 className="section-heading text-foreground mt-2">
            Built for Speed.<br />
            <span className="text-primary">Powered by Intelligence.</span>
          </h2>
          <p className="text-muted-foreground text-base mt-3">
            Everything your store needs — in one clean system.
          </p>
        </div>
      </ScrollReveal>

      {/* 2-column grid */}
      <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center max-w-6xl mx-auto">

        {/* LEFT — Mockup */}
        <ScrollReveal>
          <div className="relative flex justify-center">
            {/* Green glow blob */}
            <div
              className="absolute -inset-10 rounded-full pointer-events-none blur-[90px]"
              style={{ background: 'hsl(var(--primary) / 0.08)' }}
            />

            <div className="relative float-gentle w-full max-w-[560px]">
              {/* Dashboard mockup frame */}
              <div
                className="rounded-2xl overflow-hidden border border-border bg-card"
                style={{ boxShadow: '0 24px 60px -12px hsl(var(--foreground) / 0.08), 0 0 0 1px hsl(var(--border))' }}
              >
                <img
                  src={mockupDashboard}
                  alt="NEXA StoreOS Analytics Dashboard"
                  className="w-full block"
                  loading="lazy"
                />
              </div>

              {/* Floating AI insight card */}
              <div
                className="absolute -bottom-5 -right-5 rounded-2xl border border-border px-4 py-3 float-slow"
                style={{
                  background: 'hsl(var(--background) / 0.95)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 32px -8px hsl(var(--foreground) / 0.1)',
                  minWidth: '180px',
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'hsl(var(--primary) / 0.12)' }}
                  >
                    <BrainCircuit className="w-3.5 h-3.5 text-primary" />
                  </span>
                  <p className="text-xs font-semibold text-foreground">AI Insight</p>
                </div>
                <p className="text-xs text-muted-foreground leading-snug">Paracetamol stock runs out in <strong className="text-foreground">3 days</strong> — reorder now.</p>
              </div>

              {/* Floating revenue badge */}
              <div
                className="absolute -top-4 -left-4 rounded-xl border border-border px-3.5 py-2.5"
                style={{
                  background: 'hsl(var(--background) / 0.95)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 24px -6px hsl(var(--foreground) / 0.08)',
                }}
              >
                <p className="text-[10px] text-muted-foreground font-medium">Today's Revenue</p>
                <p className="text-sm font-semibold text-foreground" style={{ letterSpacing: '-0.02em' }}>₦248,500</p>
                <p className="text-[10px] font-semibold text-primary">↑ +18.4% vs yesterday</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* RIGHT — 2x2 Feature cards */}
        <div className="grid grid-cols-2 gap-4">
          {CARDS.map(({ icon: Icon, title, text }, i) => (
            <ScrollReveal key={title} delay={i * 90}>
              <div
                className="group relative rounded-2xl p-5 border border-border hover:border-primary/20 transition-all duration-300 h-full cursor-default"
                style={{
                  background: i % 2 === 0
                    ? 'linear-gradient(135deg, hsl(var(--card)), hsl(var(--primary) / 0.03))'
                    : 'linear-gradient(135deg, hsl(var(--primary) / 0.03), hsl(var(--card)))',
                  boxShadow: '0 2px 12px -4px hsl(var(--foreground) / 0.04)',
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'hsl(var(--primary) / 0.1)' }}
                >
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-foreground mb-1.5" style={{ letterSpacing: '-0.01em' }}>
                  {title}
                </h3>

                {/* Text */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {text}
                </p>

                {/* Subtle hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.04), transparent 60%)' }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Closing CTA */}
      <ScrollReveal delay={200}>
        <div className="text-center mt-20">
          <h3 className="text-xl font-semibold text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
            Ready to simplify your store?
          </h3>
          <a href="#cta" className="btn-primary cta-glow inline-flex items-center gap-2">
            Start Free Trial
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="mt-3 text-xs text-muted-foreground">No credit card required.</p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default RealBusinessSection;
