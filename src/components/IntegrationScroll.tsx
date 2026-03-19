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

const ALL = [...INTEGRATIONS, ...INTEGRATIONS];

const IntegrationScroll = () => (
  <section className="py-24 border-t border-border relative z-10 overflow-hidden">
    <ScrollReveal>
      <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        Plays Nice With Your Existing Stack
      </p>
    </ScrollReveal>

    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, hsl(var(--background)), transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, hsl(var(--background)), transparent)' }} />

      <div className="integration-track flex gap-4 w-max">
        {ALL.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl border border-border bg-card hover:border-primary/25 transition-all duration-300 cursor-default flex-shrink-0 hover:scale-105 hover:shadow-lg hover:shadow-primary/5"
            style={{ opacity: 0.7 }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
          >
            <span className="text-xl">{item.emoji}</span>
            <span className="text-sm font-semibold text-foreground whitespace-nowrap">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IntegrationScroll;
