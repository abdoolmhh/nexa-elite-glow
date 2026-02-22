import ScrollReveal from './ScrollReveal';

const TrustStrip = () => (
  <section className="py-16 relative z-10 border-t border-border/50">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground text-center mb-8">
          Trusted by retailers across Nigeria
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {[
            { label: 'Secure Data', icon: '🔐' },
            { label: 'Encrypted Transactions', icon: '🛡️' },
            { label: '99.9% Uptime', icon: '⚡' },
            { label: 'Cloud Backup', icon: '☁️' },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{badge.icon}</span>
              <span className="font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default TrustStrip;
