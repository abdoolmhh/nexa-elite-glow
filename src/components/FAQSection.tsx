import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ScrollReveal from './ScrollReveal';

const FAQS = [
  { q: 'How long does setup take?', a: 'Most stores are fully set up within 24 hours. We handle product import, category setup, and staff onboarding for you.' },
  { q: 'Does it work offline?', a: 'Yes. The POS module works offline and syncs automatically when your connection is restored. No sales are ever lost.' },
  { q: 'Can I use it on my phone?', a: 'Absolutely. NEXA StoreOS is fully responsive and works on any device — phone, tablet, or desktop.' },
  { q: 'What about my existing data?', a: 'We support bulk import from Excel, CSV, and other common formats. Our team will help migrate your data at no extra cost.' },
  { q: 'Is my data secure?', a: 'Yes. We use bank-grade encryption, role-based access control, and automated backups. Your data is yours — always.' },
  { q: 'Can I cancel anytime?', a: 'Yes. No lock-in contracts. Cancel anytime from your dashboard. We\'ll even help you export your data.' },
];

const FAQSection = () => (
  <section id="faq" className="py-24 relative z-10">
    <div className="container mx-auto px-6 max-w-3xl">
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="section-badge">
            <span className="w-2 h-2 rounded-full bg-primary" />
            FAQ
          </span>
          <h2 className="section-heading text-foreground">
            Common <span className="text-primary">questions.</span>
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="rounded-2xl border border-border bg-card p-2">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/30 px-4">
                <AccordionTrigger className="font-mono text-sm text-foreground hover:text-primary transition-colors py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-5">
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
