import ScrollReveal from './ScrollReveal';
import mockupDashboard from '@/assets/mockup-dashboard.png';
import { Zap, Package, BrainCircuit, LayoutDashboard, ArrowUpRight } from 'lucide-react';

const CARDS = [
  {
    icon: Zap,
    title: 'Fast Checkout',
    text: 'Complete sales in seconds — even offline.',
    span: 'col-span-1',
  },
  {
    icon: Package,
    title: 'Smart Inventory',
    text: 'Real-time tracking across all locations.',
    span: 'col-span-1',
  },
  {
    icon: BrainCircuit,
    title: 'AI Alerts',
    text: 'Know before stock runs out or expires.',
    span: 'col-span-1',
  },
  {
    icon: LayoutDashboard,
    title: 'Multi-Store Control',
    text: 'Manage every branch from one dashboard.',
    span: 'col-span-1',
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
        <div className="text-center mb-20 max-w-2xl mx-auto">
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

      {/* Bento-style asymmetric grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 max-w-6xl mx-auto">

        {/* Large mockup card — spans 7 cols */}
        <ScrollReveal className="lg:col-span-7">
          <div
            className="relative rounded-3xl border border-border overflow-hidden h-full min-h-[380px] flex items-end p-6"
            style={{
              background: 'linear-gradient(160deg, hsl(var(--card)), hsl(var(--primary) / 0.04))',
            }}
          >
            {/* Green glow blob */}
            <div
              className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none blur-[100px]"
              style={{ background: 'hsl(var(--primary) / 0.1)' }}
            />

            {/* Floating mockup */}
            <div className="relative w-full float-gentle">
              <img
                src={mockupDashboard}
                alt="NEXA StoreOS Analytics Dashboard"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Floating AI insight badge */}
            <div
              className="absolute top-5 right-5 rounded-2xl border border-border px-4 py-3 float-slow"
              style={{
                background: 'hsl(var(--background) / 0.92)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 8px 32px -8px hsl(var(--foreground) / 0.08)',
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
              <p className="text-[11px] text-muted-foreground leading-snug max-w-[180px]">
                Paracetamol stock runs out in <strong className="text-foreground">3 days</strong>
              </p>
            </div>

            {/* Revenue floating badge */}
            <div
              className="absolute bottom-20 left-5 rounded-xl border border-border px-3.5 py-2.5"
              style={{
                background: 'hsl(var(--background) / 0.92)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 8px 24px -6px hsl(var(--foreground) / 0.06)',
              }}
            >
              <p className="text-[10px] text-muted-foreground font-medium">Today's Revenue</p>
              <p className="text-sm font-semibold text-foreground tracking-tight">₦248,500</p>
              <p className="text-[10px] font-semibold text-primary">↑ +18.4%</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Right column — 2x2 feature cards in 5 cols */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {CARDS.map(({ icon: Icon, title, text }, i) => (
            <ScrollReveal key={title} delay={i * 100}>
              <div
                className="group relative rounded-2xl p-5 border border-border hover:border-primary/30 transition-all duration-300 h-full cursor-default"
                style={{
                  background: 'linear-gradient(145deg, hsl(var(--card)), hsl(var(--primary) / 0.03))',
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'hsl(var(--primary) / 0.1)' }}
                >
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>

                {/* Arrow */}
                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-foreground mb-1.5 tracking-tight">
                  {title}
                </h3>

                {/* Text */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Closing CTA */}
      <ScrollReveal delay={200}>
        <div className="text-center mt-20">
          <h3 className="text-xl font-semibold text-foreground mb-4 tracking-tight">
            Ready to simplify your store?
          </h3>
          <a href="#cta" className="btn-primary cta-glow inline-flex items-center gap-2">
            Start Free Trial
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <p className="mt-3 text-xs text-muted-foreground">No credit card required.</p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default RealBusinessSection;
