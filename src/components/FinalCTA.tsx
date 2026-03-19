import ScrollReveal from './ScrollReveal';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface FinalCTAProps {
  whatsapp: string;
  email: string;
}

const FinalCTA = ({ whatsapp }: FinalCTAProps) => (
  <section id="cta" className="py-32 relative z-10">
    <div className="container mx-auto px-6">
      <div className="relative max-w-3xl mx-auto text-center p-16 md:p-20 rounded-3xl glass-card overflow-hidden !hover:transform-none">
        {/* Multi-layer glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, hsl(158 82% 50% / 0.08), transparent 70%)' }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 pointer-events-none blur-[100px]" style={{ background: 'hsl(158 82% 50% / 0.1)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none opacity-[0.03] morph-blob"
          style={{ background: 'radial-gradient(circle, hsl(158 82% 50%), transparent 70%)' }}
        />

        <ScrollReveal>
          <span className="section-badge relative z-10">🚀 Let's Go</span>
          <h2 className="section-heading text-foreground mb-5 relative z-10">
            Stop guessing.<br /><span className="text-primary">Start growing.</span>
          </h2>
          <p className="text-muted-foreground mb-10 relative z-10 text-lg max-w-md mx-auto leading-relaxed">
            Join 2,400+ Nigerian retailers who switched to NEXA and never looked back.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10 mb-8">
            <a href="#features" className="btn-primary cta-glow text-center group">
              Start Free — No Card Needed
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`https://wa.me/${whatsapp}?text=Hi%2C%20I%27d%20like%20to%20set%20up%20NEXA%20StoreOS%20for%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center group"
            >
              <MessageCircle className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
              WhatsApp Us
            </a>
          </div>
          <p className="text-xs text-muted-foreground relative z-10 font-medium">14-day free trial · No credit card · Cancel anytime</p>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default FinalCTA;
