import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ScrollReveal from './ScrollReveal';

const FAQS = [
  { q: 'How long does setup take?', a: 'Most stores are live within 24 hours. We handle product import, categories, and staff onboarding — you just show up.' },
  { q: 'Does it work without internet?', a: 'Yes. The POS works fully offline and syncs automatically when you reconnect. No sale is ever lost.' },
  { q: 'Can I manage from my phone?', a: 'Absolutely. NEXA is mobile-first — check sales, approve restocks, and get AI alerts from anywhere.' },
  { q: 'What about my existing data?', a: 'We import from Excel, CSV, and other formats. Our team migrates your data at no extra cost.' },
  { q: 'Is my business data secure?', a: 'Bank-grade encryption, role-based access, and automated backups. Your data is yours — always.' },
  { q: 'Can I cancel anytime?', a: 'Yes. No contracts, no lock-in. Cancel from your dashboard in two clicks.' },
];

const FAQSection = () => (
  <section id="faq" className="py-32 relative z-10">
    <div className="container mx-auto px-6 max-w-2xl">
      <ScrollReveal>
        <div className="text-center mb-14">
          <span className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            FAQ
          </span>
          <h2 className="section-heading text-foreground">
            Got questions?<br />
            <span className="text-primary">We've got answers.</span>
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="glass-card-3d !p-2 !hover:transform-none">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/30 px-5">
                <AccordionTrigger className="text-sm text-foreground hover:text-primary transition-colors py-5 font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FAQSection;
