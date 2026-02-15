import ScrollReveal from './ScrollReveal';

interface FinalCTAProps {
  whatsapp: string;
  email: string;
}

const FinalCTA = ({ whatsapp, email }: FinalCTAProps) => (
  <section id="cta" className="py-24 relative z-10">
    <div className="container mx-auto px-6 text-center max-w-3xl">
      <ScrollReveal>
        <h2 className="section-heading text-foreground mb-4">
          Ready to stop guessing and start{' '}
          <span className="text-primary glow-text">controlling</span> your store?
        </h2>
        <p className="section-subheading mb-10">
          Join hundreds of Nigerian businesses already running smarter with NEXA StoreOS.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/${whatsapp}?text=Hi%2C%20I%27d%20like%20to%20set%20up%20NEXA%20StoreOS%20for%20my%20business.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center"
          >
            💬 WhatsApp Us
          </a>
          <a href={`mailto:${email}?subject=NEXA%20StoreOS%20Setup%20Request`} className="btn-secondary text-center">
            ✉️ Send Email
          </a>
          <a href="#demo" className="btn-secondary text-center">
            🎬 Book a Demo
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTA;
