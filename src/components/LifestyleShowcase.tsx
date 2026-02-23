import ScrollReveal from './ScrollReveal';
import lifestyleLady from '@/assets/lifestyle-lady.png';
import mockupAnalytics from '@/assets/mockup-analytics.png';
import { ArrowRight } from 'lucide-react';

const LifestyleShowcase = () => (
  <section className="py-32 relative z-10 overflow-hidden" style={{ background: 'hsl(var(--secondary) / 0.3)' }}>
    {/* Background glow */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-[0.04]"
      style={{ background: 'radial-gradient(circle, hsl(158 82% 50%), transparent 70%)' }}
    />

    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Lifestyle image */}
        <ScrollReveal>
          <div className="relative">
            {/* Glow behind */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-full blur-[80px] morph-blob" style={{ background: 'hsl(158 82% 50% / 0.08)' }} />
            </div>

            <div className="relative float-gentle">
              <img
                src={lifestyleLady}
                alt="Business owner using NEXA StoreOS on mobile"
                className="w-full max-w-md mx-auto rounded-3xl"
                loading="lazy"
              />

              {/* Floating analytics card */}
              <div className="absolute -bottom-4 -right-4 glass-card !p-3 float-slow hidden md:block max-w-[200px]">
                <img
                  src={mockupAnalytics}
                  alt="NEXA Analytics overview"
                  className="w-full rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right — Copy */}
        <ScrollReveal delay={150}>
          <div className="max-w-md">
            <span className="section-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Built for You
            </span>
            <h2 className="section-heading text-foreground">
              Your business,<br />
              <span className="text-primary">in your pocket.</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Monitor sales, track inventory, and get AI insights — all from your phone. No desk required.
            </p>

            <div className="space-y-4 mb-10">
              {[
                'Check real-time sales anywhere',
                'Get instant low-stock alerts',
                'View profit reports on the go',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'hsl(var(--primary) / 0.1)' }}>
                    <svg className="w-3 h-3 text-primary" viewBox="0 0 16 16" fill="none">
                      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a href="#cta" className="btn-primary cta-glow inline-flex">
              Try It Free
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default LifestyleShowcase;
