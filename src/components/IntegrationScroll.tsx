import ScrollReveal from './ScrollReveal';

const INTEGRATIONS = [
  { name: 'WhatsApp', emoji: '💬' },
  { name: 'Paystack', emoji: '💳' },
  { name: 'Flutterwave', emoji: '🌊' },
  { name: 'Stripe', emoji: '💰' },
  { name: 'Bank Transfer', emoji: '🏦' },
  { name: 'POS Terminal', emoji: '🖥️' },
  { name: 'Email', emoji: '📧' },
  { name: 'SMS Alerts', emoji: '📱' },
  { name: 'Google Sheets', emoji: '📊' },
  { name: 'QuickBooks', emoji: '📒' },
];

// Duplicate for infinite scroll
const ALL = [...INTEGRATIONS, ...INTEGRATIONS];

const IntegrationScroll = () => (
  <section className="py-20 border-t border-border relative z-10 overflow-hidden">
    <ScrollReveal>
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-10">
        Works With Your Existing Tools
      </p>
    </ScrollReveal>

    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, hsl(var(--background)), transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, hsl(var(--background)), transparent)' }} />

      <div className="integration-track flex gap-4 w-max">
        {ALL.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-card hover:border-primary/25 hover:opacity-100 transition-all duration-200 cursor-default flex-shrink-0"
            style={{ opacity: 0.7 }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
          >
            <span className="text-xl">{item.emoji}</span>
            <span className="text-sm font-medium text-foreground whitespace-nowrap">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IntegrationScroll;
