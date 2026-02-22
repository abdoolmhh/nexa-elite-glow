import ScrollReveal from './ScrollReveal';
import { ArrowRight, MessageCircle, Mail } from 'lucide-react';

interface FinalCTAProps {
  whatsapp: string;
  email: string;
}

const FinalCTA = ({ whatsapp, email }: FinalCTAProps) => (
  <section id="cta" className="py-32 relative z-10">
    <div className="container mx-auto px-6">
      <div className="relative max-w-2xl mx-auto text-center p-16 rounded-3xl glass-card overflow-hidden !hover:transform-none">
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, hsl(158 82% 50% / 0.06), transparent 70%)' }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none blur-[80px]" style={{ background: 'hsl(158 82% 50% / 0.08)' }} />

        <ScrollReveal>
          <span className="section-badge relative z-10">Get Started</span>
          <h2 className="section-heading text-foreground mb-4 relative z-10">
            Ready to sell<br /><span className="text-primary">smarter?</span>
          </h2>
          <p className="text-muted-foreground mb-10 relative z-10">
            Stop managing chaos. Start running your store intelligently.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10 mb-6">
            <a href="#features" className="btn-primary cta-glow text-center">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href={`https://wa.me/${whatsapp}?text=Hi%2C%20I%27d%20like%20to%20set%20up%20NEXA%20StoreOS%20for%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Us
            </a>
          </div>
          <p className="text-xs text-muted-foreground relative z-10">14-day free trial · No card required · Cancel anytime</p>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default FinalCTA;
