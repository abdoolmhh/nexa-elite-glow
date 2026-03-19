import ScrollReveal from './ScrollReveal';
import lifestyleLady from '@/assets/lifestyle-lady.png';
import mockupAnalytics from '@/assets/mockup-analytics.png';
import { ArrowRight } from 'lucide-react';

const LifestyleShowcase = () => (
  <section className="py-32 relative z-10 overflow-hidden" style={{ background: 'hsl(var(--secondary) / 0.3)' }}>
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-[0.05]"
      style={{ background: 'radial-gradient(circle, hsl(158 82% 50%), transparent 70%)' }}
    />

    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Lifestyle image */}
        <ScrollReveal>
          <div className="relative perspective-container">
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-full blur-[100px] morph-blob" style={{ background: 'hsl(158 82% 50% / 0.1)' }} />
            </div>

            <div className="relative float-gentle" style={{ transform: 'perspective(800px) rotateY(3deg)' }}>
              <img
                src={lifestyleLady}
                alt="Business owner managing her store with NEXA on mobile"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl shadow-foreground/10"
                loading="lazy"
              />

              {/* Floating analytics card */}
              <div className="absolute -bottom-5 -right-5 glass-card !p-3 float-slow hidden md:block max-w-[200px] !hover:transform-none">
                <img
                  src={mockupAnalytics}
                  alt="Real-time analytics overview"
                  className="w-full rounded-lg"
                  loading="lazy"
                />
              </div>

              {/* Floating notification */}
              <div className="absolute top-4 -left-3 glass-card !p-3 float-delayed hidden md:block !hover:transform-none">
                <div className="flex items-center gap-2">
                  <span className="text-sm">🔔</span>
                  <div>
                    <p className="text-[10px] text-muted-foreground">Just now</p>
                    <p className="text-xs font-semibold text-foreground">₦12,400 sale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right — Copy */}
        <ScrollReveal delay={150}>
          <div className="max-w-md">
            <span className="section-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Mobile-First
            </span>
            <h2 className="section-heading text-foreground">
              Your entire business.<br />
              <span className="text-primary">In your pocket.</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Check sales from the market. Approve restocks from your couch. Get AI alerts while you sleep. No desk required.
            </p>

            <div className="space-y-4 mb-10">
              {[
                'Real-time sales from anywhere',
                'Instant low-stock push alerts',
                'Profit reports on the go',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110" style={{ background: 'hsl(var(--primary) / 0.1)' }}>
                    <svg className="w-3.5 h-3.5 text-primary" viewBox="0 0 16 16" fill="none">
                      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a href="#cta" className="btn-primary cta-glow inline-flex group">
              Try It Free
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default LifestyleShowcase;
