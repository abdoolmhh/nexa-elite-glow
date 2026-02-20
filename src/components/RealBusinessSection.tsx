import ScrollReveal from './ScrollReveal';
import lifestyleLady from '@/assets/lifestyle-lady.png';
import { ArrowRight } from 'lucide-react';

const RealBusinessSection = () => (
  <section id="real-business" className="py-28 relative z-10 bg-secondary/30">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center max-w-6xl mx-auto">
        {/* Left — Image */}
        <ScrollReveal>
          <div className="relative flex justify-center lg:justify-start">
            {/* Glow blob */}
            <div
              className="absolute -inset-8 rounded-3xl pointer-events-none blur-[60px]"
              style={{ background: 'hsl(158 80% 50% / 0.07)' }}
            />
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl shadow-foreground/5 max-w-sm w-full float-gentle">
              <img
                src={lifestyleLady}
                alt="African businesswoman using NEXA StoreOS"
                className="w-full object-cover"
              />
              {/* Floating card overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-md rounded-xl p-4 border border-border shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: 'hsl(var(--primary) / 0.1)' }}>
                    📊
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">Today's profit</p>
                    <p className="text-sm font-semibold text-foreground" style={{ letterSpacing: '-0.01em' }}>₦87,400 — up 22%</p>
                  </div>
                  <span className="text-xs font-semibold text-primary">Live ●</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right — Copy */}
        <ScrollReveal delay={150}>
          <div>
            <span className="section-badge">Built for Real Business</span>
            <h2 className="section-heading text-foreground mb-4">
              Built for Real<br />
              <span className="text-primary">Business Owners.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Whether you run a pharmacy, supermarket, or retail store — NEXA gives you the clarity and control you've always needed.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                { icon: '✔', text: 'Fast POS Checkout — sell in under 10 seconds' },
                { icon: '✔', text: 'Real-Time Inventory Tracking — know exactly what you have' },
                { icon: '✔', text: 'Multi-Store Control — manage all locations from one screen' },
                { icon: '✔', text: 'AI Profit Insights — understand your margins automatically' },
                { icon: '✔', text: 'Smart Reorder Alerts — never run out of your best sellers' },
                { icon: '✔', text: 'Customer Loyalty System — reward repeat buyers' },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="font-bold text-primary text-base flex-shrink-0 mt-0.5">{item.icon}</span>
                  <span className="leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>

            <a href="#how-it-works" className="btn-secondary inline-flex items-center gap-2">
              See How It Works
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default RealBusinessSection;
