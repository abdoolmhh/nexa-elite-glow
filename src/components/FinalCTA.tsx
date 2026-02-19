import ScrollReveal from './ScrollReveal';
import { MessageCircle, Mail, Play } from 'lucide-react';

interface FinalCTAProps {
  whatsapp: string;
  email: string;
}

const FinalCTA = ({ whatsapp, email }: FinalCTAProps) => (
  <section id="cta" className="py-24 relative z-10">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto p-12 rounded-3xl border border-border bg-card relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, hsl(158 80% 50% / 0.06), transparent 70%)' }} />

        <ScrollReveal>
          <h2 className="section-heading text-foreground mb-4 relative z-10">
            Ready to stop guessing and start{' '}
            <span className="text-primary">controlling</span> your store?
          </h2>
          <p className="section-subheading mb-10 relative z-10">
            Join hundreds of Nigerian businesses already running smarter with NEXA StoreOS.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              href={`https://wa.me/${whatsapp}?text=Hi%2C%20I%27d%20like%20to%20set%20up%20NEXA%20StoreOS%20for%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Us
            </a>
            <a href={`mailto:${email}?subject=NEXA%20StoreOS%20Setup%20Request`} className="btn-secondary text-center">
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </a>
            <a href="#demo" className="btn-secondary text-center">
              <Play className="w-4 h-4 mr-2" />
              Book a Demo
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default FinalCTA;
